import { BadRequestException, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../../../../../../src/auth/infrastructure/controllers/filters/http-exception.filter';
import { UserNotFoundException } from '../../../../../../src/users/infrastructure/exceptions/userNotFoundException.exception';
import { PasswordDoNotMatchException } from '../../../../../../src/auth/application/exceptions/passwordDoNotMatch.exception';

describe('Http Exception Filter', () => {
    let httpExceptionFilter: HttpExceptionFilter;
    let host: any;
    let response: any;

    beforeEach(() => {
        response = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        host = {
            switchToHttp: jest.fn().mockReturnThis(),
            getResponse: jest.fn().mockReturnValue(response),
        };
        httpExceptionFilter = new HttpExceptionFilter();
    });

    describe('Success', () => {
        it('should handle BadRequestException', () => {
            const expectedMessage = 'Bad request message';
            const exception = new BadRequestException([expectedMessage]);
            const expectedStatus = HttpStatus.BAD_REQUEST;

            httpExceptionFilter.catch(exception, host);

            expect(response.status).toHaveBeenCalledWith(expectedStatus);
            expect(response.json).toHaveBeenCalledWith({
                statusCode: expectedStatus,
                timestamp: expect.any(String),
                message: expectedMessage
            });
        });

        it('should handle UserNotFoundException exception', () => {
            const expectedMessage = 'Incorrect username or password';
            const exception = new UserNotFoundException('message');
            const expectedStatus = HttpStatus.UNAUTHORIZED;

            httpExceptionFilter.catch(exception, host);

            expect(response.status).toHaveBeenCalledWith(expectedStatus);
            expect(response.json).toHaveBeenCalledWith({
                statusCode: expectedStatus,
                timestamp: expect.any(String),
                message: expectedMessage
            });
        });

        it('should handle PasswordDoNotMatchException exception', () => {
            const expectedMessage = 'Incorrect username or password';
            const exception = new PasswordDoNotMatchException('message');
            const expectedStatus = HttpStatus.UNAUTHORIZED;

            httpExceptionFilter.catch(exception, host);

            expect(response.status).toHaveBeenCalledWith(expectedStatus);
            expect(response.json).toHaveBeenCalledWith({
                statusCode: expectedStatus,
                timestamp: expect.any(String),
                message: expectedMessage
            });
        });

        it('should handle unknown exception', () => {
            const exception = new Error();
            const expectedStatus = HttpStatus.INTERNAL_SERVER_ERROR;
            const expectedMessage = 'Internal server error';

            httpExceptionFilter.catch(exception, host);

            expect(response.status).toHaveBeenCalledWith(expectedStatus);
            expect(response.json).toHaveBeenCalledWith({
                statusCode: expectedStatus,
                timestamp: expect.any(String),
                message: expectedMessage
            });
        });
    });
});