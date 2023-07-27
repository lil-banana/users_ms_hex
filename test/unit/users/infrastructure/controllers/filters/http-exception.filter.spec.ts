import { BadRequestException, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../../../../../../src/users/infrastructure/controllers/filters/http-exception.filter';
import { UserNotFoundException } from '../../../../../../src/users/infrastructure/exceptions/userNotFoundException.exception';

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
        jest.spyOn(console, 'error').mockImplementation(() => {});
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
            const expectedMessage = 'User Not found';
            const exception = new UserNotFoundException('message');
            const expectedStatus = HttpStatus.NOT_FOUND;

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