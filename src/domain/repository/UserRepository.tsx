import {UserDto} from '../../data/dto/UserDto';

export interface UserRepository {
  getUser(id: number): UserDto;
}
