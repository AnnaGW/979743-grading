import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseMongoRepository } from '@project/data-access';
import { UserActionsEntity } from './user-actions.entity';
import { UserActionsFactory } from './user-actions.factory';
import { UserActionsModel } from './user-actions.model';

@Injectable()
export class UserActionsRepository extends BaseMongoRepository<
  UserActionsEntity,
  UserActionsModel
> {
  constructor(
    entityFactory: UserActionsFactory,
    @InjectModel(UserActionsModel.name)
    userActionsModel: Model<UserActionsModel>
  ) {
    super(entityFactory, userActionsModel);
  }

  public async findByEmail(email: string): Promise<UserActionsEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
