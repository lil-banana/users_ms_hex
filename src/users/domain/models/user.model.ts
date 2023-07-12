export class User {

    private id: string;
    private name: string;
    private lastName: string;
    private documentNumber: string;
    private cellphoneNumber: string;
    private birthDay: Date;
    private email: string;
    private password: string;
    private roleId: string;

    constructor(id: string, name: string, lastName: string, documentNumber: string, cellphoneNumber: string, birthDay: Date, email: string, password: string, roleId: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.documentNumber = documentNumber;
        this.cellphoneNumber = cellphoneNumber;
        this.birthDay = birthDay;
        this.email = email;
        this.password = password;
        this.roleId = roleId;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getDocumentNumber(): string {
        return this.documentNumber;
    }

    setDocumentNumber(documentNumber: string): void {
        this.documentNumber = documentNumber;
    }

    getBirthDay(): Date {
        return this.birthDay;
    }

    setBirthDay(birthDay: Date): void {
        this.birthDay = birthDay;
    }

    getCellphoneNumber(): string {
        return this.cellphoneNumber;
    }

    setCellphoneNumber(cellphoneNumber: string): void {
        this.cellphoneNumber = cellphoneNumber;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getRoleId(): string {
        return this.roleId;
    }

    setRoleId(roleId: string): void {
        this.roleId = roleId;
    }
}