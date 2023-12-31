import * as bcrypt from 'bcrypt';
import { PasswordEncryptionService } from '../../../../../src/users/application/services/passwordEncryption.service';

describe('Password Encryption Service', () => {
    let passwordEncryptionService: PasswordEncryptionService;

    beforeEach(() => {
        passwordEncryptionService = new PasswordEncryptionService();
    });

    describe('Success', () => {
        it('should encrypt the password', async () => {
            const password = 'password';
            const saltRounds = 10;
            const expectedHashedPassword = 'hashedPassword';

            jest.spyOn(bcrypt, 'hash').mockResolvedValue(expectedHashedPassword);

            const hashedPassword: string = await passwordEncryptionService.encryptPassword(password);
            expect(bcrypt.hash).toHaveBeenCalledWith(password, saltRounds);
            expect(hashedPassword).toBe(expectedHashedPassword);
        });

        it('should check the password', async () => {
            const password = 'password';
            const hashedPassword = 'hashedPassword';

            jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

            const matches: boolean = await passwordEncryptionService.checkPassword(password, hashedPassword);
            
            expect(matches).toBe(true);
            expect(bcrypt.compare).toHaveBeenCalledWith(password, hashedPassword);
        });
    });
});