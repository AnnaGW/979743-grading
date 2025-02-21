import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from '@project/authentication';
import { UserActionsModule } from '@project/user-actions';
import { UserConfigModule, getMongooseOptions } from '@project/config';

@Module({
  imports: [
    AuthenticationModule,
    UserActionsModule,
    UserConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
