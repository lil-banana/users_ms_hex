import { InvalidArgumentError } from '../../exceptions/invalidArgumentError.exception';

export class UserEmail {
    private readonly validEmailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    constructor(readonly value: string) {
        this.value = value;
        this.ensureValueIsDefined(value);
        this.ensureIsValidEmail(value);
    }

    private ensureValueIsDefined(value: string | undefined | null): void {
        if (value === null || value === undefined || value === '') {
            throw new InvalidArgumentError('Value must be defined');
        }
    }

    private ensureIsValidEmail(value: string): void {
        if (!this.validEmailRegExp.test(value)) {
            throw new InvalidArgumentError(`${value} is not a valid email`);
        }
    }
}