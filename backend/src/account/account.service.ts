import { Injectable, Request } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthDto } from './dto/auth.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {

    constructor(@InjectRepository(Account) private readonly accountRepository: Repository<Account>) {
    }

    async createAccount(createAccountDto: CreateAccountDto) {
        return await this.accountRepository.create(createAccountDto);
    }

    auth(authDto: AuthDto) {
        return 'This action adds a new auth';
    }

    findOne(id: number) {
        return `This action returns a #${id} auth`;
    }

    update(id: number, updateAccountDto: UpdateAccountDto) {
        return `This action updates a #${id} auth`;
    }
}
