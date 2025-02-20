import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';

import { UserActionsEntity } from './user-actions.entity';
import { UserActionsFactory } from './user-actions.factory';

@Injectable()
export class UserActionsRepository extends BaseMemoryRepository<UserActionsEntity> {
  constructor(entityFactory: UserActionsFactory) {
    super(entityFactory);
  }

  public async findByEmail(email: string): Promise<UserActionsEntity | null> {
    const entities = Array.from(this.entities.values()); // получаем массив ВСЕХ пользователей?? TODO
    const user = entities.find((entity) => entity.email === email);

    if (!user) {
      return null;
    }

    return this.entityFactory.create(user);
  }
}
