import { Module } from '@nestjs/common';
import { UserActionsRepository } from './user-actions.repository';
import { UserActionsFactory } from './user-actions.factory';
import { MongooseModule } from '@nestjs/mongoose';
import { UserActionsModel, UserActionsSchema } from './user-actions.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserActionsModel.name, schema: UserActionsSchema },
    ]),
  ],
  providers: [UserActionsRepository, UserActionsFactory],
  exports: [UserActionsRepository],
})
export class UserActionsModule {}
