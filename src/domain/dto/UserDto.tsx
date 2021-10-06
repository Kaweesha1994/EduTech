export class UserDto {
  private id: number;
  private email: string;
  private fullname: string;
  private password: string;
  private address: string;

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getFullName() {
    this.fullname;
  }

  setFullName(fullName: string) {
    this.fullname = fullName;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address: string) {
    this.address = address;
  }
}
