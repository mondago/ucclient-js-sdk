import * as UCAPI from "./UCAPI"

export default class CallController {
    private readonly _mySession: UCAPI.Session
    private readonly _userId: string

    /**
     * Make call using logged in session
     * @param { UCAPI.Session } ucSession - your active session, needs to be instantiated
     * @param { string } username - user id, received on login
     * @returns { void }
     */
    constructor(ucSession: UCAPI.Session, username: string) {
        this._mySession = ucSession
        this._userId = username
    }

    /**
     * Make call using logged in session
     * @param { string } number - Number that you want to call
     * @returns { void }
     */
    makeCall(destination: string): void {
        this._mySession.makeCall(destination, this._userId, "MakeCall")
    }

    /**
     * End call based on it's id
     * @param { string } id - ID of call you want to end
     * @returns { void }
     */
    hangupCall(id: string): void {
        this._mySession.hangUp(id)
    }

    /**
     * Hold call based on it's id
     * @param { string } id - ID of call you want to hold
     * @returns { void }
     */
    holdCall(id: string): void {
        this._mySession.Hold(id)
    }

    /**
     * Resume call based on it's id
     * @param { string } id - ID of call you want to resume
     * @returns { void }
     */
    unHoldCall(id: string): void {
        this._mySession.Unhold(id)
    }

    /**
     * Answer call based on it's id
     * @param { string } id - ID of call you want to answer
     * @returns { void }
     */
    answerCall(id: string): void {
        this._mySession.pickUp(id)
    }
}
