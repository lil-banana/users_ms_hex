import { InvalidArgumentError } from '../../exceptions/invalidArgumentError.exception';

export class UserDocumentNumber {
    private readonly validDocumentNumberRegExp = /^\d*$/;

    constructor(readonly value: string) {
        this.value = value;
        this.ensureValueIsDefined(value);
        this.ensureIsValidDocumentNumber(value);
    }

    private ensureValueIsDefined(value: string | undefined | null): void {
        if (value === null || value === undefined || value === '') {
            throw new InvalidArgumentError('Value must be defined');
        }
    }

    private ensureIsValidDocumentNumber(value: string): void {
        if (!this.validDocumentNumberRegExp.test(value)) {
            throw new InvalidArgumentError(`${value} is not a valid document number`);
        }
    }
}