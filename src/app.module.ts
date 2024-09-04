import { Module } from '@nestjs/common';
//import { MasterModule } from './master/master.module';
import { MasterModule } from './master/master.module';

@Module({
  imports: [MasterModule],
})
export class AppModule {}
