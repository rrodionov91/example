import {mocks} from "./mocks";

export class Api {
    static async fetch (url, options) {
        if (this.hasMock(url)) return this.getMock(url)
        return fetch(url, options)
    }
    static hasMock (url) {
        return this.getMock(url) !== undefined
    }
    static getMock (url) {
        const mock = mocks[url]
        return mock ? this.wrapToResp(mock) : mock
    }
    static wrapToResp (data) {
        return {
            async json () {
                return data
            }
        }
    }
}

