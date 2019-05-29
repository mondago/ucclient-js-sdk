import { expect } from "chai"
import "mocha"
import { LoginObject, UserObject, CallObject } from "../src"
import UCEventHandler from "../src/UCEventHandler"

const login: LoginObject = {
    Type: "Login",
    Id: "123456789",
    ShortName: "",
    Name: "test name",
    PolicyId: "",
    Devices: [],
    Email: "",
    RegisteredDevices: "",
    CurrentTel: "",
    Photo: "",
    Department: "",
    State: "",
    DirectionState: "",
    UserState: "",
    AgentState: "",
    ContactState: "",
    DndState: "",
    ForwardState: "",
    MessageState: "",
    Location: "",
    AbsenceText: "",
    UsePBXName: "",
    ClassType: "",
    EquipmentId: "",
    Changes: "",
    DDI: "",
    AvailabilityUntil: ""
}

const user: UserObject = {
    Type: "User",
    Id: "123456789",
    ShortName: "",
    Name: "test name",
    PolicyId: "",
    Devices: [],
    Email: "",
    RegisteredDevices: "",
    CurrentTel: "",
    Photo: "",
    Department: "",
    State: "",
    DirectionState: "",
    UserState: "",
    AgentState: "",
    ContactState: "",
    DndState: "",
    ForwardState: "",
    MessageState: "",
    Location: "",
    AbsenceText: "",
    UsePBXName: "",
    ClassType: "",
    EquipmentId: "",
    Changes: "",
    DDI: "",
    AvailabilityUntil: ""
}

const call: CallObject = {
    Type: "Call",
    Id: "123456",
    Event: "",
    State: "DIALBACK",
    Start: "",
    DurationTotal: 0,
    Caller: { Id: "", Tel: "", DisplayTel: "", Name: "", DisplayName: "" },
    Called: { Id: "", Tel: "", DisplayTel: "", Name: "", DisplayName: "" },
    Contact: { Id: "", Tel: "", DisplayTel: "", Name: "", DisplayName: "" },
    Direction: "I",
    External: "",
    Missed: ""
}

describe("handle events", () => {
    const eventHandler = new UCEventHandler()
    
    it("should create a custom login event", () => {
        window.addEventListener("ucLogin", (event: CustomEvent) => expect(event.detail).to.deep.equal(login))
        eventHandler.processEvents(login)
    })

    it("should create a custom user updated event", () => {
        window.addEventListener("ucUser", (event: CustomEvent) => expect(event.detail).to.deep.equal(user))
        eventHandler.processEvents(user)
    })

    it("should create a custom call event", () => {
        window.addEventListener("ucCall", (event: CustomEvent) => expect(event.detail).to.deep.equal(call))
        eventHandler.processEvents(call)
    })
})
