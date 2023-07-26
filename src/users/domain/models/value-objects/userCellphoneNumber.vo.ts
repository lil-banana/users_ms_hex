import { InvalidArgumentError } from '../../exceptions/invalidArgumentError.exception';

export class UserCellphoneNumber {
    private readonly validCellphoneNumberRegExp = /^(\+\d{1,12}|\d{1,13})$/;

    constructor(readonly value: string) {
        this.value = value;
        this.ensureValueIsDefined(value);
        this.ensureIsValidCellphoneNumber(value);
    }

    private ensureValueIsDefined(value: string | undefined | null): void {
        if (value === null || value === undefined || value === '') {
            throw new InvalidArgumentError('Value must be defined');
        }
    }

    private ensureIsValidCellphoneNumber(value: string): void {
        if (!this.validCellphoneNumberRegExp.test(value)) {
            throw new InvalidArgumentError(`${value} is not a valid cellphone number`);
        }
    }
}