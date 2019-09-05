import {GET_USERS} from "./pathes";
import {Api} from "@utils/api/Api";

class UserService {
    constructor () {
        this.users = null
    }
    async getUsers () {
        const resp = await Api.fetch(GET_USERS)
        return resp
    }
}

export const userService = new UserService()