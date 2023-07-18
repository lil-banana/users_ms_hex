import { UserCellphoneNumber } from '../../../../../../src/users/domain/models/value-objects/userCellphoneNumber.vo';
import { InvalidArgumentError } from '../../../../../../src/users/domain/exceptions/invalidArgumentError.exception';

describe('User Cellphone Number Value Object', () => {
    describe('Success', () => {
        it('should create a new User Cellphone Number with a valid value', () => {
            const validNumber = '+1234567890';
            const userCellphoneNumber = new UserCellphoneNumber(validNumber);

            expect(userCellphoneNumber.value).toEqual(validNumber);
        });
    });

    describe('Failure', () => {
        it('should throw an error when creating a User Cellphone Number with an undefined value', () => {
            expect(() => {
                new UserCellphoneNumber(undefined);
            }).toThrow(InvalidArgumentError);
        });

        it('should throw an error when creating a User Cellphone Number with a null value', () => {
            expect(() => {
                new UserCellphoneNumber(null);
            }).toThrow(InvalidArgumentError);
        });

        it('should throw an error when creating a User Cellphone Number with an empty string value', () => {
            expect(() => {
                new UserCellphoneNumber('');
            }).toThrow(InvalidArgumentError);
        });

        it('should throw an error when creating a User Cellphone Number with an invalid value', () => {
            const invalidNumber = '+12345678901234';
            expect(() => {
                new UserCellphoneNumber(invalidNumber);
            }).toThrow(InvalidArgumentError);
        });
    });
});