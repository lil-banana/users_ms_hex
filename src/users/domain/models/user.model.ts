import { UserDocumentNumber } from './value-objects/userDocumentNumber.vo';
import { UserCellphoneNumber } from './value-objects/userCellphoneNumber.vo';
import { UserBirthDay } from './value-objects/userBirthDay.vo';
import { UserEmail } from './value-objects/userEmail.vo';
import { Role } from './role.model';

export class User {
    private readonly _id: string;
    private _name: string;
    private _lastName: string;
    private readonly _documentNumber: UserDocumentNumber;
    private _cellphoneNumber: UserCellphoneNumber;
    private _birthDay: UserBirthDay;
    private _email: UserEmail;
    private _password: string;
    private _role: Role;

    constructor(id: string, name: string, lastName: string, documentNumber: string, cellphoneNumber: string, birthDay: Date, email: string, password: string, role: Role) {
        this._id = id;
        this._name = name;
        this._lastName = lastName;
        this._documentNumber = new UserDocumentNumber(documentNumber);
        this._cellphoneNumber = new UserCellphoneNumber(cellphoneNumber);
        this._birthDay = new UserBirthDay(birthDay);
        this._email = new UserEmail(email);
        this._password = password;
        this._role = role;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get documentNumber(): string {
        return this._documentNumber.value;
    }

    get cellphoneNumber(): string {
        return this._cellphoneNumber.value;
    }

    set cellphoneNumber(cellphoneNumber: string) {
        this._cellphoneNumber = new UserCellphoneNumber(cellphoneNumber);
    }

    get birthDay(): Date {
        return this._birthDay.value;
    }

    set birthDay(birthDay: Date) {
        this._birthDay = new UserBirthDay(birthDay);
    }

    get email(): string {
        return this._email.value;
    }

    set email(email: string) {
        this._email = new UserEmail(email);
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get role(): Role {
        return this._role;
    }

    set role(role: Role) {
        this._role = role;
    }

}