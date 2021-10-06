import {User} from '../../data/entity/User';

export interface UserRepository {
    getUser() : User;
}