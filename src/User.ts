interface _BaseUser {
    Id: string
    ShortName: string
    Name: string
    PolicyId: string
    Devices: string[]
    Email: string
    RegisteredDevices: string
    CurrentTel: string
    Photo: string
    Department: string
    State: string
    DirectionState: string
    UserState: string
    AgentState: string
    ContactState: string
    DndState: string
    ForwardState: string
    MessageState: string
    Location: string
    AbsenceText: string
    UsePBXName: string
    ClassType: string
    EquipmentId: string
    Changes: string
    DDI: string
    AvailabilityUntil: string
}

export interface UserObject extends _BaseUser {
    Type: "User"
}

export interface LoginObject extends _BaseUser {
    Type: "Login"
}
