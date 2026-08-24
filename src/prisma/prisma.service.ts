import 'dotenv/config';
import { Injectable } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaMariaDb({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: process.env.DB_PASSWORD!,
            database: 'adelcio_db',
            connectionLimit: 5,
        });
        super({ adapter });
    }
}