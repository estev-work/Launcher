import { Body, Controller, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthDto } from './dto/auth.dto';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Account } from './entities/account.entity';

@Controller('account')
export class AccountController {

    constructor(
        private readonly accountService: AccountService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
    }

    @ApiOperation({summary:'Создание аккаунта'})
    @ApiResponse({status:200, type: Account})
    @Post()
    create(@Body() createAccountDto: CreateAccountDto) {
        this.logger.debug({message: createAccountDto.login, domain:`${process.env.DOMAIN}`});
        this.logger.debug({message: createAccountDto.password, domain:`${process.env.DOMAIN}`});
        return this.accountService.createAccount(createAccountDto);
    }

    @ApiOperation({summary:'Авторизация'})
    @ApiResponse({status:200, type: Account})
    @Get()
    auth(@Query() authDto: AuthDto) {
        this.logger.debug("Auth!!!!")
        return this.accountService.auth(authDto);
    }

    @Get(':id')
    getAccountData(@Param('id') id: string) {
        return this.accountService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
        return this.accountService.update(+id, updateAccountDto);
    }
}
