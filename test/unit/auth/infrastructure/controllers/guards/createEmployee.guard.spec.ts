import { EMPLOYEE_ROLE_ID } from '../../../../../../src/users/infrastructure/constants';
import { CreateEmployeeGuard } from '../../../../../../src/auth/infrastructure/controllers/guards/createEmployee.guard';

describe('Create Employee Guard', () => {
    let guard: CreateEmployeeGuard;
    let tokenService: any;
    let context: any;
    let request: any;

    beforeEach(() => {
        tokenService = {
            verifyToken: jest.fn(),
        };
        request = {
            headers: {
                authorization: 'token',
            },
            body: {
                roleId: EMPLOYEE_ROLE_ID
            },
        };
        context = {
            switchToHttp: jest.fn().mockReturnThis(),
            getRequest: jest.fn()
        };

        guard = new CreateEmployeeGuard(tokenService);
    });

    describe('Success', () => {
        it('should return true if the token is valid and contains the "owner" role and the request has a roleId for employee', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue(request);
            jest.spyOn(tokenService, 'verifyToken').mockReturnValue({ role: 'owner' });

            const result = await guard.canActivate(context);
            expect(result).toBe(true);
        });
    });

    describe('Failure', () => {
        it('should return false if the request has no token', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue({headers: {authorization: undefined}});
            
            const result = await guard.canActivate(context);
            expect(result).toBe(false);
        });

        it('should return false if the token payload has no role', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue(request);
            jest.spyOn(tokenService, 'verifyToken').mockReturnValue({notRole: 'notrole'});

            const result = await guard.canActivate(context);
            expect(result).toBe(false);
        });

        it('should return false if the token payload role is not owner', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue(request);
            jest.spyOn(tokenService, 'verifyToken').mockReturnValue({role: 'notOwner'});

            const result = await guard.canActivate(context);
            expect(result).toBe(false);
        });

        it('should return false if it gets an unexpected error', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue(request);
            jest.spyOn(tokenService, 'verifyToken').mockRejectedValue(new Error());

            const result = await guard.canActivate(context);
            expect(result).toBe(false);
        });
    });

});
