import { Module } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configServceInstance: ConfigService) => ({
                type: 'postgres',
                host: configServceInstance.getOrThrow('POSTGRES_HOST'),
                port: configServceInstance.getOrThrow('POSTGRES_PORT'),
                database: configServceInstance.getOrThrow('POSTGRES_DB'),
                password: configServceInstance.getOrThrow('POSTGRES_PASSWORD'),
                username: configServceInstance.getOrThrow('POSTGRES_USER'),
                autoLoadEntities: true,
                synchronize: true,
                logging: true,
            }),
            inject: [ConfigService]
        }),

    ]
})

export class DatabaseModule { }