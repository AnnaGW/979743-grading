import { Entity } from '@project/core';
import { StorableEntity, AuthUser } from '@project/core';

export class UserActionsEntity
  extends Entity
  implements StorableEntity<AuthUser>
{
  public email: string;
  public name: string;
  public passwordHash: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if (!user) {
      return;
    }
    this.id = user.id ?? ''; // возм this.id = user.id; TODO
    this.email = user.email;
    this.name = user.name;
    this.passwordHash = user.passwordHash;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    };
  }
}
