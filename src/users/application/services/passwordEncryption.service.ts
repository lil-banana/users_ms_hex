import * as bcrypt from 'bcrypt';

export class PasswordEncryptionService {
    async encryptPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    async checkPassword(password: string, hash: string): Promise<boolean> {
        const matches = await bcrypt.compare(password, hash);
        return matches;
    }
}