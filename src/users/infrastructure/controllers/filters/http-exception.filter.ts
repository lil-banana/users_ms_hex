import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, BadRequestException } from '@nestjs/common';
import { UserNotFoundException } from '../../../../users/infrastructure/exceptions/userNotFoundException.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        console.error(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        
        if (exception instanceof BadRequestException) {
            status = HttpStatus.BAD_REQUEST;
            message = (exception.getResponse() as any).message;
            if (Array.isArray(message)) {
                message = message.join(', ');
            }
        } else if (exception instanceof UserNotFoundException) {
            status = HttpStatus.NOT_FOUND;
            message = 'User Not found';
        }

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            message
        });
    }
}
