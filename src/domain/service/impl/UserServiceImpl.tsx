import {User} from '../../../data/entity/User';
import {UserDto} from '../../dto/UserDto';
import {UserRepository} from '../../repository/UserRepository';
import {UserService} from '../UserService';

export class UserServiceImpl implements UserService {
  userRepository: UserRepository;

  a: User = '';

  constructor(userRepo: UserRepository) {
    this.userRepository = userRepo;
  }

  getUser(): UserDto {
    const user: User = this.userRepository.getUser();
    return new UserDto();
  }
}
