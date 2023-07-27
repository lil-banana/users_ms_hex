import { CLIENT_ROLE_ID } from '../../../../../../src/users/infrastructure/constants';
import { CreateClientGuard } from '../../../../../../src/auth/infrastructure/controllers/guards/createClient.guard';

describe('Create Client Guard', () => {
    let guard: CreateClientGuard;
    let tokenService: any;
    let context: any;
    let request: any;

    beforeEach(() => {
        tokenService = {
            verifyToken: jest.fn(),
        };
        request = {
            body: {
                roleId: CLIENT_ROLE_ID
            },
        };
        context = {
            switchToHttp: jest.fn().mockReturnThis(),
            getRequest: jest.fn()
        };

        guard = new CreateClientGuard(tokenService);
    });

    describe('Success', () => {
        it('should return true if the request has a roleId for client', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue(request);

            const result = await guard.canActivate(context);
            expect(result).toBe(true);
        });
    });

    describe('Failure', () => {
        it('should return false if the request has a roleId different than client', async () => {
            jest.spyOn(context, 'getRequest').mockReturnValue({ body: { roleId: 'notClient' } });

            const result = await guard.canActivate(context);
            expect(result).toBe(false);
        });
    });

});
