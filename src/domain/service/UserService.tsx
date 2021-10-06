import {UserDto} from '../../data/dto/UserDto';

export interface UserService {
  getUser(id: number): UserDto;
}
