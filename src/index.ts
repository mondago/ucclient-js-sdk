import * as UCAPI from "./UCAPI"
import UCEventHandler from "./UCEventHandler"
import Calls from "./Calls"
import { LoginObject } from "./User"

declare global {
    interface Window {
        onOpen: () => void
        onClose: () => void
        onError: (error: string) => void
        onReceive: (ucObj: any) => void
    }
}

export default class UCSession {
    private _mySession: UCAPI.Session
    private _userId: string
    private readonly _ucEventHandler: UCEventHandler

    /**
     * Use this class instance to control your calls
     */
    callController: Calls

    constructor() {
        this._addEventListeners()
        this._ucEventHandler = new UCEventHandler()
    }

    private _createNewSession(): void {
        this._mySession = new UCAPI.ucClient().Session
    }

    private _onOpen = (): void => {
        console.log("opened")
        this._mySession.Login("", "", "")
    }

    private _onClose = (): void => {
        console.log("closed")
    }

    private _onError = (error: string): void => {
        console.log(error)
    }

    private _onReceive = (ucObj: any): void => {
        this._ucEventHandler.processEvents(ucObj)
    }

    private _onLogin = (login: LoginObject): void => {
        this._userId = login.Id
        this.callController = new Calls(this._mySession, this._userId)
    }

    private _addEventListeners(): void {
        window.onOpen = this._onOpen
        window.onClose = this._onClose
        window.onError = this._onError
        window.onReceive = this._onReceive
        window.addEventListener("ucLogin", (e: CustomEvent) => this._onLogin(e.detail))
    }

    /**
     * Connect function, starts websocket client and logs user in
     * 
     * @returns { void }
     */
    connect(): void {
        this._createNewSession()
        this._mySession.Connect("127.0.0.1:21046")
    }
}
