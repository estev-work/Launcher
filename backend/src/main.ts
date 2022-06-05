import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { FastifyAdapter, NestFastifyApplication, } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule,
        new FastifyAdapter({ logger: true }),
    );
    const config = new DocumentBuilder()
        .setTitle('Launcher Server Api')
        .setDescription('The launcher Server Api')
        .setVersion('1.0')
        .addTag('launcher')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
    const configService = app.get(ConfigService);
    await app.listen(configService.get('APP_PORT'));
}

bootstrap();
