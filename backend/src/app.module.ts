import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import LoggerModule from './logger/logger.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        AccountModule,
        LoggerModule,
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                synchronize: true,
                autoLoadEntities: true,
                logging: ['query', 'error'],
            }),
            inject: [ConfigService],
        })
    ],
})
export class AppModule {
}
