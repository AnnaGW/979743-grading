import { Module } from '@nestjs/common';
import { UserActionsRepository } from './user-actions.repository';
import { UserActionsFactory } from './user-actions.factory';

@Module({
  providers: [UserActionsRepository, UserActionsFactory],
  exports: [UserActionsRepository],
})
export class UserActionsModule {}
