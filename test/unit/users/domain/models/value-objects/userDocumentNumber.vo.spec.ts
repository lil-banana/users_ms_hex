import { UserDocumentNumber } from '../../../../../../src/users/domain/models/value-objects/userDocumentNumber.vo';
import { InvalidArgumentError } from '../../../../../../src/users/domain/exceptions/invalidArgumentError.exception';

describe('User Document Number Value Object', () => {
    describe('Success', () => {
        it('should create a new User Document Number with a valid value', () => {
            const validNumber = '1234567890';
            const userDocumentNumber = new UserDocumentNumber(validNumber);
    
            expect(userDocumentNumber.value).toEqual(validNumber);
        });
    });

    describe('Failure', () => {
        it('should throw an error when creating  User Document Number with an undefined value', () => {
            expect(() => {
                new UserDocumentNumber(undefined);
            }).toThrow(InvalidArgumentError);
        });
    
        it('should throw an error when creating  User Document Number with a null value', () => {
            expect(() => {
                new UserDocumentNumber(null);
            }).toThrow(InvalidArgumentError);
        });
    
        it('should throw an error when creating  User Document Number with an empty string value', () => {
            expect(() => {
                new UserDocumentNumber('');
            }).toThrow(InvalidArgumentError);
        });
    
        it('should throw an error when creating  User Document Number with an invalid value', () => {
            const invalidNumber = '123abc';
            expect(() => {
                new UserDocumentNumber(invalidNumber);
            }).toThrow(InvalidArgumentError);
        });
    });

});