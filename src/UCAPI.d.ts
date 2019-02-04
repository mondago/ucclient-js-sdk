interface Session {
    Connect(sServer: string, sComputerId?: string, bSecure?: boolean): void
    ConnectSecure(sServer: string, sComputerId: string): void
    Disconnect(): void
    dbGet(sEntity, _Filter: string, _Fields, _Sort, _Options): void
    dbMonitor(sEntity, sMonitorId, _Filter: string, _Sort, _Events, _Fields, _Options, _InitVals): void
    dbSet(sEntity, _Filter: string, _Values, _Options): void
    dbCreate(sEntity, _Filter: string, _Values, _Options): void
    dbDelete(sEntity, _Filter: string, _Options): void
    GetCallData(sCallId: string): void
    Login(sApplication?: string, sUser?: string, sPassword?: string): void
    MonitorPolicy(policyId: string): void
    loopKeys(obj): void
    UpdateContact(cObject, sContactId, sCommand?: string): void
    AddContact(cObject): void
    DeleteContact(sContactId): void
    SearchAddressBook(sObject, searchId): void
    GetContact(cId, entity): void
    SetAvailability(uId, availability, absenceText, availabilityUntil): void
    EncodeHash(sText): void
    Ping(): void
    BlindTransfer(sCallId: string, destination: string): void
    ConsultTransfer(sCallId: string, destination: string): void
    CompleteTransfer(sCallId: string, sConsultId): void
    CancelTransfer(sCallId: string, sConsultId): void
    DeflectCall(sCallId: string, destination: string): void
    Hold(sCallId: string): void
    Unhold(sCallId: string): void
    Feature(sUserId: string, sFeature, sState): void
    Forward(sUserId: string, sForwardNumber): void
    DND(sUserId: string, bDND): void
    Send(packet): void
    ConnectionHistory(Filter: string, Page, UserFilters): void
    SingleUserReq(Filter: string, RequestId): void
    monitorCalls(Filter: string): void
    monitorUserCalls(userShortname): void
    monitorDeviceCalls(deviceExt): void
    monitorAllCalls(): void
    monitorHistory(Filter: string): void
    monitorUserHistory(userId: string): void
    monitorDeviceHistory(deviceId): void
    getUserHistory(userId: string): void
    getDeviceHistory(deviceId, pageNum, userFilters): void
    getSingleUser(userId: string, reqId): void
    monitorDevices(Filter: string): void
    monitorAllDevices(): void
    monitorUsers(Filter: string): void
    monitorAllUsers(): void
    serverMinimum(desiredServerVersion): void
    CurCallId: string
    makeCall(sCallNumber, sUserId: string, sRequestId): void
    pickUp(callId: string): void
    hangUp(callId: string): void
    setMeeting(meetingId): void
    getLocation(): void
    monitorMeeting(meetingId): void
    requestResource(sResource): void
    monitorThreads(userId: string): void
    monitorChat(threadIds): void
    getChatHistory(userId: string, page, threadId: string, reqId): void
    getThread(threadId: string): void
    getThreadMessages(threadId: string): void
    removeChatUser(threadId: string, userId: string): void
    sendChatMessage(threadId: string, userId: string, body): void
    saveConfig(userId: string, name, settings): void
}

export function ucClient(): void
