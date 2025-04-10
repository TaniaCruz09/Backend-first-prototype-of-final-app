"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
exports.Database = typeorm_1.TypeOrmModule.forRootAsync({
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: +configService.get('DATA_BASE_PORT'),
        username: configService.get('DATA_BASE_USER'),
        password: configService.get('DATA_BASE_PASSWORD'),
        database: configService.get('DATA_BASE_NAME'),
        migrationsTableName: configService.get('MIGRATIONS_TABLE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
    }),
    dataSourceFactory: async (options) => {
        const dataSource = await new typeorm_2.DataSource(options).initialize();
        return dataSource;
    },
});
//# sourceMappingURL=database.js.map