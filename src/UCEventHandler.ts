import { CallObject } from "./Call"
import { UserObject, LoginObject } from "./User"

type UCEvent = "ucCall" | "ucUser" | "ucLogin"
type UCObject = CallObject | UserObject | LoginObject

export default class UCEventHandler {
    private _createEvent(type: UCEvent, ucObject: UCObject): CustomEvent {
        return new CustomEvent(type, { detail: ucObject, bubbles: true })
    }

    private _createCallEvent(call: CallObject): void {
        const callEvent = this._createEvent("ucCall", call)
        window.dispatchEvent(callEvent)
    }

    private _createLoginEvent(login: LoginObject): void {
        const callEvent = this._createEvent("ucLogin", login)
        window.dispatchEvent(callEvent)
    }

    private _createUserEvent(user: UserObject): void {
        const callEvent = this._createEvent("ucUser", user)
        window.dispatchEvent(callEvent)
    }

    processEvents(ucObject: UCObject): void {
        switch (ucObject.Type) {
            case "Call":
                this._createCallEvent(ucObject)
                break
            case "User":
                this._createUserEvent(ucObject)
                break
            case "Login":
                this._createLoginEvent(ucObject)
                break
        }
    }
}
