import { Module } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { GraphqlResolver } from './graphql.resolver';

@Module({
  providers: [GraphqlResolver, GraphqlService]
})
export class GraphqlModule {}
