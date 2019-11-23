import { User } from './user';

export class Metadata {
  private readonly data: User | User[];
  private readonly status: string = '';

  constructor(data: any) {
    if (data.data instanceof Array) {
      this.data = [];
      data.data.forEach((userData: User) => {
        if (this.data instanceof Array) {
          this.data.push(new User(userData));
        }
      });
    } else {
      this.data = new User(data.data);
    }
    if (data.status) {
      this.status = data.status;
    }
  }

  public getDataOne(): User {
    if (this.data instanceof Array) {
      return this.data[0];
    } else {
      return this.data;
    }
  }

  public getDataArray(): User[] {
    if (this.data instanceof Array) {
      return this.data;
    } else {
      return [this.data];
    }
  }

  public getStatus(): string {
    return this.status;
  }
}
