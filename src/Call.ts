export type RemotePartyFlag = "Called" | "Caller"
export type Direction = "O" | "I"
export type CallState = "DIALBACK" | "DIALING" | "RINGING" | "CONNECTED" | "ENDED" | "HELD" | "CONFERENCED" | "DISCONNECTED" | "UNKNOWN"

export interface CallerContact {
    Id: string
    Tel: string
    DisplayTel: string
    Name: string
    DisplayName: string
    ForeignIds?: string[]
    DirectoryId?: string
    Department?: string
}

export interface CallObject {
    Type: "Call"
    Id: string
    Event: string
    State: CallState
    Start: string
    DurationTotal: number
    Caller: CallerContact
    Called: CallerContact
    Contact: CallerContact
    Direction: Direction
    External: string
    Missed: string
}