import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';

import { UserActionsEntity } from './user-actions.entity';
import { UserActionsFactory } from './user-actions.factory';

@Injectable()
export class UserActionsRepository extends BaseMemoryRepository<UserActionsEntity> {
  constructor(entityFactory: UserActionsFactory) {
    super(entityFactory);
  }
}
