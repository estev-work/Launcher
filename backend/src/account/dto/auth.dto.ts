import { Account } from '../entities/account.entity';

export class AuthDto {
    login:string;
    password:string;

    constructor(account: Account) {
        this.login = account.login;
        this.password = account.password;
    }
}
