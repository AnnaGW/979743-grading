import { Injectable } from '@nestjs/common';
import { UserActionsRepository } from '@project/user-actions';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userActionsRepository: UserActionsRepository) {}
}
