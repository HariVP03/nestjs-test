import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [RestModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
