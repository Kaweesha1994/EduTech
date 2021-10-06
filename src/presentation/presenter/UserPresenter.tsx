import {UserRepositoryImpl} from '../../data/repositoryImpl/UserRepositoryImpl';
import {UserServiceImpl} from '../../domain/service/impl/UserServiceImpl';
import UserComponent from '../component/UserComponent';

export default function getUser() {
  let userRepository = new UserRepositoryImpl();
  let userService = new UserServiceImpl(userRepository);

  return userService.getUser(1);
}
