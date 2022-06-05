import { Account } from '../entities/account.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
    @ApiProperty({example:'ivan', description: 'login аккаунта'})
    login:string;
    @ApiProperty({example:'123123', description: 'password аккаунта'})
    password:string;

    constructor(account: Account) {
        this.login = account.login;
        this.password = account.password;
    }
}
