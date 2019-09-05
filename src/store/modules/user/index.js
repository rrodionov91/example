import {userService} from "../../../services/user/service";

export const SET_USERS = 'setUsers'
export const UPDATE_USERS = 'updateUsers'
export const SAFETY_UPDATE_USERS = 'safetyUpdateUsers'

export const userStoreModule = {
    state: {
        users: null
    },
    mutations: {
        [SET_USERS] (state, users) {
            state.users = users
        }
    },
    actions: {
        async [UPDATE_USERS] ({ commit }) {
            const resp = await userService.getUsers()
            commit(SET_USERS, await resp.json())
        },
        async safetyUpdateUsers ({ state, commit }) {
            if (this.getters.areUsersGot) return state.users
            return await this.dispatch(UPDATE_USERS)
        }
    },
    getters: {
        areUsersGot (state) {
            return state.users !== null
        },
        hasUsers (state) {
            return this.areUsersGot() && state.users.length !== 0
        }
    }
}