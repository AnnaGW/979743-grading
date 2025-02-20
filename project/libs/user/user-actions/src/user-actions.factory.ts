import { AuthUser, EntityFactory } from '@project/core';
import { UserActionsEntity } from './user-actions.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserActionsFactory implements EntityFactory<UserActionsEntity> {
  public create(entityPlainData: AuthUser): UserActionsEntity {
    return new UserActionsEntity(entityPlainData);
  }
}
