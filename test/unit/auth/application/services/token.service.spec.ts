import { TokenService } from '../../../../../src/auth/application/services/token.service';

describe('Token Service', () => {
    let tokenService: TokenService;
    let jwtService: any;

    beforeEach(() => {
        jwtService = {
            signAsync: jest.fn(),
            verifyAsync: jest.fn()
        };
        tokenService = new TokenService(jwtService);
    });

    describe('Success', () => {
        describe('signToken', () => {
            it('should sign a token with given payload', async () => {
                const userId = 'id';
                const role = 'role';
                const bossId = 'bossId';
                const expectedToken = 'token';

                jest.spyOn(jwtService, 'signAsync').mockResolvedValue(expectedToken);

                const token: string = await tokenService.signToken(userId, role, bossId);

                expect(token).toBe(expectedToken);
                expect(jwtService.signAsync).toHaveBeenCalledWith({ userId, role, bossId });
            });
        })

        describe('verifyToken', () => {
            it('should verify a token and return payload', async () => {
                const token = 'token';
                const expectedPayload = 'payload';

                jest.spyOn(jwtService, 'verifyAsync').mockResolvedValue(expectedPayload);

                const payload: string = await tokenService.verifyToken(token);

                expect(payload).toBe(expectedPayload);
                expect(jwtService.verifyAsync).toHaveBeenCalledWith(token);
            });
        })
    });
});