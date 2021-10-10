import {UserDto} from '../../data/dto/UserDto';

export interface UserService {
  loginUser(userDto: UserDto): void;
  signUpUser(userDto: UserDto): void;
  addUserDetails(userDto: UserDto): void;
  getUser(id: number): UserDto;
  getUserByEmail(email: string): Promise<UserDto>;
  updateUserDetails(userDto: UserDto): void;
}
