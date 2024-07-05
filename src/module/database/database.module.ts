import { Module } from '@nestjs/common';
import { Database } from './database';

@Module({
  imports: [Database],
  exports: [Database],
})
export class DatabaseModule {}
