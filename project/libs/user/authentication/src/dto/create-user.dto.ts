import { IsEmail, IsString } from 'class-validator';
import { AuthenticationValidateMessage } from '../authentication.constant';
export class CreateUserDto {
  @IsEmail({}, { message: AuthenticationValidateMessage.EmailNotValid })
  public email: string;

  @IsString()
  public name: string;

  @IsString()
  public password: string;
}
