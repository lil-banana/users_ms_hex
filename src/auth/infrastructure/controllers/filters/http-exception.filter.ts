import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, BadRequestException } from '@nestjs/common';
import { UserNotFoundException } from '../../../../users/infrastructure/exceptions/userNotFoundException.exception';
import { PasswordDoNotMatchException } from '../../../application/exceptions/passwordDoNotMatch.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        console.log(exception);
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        
        if (exception instanceof BadRequestException) {
            status = HttpStatus.BAD_REQUEST;
            message = (exception.getResponse() as any).message;
            if (Array.isArray(message)) {
                message = message.join(', ');
            }
        } else if (exception instanceof UserNotFoundException || exception instanceof PasswordDoNotMatchException) {
            status = HttpStatus.UNAUTHORIZED;
            message = 'Incorrect username or password';
        }

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            message
        });
    }
}
