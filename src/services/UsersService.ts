import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UserRepository);
    }

    async create(email: string) {

        const userExists = await this.usersRepository.findOne({
            email,
        });

        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        });

        this.usersRepository.save(user);

        return user;
    }
}

export { UsersService };
