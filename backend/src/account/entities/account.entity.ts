import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import lodash from 'lodash';
import { ApiProperty } from '@nestjs/swagger';

@Entity('account')
export class Account {
    @ApiProperty({example:'1', description: 'id аккаунта'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example:'ivan', description: 'login аккаунта'})
    @Column()
    login: string;

    @ApiProperty({example:'123123123', description: 'password аккаунта'})
    @Column()
    password: string;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }
}
