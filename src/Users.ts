import * as UCAPI from "./UCAPI"

export default class Users {
    private readonly _mySession: UCAPI.Session

    constructor(ucSession: UCAPI.Session) {
        this._mySession = ucSession
    }

    public getUser(id: string): void {
        this._mySession.getSingleUser(id, "GET_SINGLE_USER")
    }

    public monitor(): void {
        this._mySession.monitorAllUsers()
    }
}