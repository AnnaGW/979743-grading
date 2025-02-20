import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@project/authentication';
import { UserActionsModule } from '@project/user-actions';

@Module({
  imports: [AuthenticationModule, UserActionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
