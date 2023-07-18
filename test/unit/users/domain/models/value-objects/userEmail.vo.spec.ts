import { UserEmail } from '../../../../../../src/users/domain/models/value-objects/userEmail.vo';
import { InvalidArgumentError } from '../../../../../../src/users/domain/exceptions/invalidArgumentError.exception';

describe('User Email Value Object', () => {
    describe('Success', () => {
        it('should create a new UserEmail with a valid value', () => {
          const validEmail = 'test@example.com';
          const userEmail = new UserEmail(validEmail);
      
          expect(userEmail.value).toEqual(validEmail);
        });
    });

    describe('Failure', () => {
        it('should throw an error when creating a User Email with an undefined value', () => {
          expect(() => {
            new UserEmail(undefined);
          }).toThrow(InvalidArgumentError);
        });
      
        it('should throw an error when creating a User Email with a null value', () => {
          expect(() => {
            new UserEmail(null);
          }).toThrow(InvalidArgumentError);
        });
      
        it('should throw an error when creating a User Email with an empty string value', () => {
          expect(() => {
            new UserEmail('');
          }).toThrow(InvalidArgumentError);
        });
      
        it('should throw an error when creating a User Email with an invalid value', () => {
          const invalidEmail = 'notavalidemail';
          expect(() => {
            new UserEmail(invalidEmail);
          }).toThrow(InvalidArgumentError);
        });
    });
  
  });