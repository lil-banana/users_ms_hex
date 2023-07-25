import { UserBirthDay } from '../../../../../../src/users/domain/models/value-objects/userBirthDay.vo';
import { InvalidArgumentError } from '../../../../../../src/users/domain/exceptions/invalidArgumentError.exception';

describe('User Birth Day Value Object', () => {
    describe('Success', () => {
        it('should create a new User Birth Day with a valid date', () => {
            const validDate = new Date('2000-01-01');
            const userBirthDay = new UserBirthDay(validDate);
    
            expect(userBirthDay.value).toEqual(validDate);
        });
    });

    describe('Failure', () => {
        it('should throw an error when creating a User Birth Day with an undefined value', () => {
            expect(() => {
                new UserBirthDay(undefined);
            }).toThrow(InvalidArgumentError);
        });
    
        it('should throw an error when creating a User Birth Day with a null value', () => {
            expect(() => {
                new UserBirthDay(null);
            }).toThrow(InvalidArgumentError);
        });
    
        it('should throw an error when creating a User Birth Day with a date representing an underage user', () => {
            const underageDate = new Date();
    
            expect(() => {
                new UserBirthDay(underageDate);
            }).toThrow(InvalidArgumentError);
        });
    });

});
