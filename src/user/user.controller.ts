import {Controller, Get} from "@nestjs/common"
import {UserService} from "./user.service"

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("admin/ambassador")
    async ambassador() {
        return this.userService.find({
            where: {
                is_ambassador: true,
            },
        })
    }
}
