import { InvalidArgumentError } from "../../exceptions/invalidArgumentError.exception";

export class UserBirthDay {
    constructor(readonly value: Date) {
        this.value = value;
        this.ensureValueIsDefined(value);
        this.ensureIsValidBirthDay(value);
    }

    private ensureValueIsDefined(value: Date | null): void {
        if (value === null || value === undefined) {
            throw new InvalidArgumentError("Value must be defined");
        }
    }

    private ensureIsValidBirthDay(value: Date): void {
        const now = new Date();
        const date = new Date(value);
        if (now.getFullYear() - date.getFullYear() < 18) {
            throw new InvalidArgumentError("User must be over the legal age (18)");
        }
    }
}