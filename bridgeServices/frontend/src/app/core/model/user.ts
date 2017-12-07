export class User {
  id: string;
  email: string;
  password: string;
  name: string;
  lastname: string;

  contructor() {
  }

  public  isNull(user: User): boolean {
        return user.email === null &&
            user.password === null &&
            user.name === null;
    }
}
