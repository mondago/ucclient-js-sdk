var require = void 0 === typeof window ? require : function(e) {
    return "ws" == e ? window.WebSocket || window.MozWebSocket : "azure" == e ? null : "xmldom" == e ? {
        DOMParser: DOMParser
    } : void 0
}
;
function GetGuid() {
    return guidGenerator(!1)
}
function guidGenerator(e) {
    e = 0 != e ? "-" : "";
    var t = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    };
    return t() + t() + e + t() + e + "4" + t().substr(0, 3) + e + t() + e + t() + t() + t()
}
trimString = function(e) {
    return e.replace(/^\s+|\s+$/gm, "")
}
;
var MD5 = function(e) {
    function t(e, t) {
        return e << t | e >>> 32 - t
    }
    function l(e, t) {
        var l, n, a, i, o;
        return a = 2147483648 & e,
        i = 2147483648 & t,
        o = (1073741823 & e) + (1073741823 & t),
        (l = 1073741824 & e) & (n = 1073741824 & t) ? 2147483648 ^ o ^ a ^ i : l | n ? 1073741824 & o ? 3221225472 ^ o ^ a ^ i : 1073741824 ^ o ^ a ^ i : o ^ a ^ i
    }
    function n(e, n, a, i, o, s, r) {
        return l(t(e = l(e, l(l(function(e, t, l) {
            return e & t | ~e & l
        }(n, a, i), o), r)), s), n)
    }
    function a(e, n, a, i, o, s, r) {
        return l(t(e = l(e, l(l(function(e, t, l) {
            return e & l | t & ~l
        }(n, a, i), o), r)), s), n)
    }
    function i(e, n, a, i, o, s, r) {
        return l(t(e = l(e, l(l(function(e, t, l) {
            return e ^ t ^ l
        }(n, a, i), o), r)), s), n)
    }
    function o(e, n, a, i, o, s, r) {
        return l(t(e = l(e, l(l(function(e, t, l) {
            return t ^ (e | ~l)
        }(n, a, i), o), r)), s), n)
    }
    function s(e) {
        var t, l = "", n = "";
        for (t = 0; t <= 3; t++)
            l += (n = "0" + (e >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
        return l
    }
    var r, d, u, c, m, T, h, C, E, g = Array();
    for (g = function(e) {
        for (var t, l = e.length, n = l + 8, a = 16 * ((n - n % 64) / 64 + 1), i = Array(a - 1), o = 0, s = 0; s < l; )
            o = s % 4 * 8,
            i[t = (s - s % 4) / 4] = i[t] | e[s] << o,
            s++;
        return o = s % 4 * 8,
        i[t = (s - s % 4) / 4] = i[t] | 128 << o,
        i[a - 2] = l << 3,
        i[a - 1] = l >>> 29,
        i
    }(function(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = Array(), l = 0; l < e.length; l++) {
            var n = e.charCodeAt(l);
            n < 128 ? (t.push(n),
            t.push(0)) : n > 127 && n < 2048 ? (t.push(n >> 6 | 192),
            t.push(63 & n | 128)) : (t.push(n >> 12 | 224),
            t.push(n >> 6 & 63 | 128),
            t.push(63 & n | 128))
        }
        return t.push(0),
        t
    }(e)),
    T = 1732584193,
    h = 4023233417,
    C = 2562383102,
    E = 271733878,
    r = 0; r < g.length; r += 16)
        d = T,
        u = h,
        c = C,
        m = E,
        h = o(h = o(h = o(h = o(h = i(h = i(h = i(h = i(h = a(h = a(h = a(h = a(h = n(h = n(h = n(h = n(h, C = n(C, E = n(E, T = n(T, h, C, E, g[r + 0], 7, 3614090360), h, C, g[r + 1], 12, 3905402710), T, h, g[r + 2], 17, 606105819), E, T, g[r + 3], 22, 3250441966), C = n(C, E = n(E, T = n(T, h, C, E, g[r + 4], 7, 4118548399), h, C, g[r + 5], 12, 1200080426), T, h, g[r + 6], 17, 2821735955), E, T, g[r + 7], 22, 4249261313), C = n(C, E = n(E, T = n(T, h, C, E, g[r + 8], 7, 1770035416), h, C, g[r + 9], 12, 2336552879), T, h, g[r + 10], 17, 4294925233), E, T, g[r + 11], 22, 2304563134), C = n(C, E = n(E, T = n(T, h, C, E, g[r + 12], 7, 1804603682), h, C, g[r + 13], 12, 4254626195), T, h, g[r + 14], 17, 2792965006), E, T, g[r + 15], 22, 1236535329), C = a(C, E = a(E, T = a(T, h, C, E, g[r + 1], 5, 4129170786), h, C, g[r + 6], 9, 3225465664), T, h, g[r + 11], 14, 643717713), E, T, g[r + 0], 20, 3921069994), C = a(C, E = a(E, T = a(T, h, C, E, g[r + 5], 5, 3593408605), h, C, g[r + 10], 9, 38016083), T, h, g[r + 15], 14, 3634488961), E, T, g[r + 4], 20, 3889429448), C = a(C, E = a(E, T = a(T, h, C, E, g[r + 9], 5, 568446438), h, C, g[r + 14], 9, 3275163606), T, h, g[r + 3], 14, 4107603335), E, T, g[r + 8], 20, 1163531501), C = a(C, E = a(E, T = a(T, h, C, E, g[r + 13], 5, 2850285829), h, C, g[r + 2], 9, 4243563512), T, h, g[r + 7], 14, 1735328473), E, T, g[r + 12], 20, 2368359562), C = i(C, E = i(E, T = i(T, h, C, E, g[r + 5], 4, 4294588738), h, C, g[r + 8], 11, 2272392833), T, h, g[r + 11], 16, 1839030562), E, T, g[r + 14], 23, 4259657740), C = i(C, E = i(E, T = i(T, h, C, E, g[r + 1], 4, 2763975236), h, C, g[r + 4], 11, 1272893353), T, h, g[r + 7], 16, 4139469664), E, T, g[r + 10], 23, 3200236656), C = i(C, E = i(E, T = i(T, h, C, E, g[r + 13], 4, 681279174), h, C, g[r + 0], 11, 3936430074), T, h, g[r + 3], 16, 3572445317), E, T, g[r + 6], 23, 76029189), C = i(C, E = i(E, T = i(T, h, C, E, g[r + 9], 4, 3654602809), h, C, g[r + 12], 11, 3873151461), T, h, g[r + 15], 16, 530742520), E, T, g[r + 2], 23, 3299628645), C = o(C, E = o(E, T = o(T, h, C, E, g[r + 0], 6, 4096336452), h, C, g[r + 7], 10, 1126891415), T, h, g[r + 14], 15, 2878612391), E, T, g[r + 5], 21, 4237533241), C = o(C, E = o(E, T = o(T, h, C, E, g[r + 12], 6, 1700485571), h, C, g[r + 3], 10, 2399980690), T, h, g[r + 10], 15, 4293915773), E, T, g[r + 1], 21, 2240044497), C = o(C, E = o(E, T = o(T, h, C, E, g[r + 8], 6, 1873313359), h, C, g[r + 15], 10, 4264355552), T, h, g[r + 6], 15, 2734768916), E, T, g[r + 13], 21, 1309151649), C = o(C, E = o(E, T = o(T, h, C, E, g[r + 4], 6, 4149444226), h, C, g[r + 11], 10, 3174756917), T, h, g[r + 2], 15, 718787259), E, T, g[r + 9], 21, 3951481745),
        T = l(T, d),
        h = l(h, u),
        C = l(C, c),
        E = l(E, m);
    return (s(T) + s(h) + s(C) + s(E)).toUpperCase()
};
const SysType = "ws";
function XMLElementBuilder(e, t, l, n, a) {
    return elementBuild = "",
    elementFlags = "",
    t && (elementFlags = " " + t + "='" + l + "'"),
    elementBuild = null == n ? "<" + e + elementFlags + "/>" : "<" + e + elementFlags + ">" + a + "</" + e + ">",
    elementBuild
}
SocketFactory = function(e, t) {
    var l, n, a, i = require("ws");
    return SktHandler = new function() {
        this.onmessage = function(e) {
            console.log("OM - Unhandled!")
        }
        ,
        this.onopen = function(e) {
            console.log("OO - Unhandled!")
        }
        ,
        this.onclose = function(e) {
            console.log("OC - Unhandled!")
        }
        ,
        this.onerror = function(e) {
            console.log("OE - Unhandled!")
        }
        ,
        this.send = function(e) {
            console.log("SE - Unhandled!")
        }
        ,
        this.close = function() {
            console.log("CL - Unhandled!")
        }
    }
    ,
    n = t ? "wss://" : "ws://",
    a = t ? "21057" : "21056",
    e.indexOf(":") > 0 && (a = e.substr(e.indexOf(":") + 1),
    e = e.substr(0, e.indexOf(":"))),
    (l = new i(n + e + ":" + a + "/UCClient")).onmessage = function(e) {
        SktHandler.onmessage(e.data)
    }
    ,
    l.onopen = function(e) {
        SktHandler.onopen(e.data)
    }
    ,
    l.onclose = function(e) {
        SktHandler.onclose(e.data)
    }
    ,
    l.onerror = function(e) {
        SktHandler.onerror(e.data)
    }
    ,
    SktHandler.send = function(e) {
        l.send(e)
    }
    ,
    SktHandler.close = function() {
        l.close()
    }
    ,
    SktHandler
}
,
ucObjectType = {
    Connected: "Connected",
    Resources: "Resources",
    Config: "Config",
    UserConfig: "UserConfig",
    Device: "Device",
    History: "History",
    Call: "Call",
    Login: "Login",
    User: "User",
    PhotoUser: "PhotoUser",
    Meeting: "Meeting",
    Location: "Location",
    Error: "Error",
    CallData: "CallData",
    Contact: "Contact",
    Chat: "Chat"
},
connectedObj = function() {
    this.Type = ucObjectType.Connected
}
,
resourcesObj = function() {
    this.Type = ucObjectType.Resources,
    this.Version = "",
    this.Count = ""
}
,
configObj = function() {
    this.Type = ucObjectType.Config
}
,
userConfigObj = function() {
    this.Type = ucObjectType.UserConfig
}
,
locationObj = function() {
    this.Type = ucObjectType.Location,
    this.LocalArea = "",
    this.Area = new locationArea,
    this.Country = new locationCountry,
    this.TimeZone = new locationTimeZone
}
,
locationArea = function() {
    this.ID = "",
    this.CountryId = "",
    this.Code = "",
    this.Name = "",
    this.LocalName = "",
    this.TimeZoneId = "",
    this.Mobile = !1,
    this.NonGeographic = !1,
    this.RemainderMin = "",
    this.RemainderMax = "",
    this.Latitude = "",
    this.Longitude = ""
}
,
locationCountry = function() {
    this.ID = "",
    this.Code = "",
    this.Name = "",
    this.Duplicate = !1,
    this.LocalName = "",
    this.TimeZoneId = "",
    this.InternationalAccess = "",
    this.StdAccess = "",
    this.RemainderMin = "",
    this.RemainderMax = "",
    this.CountryCode = "",
    this.LanguageCode = ""
}
,
locationTimeZone = function() {
    this.ID = "",
    this.Code = "",
    this.Name = "",
    this.GmtOffset = ""
}
,
device = function() {
    this.Type = ucObjectType.Device,
    this.Id = "",
    this.ShortName = "",
    this.Name = "",
    this.Department = "",
    this.State = "",
    this.DirectionState = "",
    this.UserState = "",
    this.AgentState = "",
    this.ContactState = "",
    this.DndState = "",
    this.ForwardState = "",
    this.MessageState = "",
    this.Location = "",
    this.AbsenceText = "",
    this.UsePBXName = "",
    this.ClassType = "",
    this.EquipmentId = "",
    this.Changes = "",
    this.DDI = "",
    this.Photo = ""
}
,
addressContact = function() {
    this.Type = ucObjectType.Contact,
    this.RequestId = "",
    this.Values = {
        Telephone: {
            Phone1: "",
            Phone2: "",
            Phone3: ""
        },
        Address: {
            Main: {
                Town: "",
                PostalCode: "",
                Street: ""
            }
        },
        Notes: "",
        Type: "",
        Contact: "",
        Company: "",
        Web: "",
        Email: ""
    }
}
,
threadMonitor = function() {
    this.Type = ucObjectType.Chat,
    this.ThreadId = "",
    this.SyncTime = ""
}
,
chatMonitor = function() {
    this.Type = ucObjectType.Chat,
    this.Event = "",
    this.Id = "",
    this.Body = "",
    this.ClassType = "",
    this.UserId = "",
    this.ThreadChatId = "",
    this.SyncTime = "",
    this.User = new user,
    this.State = ""
}
,
chat = function() {
    this.Type = ucObjectType.Chat,
    this.SyncTime = "",
    this.Id = "",
    this.ThreadChat = new threadChat,
    this.ThreadPhoto = "",
    this.LastMessage = ""
}
,
threadChat = function() {
    this.Body = "",
    this.BodyRTF = "",
    this.SyncTime = "",
    this.UserId = "",
    this.OtherUserId = ""
}
,
chatData = function() {
    this.Type = ucObjectType.Chat,
    this.Id = "",
    this.Body = "",
    this.BodyRTF = "",
    this.ClassType = "",
    this.UserId = "",
    this.OtherUserId = "",
    this.ThreadChatId = "",
    this.SyncTime = "",
    this.User = new chatUser,
    this.OtherUser = new chatUser
}
,
chatUser = function() {
    this.Id = "",
    this.ShortName = "",
    this.Name = "",
    this.CurrentTel = "",
    this.Photo = ""
}
,
chatDataMessages = function() {
    this.Type = ucObjectType.Chat,
    this.Id = "",
    this.Body = "",
    this.BodyRTF = "",
    this.ClassType = "",
    this.UserId = "",
    this.OtherUserId = "",
    this.ThreadChatId = "",
    this.SyncTime = "",
    this.User = new chatUser
}
,
connHistory = function() {
    this.Type = ucObjectType.History,
    this.Start = "",
    this.DurationTotal = "",
    this.CallHistoryId = "",
    this.ContactTel = "",
    this.DeviceId = "",
    this.ClassType = "",
    this.Direction = "",
    this.Caller = new callerContact,
    this.Called = new callerContact,
    this.History = new historyContact,
    this.Reason = "",
    this.ReasonDevice = "",
    this.State = ""
}
,
call = function() {
    this.Type = ucObjectType.Call,
    this.Id = "",
    this.Event = "",
    this.CallId = "",
    this.State = "",
    this.HostId = "",
    this.Start = "",
    this.DurationTotal = "",
    this.DurationRing = "",
    this.DurationHeld = "",
    this.DurationConnected = "",
    this.DurationOther = "",
    this.Caller = new callerContact,
    this.Called = new callerContact,
    this.Contact = new callerContact,
    this.Connections = "",
    this.Trunk = "",
    this.Direction = "",
    this.External = "",
    this.Missed = "",
    this.Category = "",
    this.Custom1 = "",
    this.Custom2 = ""
}
,
callerContact = function() {
    this.Id = "",
    this.Tel = "",
    this.DisplayTel = "",
    this.Name = "",
    this.DisplayName = "",
    this.ClassType = "",
    this.ForeignId = "",
    this.DirectoryId = "",
    this.Department = ""
}
,
connection = function() {
    this.Id = "",
    this.Start = "",
    this.DurationTotal = "",
    this.CallHistoryId = "",
    this.Direction = "",
    this.Missed = "",
    this.Contact = new callerContact
}
,
historyContact = function() {
    this.CallerTel = "",
    this.CalledTel = "",
    this.Missed = "",
    this.Recorded = ""
}
,
locationData = function() {
    this.Longitude = "",
    this.Latitude = "",
    this.Road = "",
    this.Town = "",
    this.Country = "",
    this.DisplayName = "",
    this.LastUpdate = ""
}
,
user = function() {
    this.Type = ucObjectType.User,
    this.Id = "",
    this.ShortName = "",
    this.Name = "",
    this.PolicyId = "",
    this.Devices = [],
    this.Email = "",
    this.RegisteredDevices = "",
    this.CurrentTel = "",
    this.Photo = "",
    this.Department = "",
    this.State = "",
    this.DirectionState = "",
    this.UserState = "",
    this.AgentState = "",
    this.ContactState = "",
    this.DndState = "",
    this.ForwardState = "",
    this.MessageState = "",
    this.Location = "",
    this.AbsenceText = "",
    this.UsePBXName = "",
    this.ClassType = "",
    this.EquipmentId = "",
    this.Changes = "",
    this.DDI = "",
    this.AvailabilityUntil = ""
}
,
meeting = function() {
    this.Type = ucObjectType.Meeting,
    this.ServerId = "",
    this.Room = "",
    this.MeetingTitle = "",
    this.Participants = []
}
,
error = function() {
    this.Type = ucObjectType.Error,
    this.Description = "",
    this.Code = "",
    this.Source = ""
}
,
DeviceState = {
    ONHOOK: "ONHOOK",
    OFFHOOK: "OFFHOOK",
    NOMONITOR: "NOMONITOR",
    NOCALLS: "NOCALLS",
    FAILED: "FAILED",
    OFFLINE: "OFFLINE",
    HELD: "HELD",
    RINGING: "RINGING"
},
ResponseResult = {
    Failure: "FAILURE",
    Pending: "PENDING",
    Success: "SUCCESS"
},
ErrorCode = {
    NoSession: "NOSESSION",
    NotAvailable: "NOTAVAILABLE",
    MissingParameter: "MISSINGPARAMETER",
    NoEntity: "NOENTITY",
    CommandNotSupported: "COMMANDNOTSUPPORTED",
    NoDestination: "NODESTINATION"
},
EventCategory = {
    System: "SYSTEM",
    General: "GENERAL"
},
EventName = {
    Ready: "READY",
    PackageRequest: "PACKAGEREQUEST",
    Connected: "CONNECTED",
    Disconnected: "DISCONNECTED",
    ConnectionFailed: "CONNECTIONFAILED",
    UserChange: "USERCHANGE",
    PolicyChange: "POLICYCHANGE",
    SettingsChange: "SETTINGSCHANGE",
    LoginFailure: "LOGINFAILURE"
},
ResponseResult = {
    Success: "SUCCESS",
    Failure: "FAILURE"
},
ErrorCode = {
    NotAvailable: "NOTAVAILABLE",
    NoDestination: "NODESTINATION",
    MissingParameter: "MISSINGPARAMETER",
    NoEntity: "NOENTITY",
    NoSession: "NOSESSION",
    NotReady: "NOTREADY",
    Duplicate: "DUPLICATE"
},
ClientSessionType = {
    EncryptedPacket: "ENCRYPTEDPACKET",
    Packet: "PACKET"
},
_session = function() {
    var e = ""
      , t = "";
    this.m_ServerVersion = "",
    this.CurCallId = "",
    Connect = function(l, n, a) {
        "undefined" == a && (a = !1),
        (l = trimString(l)).indexOf("\\") > 0 && (e = l.substr(l.indexOf("\\") + 1),
        l = l.substr(0, l.indexOf("\\"))),
        null != m_ClientSession && m_ClientSession.Close(),
        null == n && (n = GetGuid()),
        t = n,
        m_ClientSession = new ClientSocketSession(l,n,a)
    }
    ,
    ConnectSecure = function(e, t) {
        Connect(e, t, !0)
    }
    ,
    Disconnect = function() {
        null != m_ClientSession && m_ClientSession.Close()
    }
    ,
    dbGet = function(e, t, l, n, a) {
        var i = "";
        i += XMLElementBuilder("Entity", null, null, 0, e),
        i += XMLElementBuilder("RequestId", null, null, 0, e + "_Get"),
        i += XMLElementBuilder("Command", null, null, 0, "Get"),
        null != l && (i += XMLElementBuilder("Fields", null, null, 0, l)),
        null != t && (t.length > 0 ? i += XMLElementBuilder("Filter", null, null, 0, t) : i += XMLElementBuilder("Filter", null, null, 0, XMLElementBuilder("All"))),
        null != n && (i += XMLElementBuilder("Sort", null, null, 0, n)),
        null != a && (i += a),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, i))
    }
    ,
    dbMonitor = function(e, t, l, n, a, i, o, s) {
        var r = "";
        r += XMLElementBuilder("Entity", null, null, 0, e),
        r += XMLElementBuilder("RequestId", null, null, 0, t + "_Monitor"),
        r += XMLElementBuilder("Command", null, null, 0, "Monitor"),
        r += XMLElementBuilder("MonitorId", null, null, 0, t),
        null != l && (r += XMLElementBuilder("Filter", null, null, 0, l)),
        null != n && (r += XMLElementBuilder("Sort", null, null, 0, n)),
        null != a && (r += XMLElementBuilder("Events", null, null, 0, a)),
        null != i && (r += XMLElementBuilder("Fields", null, null, 0, i)),
        null != o && (r += o),
        null != s && null != s || (r += XMLElementBuilder("InitialValues")),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, r))
    }
    ,
    dbSet = function(e, t, l, n) {
        var a = "";
        a += XMLElementBuilder("Entity", null, null, 0, e),
        a += XMLElementBuilder("RequestId", null, null, 0, e + "_Set"),
        a += XMLElementBuilder("Command", null, null, 0, "Set"),
        null != n && (a += n),
        null != l && (a += XMLElementBuilder("Values", null, null, 0, l)),
        null != t && (t.length > 0 ? a += t : a += XMLElementBuilder("Filter", null, null, 0, XMLElementBuilder("All"))),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, a))
    }
    ,
    dbCreate = function(e, t, l, n) {
        var a = "";
        a += XMLElementBuilder("Entity", null, null, 0, e),
        a += XMLElementBuilder("RequestId", null, null, 0, e + "_Create"),
        a += XMLElementBuilder("Command", null, null, 0, "Create"),
        null != n && (a += n),
        null != l && (a += XMLElementBuilder("Values", null, null, 0, l)),
        null != t && t.length > 0 && (a += t),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, a))
    }
    ,
    dbDelete = function(e, t, l) {
        var n = "";
        n += XMLElementBuilder("Entity", null, null, 0, e),
        n += XMLElementBuilder("RequestId", null, null, 0, e + "_Delete"),
        n += XMLElementBuilder("Command", null, null, 0, "Delete"),
        null != l && (n += l),
        null != t && t.length > 0 && (n += t),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, n))
    }
    ,
    GetCallData = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "GetCall"),
        t += XMLElementBuilder("RequestId", null, null, 0, "GetCall"),
        t += XMLElementBuilder("CallId", null, null, 0, e),
        t += "<Fields><Start/><Direction/><DurationTotal/><ContactTel/><CallHistoryId/><CallerContact><Id/><Name/><ForeignId/></CallerContact><CalledContact><Id/><Name/><ForeignId/></CalledContact><CallHistory><CallerTel/><CalledTel/><Missed/><Recorded/></CallHistory></Fields>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    Login = function(t, l, n) {
        var a = "";
        a += XMLElementBuilder("Command", null, null, 0, "Login"),
        a += XMLElementBuilder("RequestId", null, null, 0, "Login"),
        a += XMLElementBuilder("Application", null, null, 0, t),
        a += XMLElementBuilder("User", null, null, 0, l),
        a += XMLElementBuilder("Password", null, null, 0, EncodeHash(l.toLowerCase() + ":UnifiedCommunications:" + n)),
        null != e && (a += XMLElementBuilder("Tenant", null, null, 0, e)),
        a += XMLElementBuilder("Transport", null, null, 0, "UCClient 2.6"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, a))
    }
    ,
    UpdateContact = function(e, t, l="Set") {
        var n = "";
        n += XMLElementBuilder("Command", null, null, 0, l),
        n += XMLElementBuilder("RequestId", null, null, 0, "CreateContact"),
        n += XMLElementBuilder("Entity", null, null, 0, "COMPANY"),
        n += "<Values>",
        n += function e(t) {
            var l = "";
            for (var n in t)
                "object" == typeof t[n] ? (l += "<" + n + ">",
                l += e(t[n]),
                l += "</" + n + ">") : l += XMLElementBuilder(n, null, null, 0, t[n]);
            return l
        }(e.Values),
        n += "</Values>",
        null != t && (n += "<Filter>",
        n += "<Id>" + t + "</Id>",
        n += "</Filter>"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, n))
    }
    ,
    AddContact = function(e) {
        UpdateContact(e, void 0, "Create")
    }
    ,
    DeleteContact = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "Delete"),
        t += XMLElementBuilder("RequestId", null, null, 0, "DeleteContact"),
        t += XMLElementBuilder("Entity", null, null, 0, "COMPANY"),
        t += "<Filter>",
        t += "<Id>" + e + "</Id>",
        t += "</Filter>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    SearchAddressBook = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "Get"),
        l += XMLElementBuilder("Entity", null, null, 0, "Company"),
        l += XMLElementBuilder("Timeout", null, null, 0, "15000"),
        l += XMLElementBuilder("MaxRows", null, null, 0, "25"),
        l += XMLElementBuilder("RequestId", null, null, 0, t),
        l += "<Filter>",
        l += "<CompanyWord>",
        l += "" != e.Who ? "<Who>" + e.Who + "</Who>" : "",
        l += "" != e.What ? "<What>" + e.What + "</What>" : "",
        l += "" != e.Where ? "<Where>" + e.Where + "</Where>" : "",
        l += "</CompanyWord>",
        l += "</Filter>",
        l += "<Sort>",
        l += "<DisplayName />",
        l += "</Sort>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    GetContact = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "Get"),
        l += XMLElementBuilder("Entity", null, null, 0, t),
        l += XMLElementBuilder("RequestId", null, null, 0, "GetContact"),
        l += "<Filter>",
        l += "<Id>" + e + "</Id>",
        l += "</Filter>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    SetAvailability = function(e, t, l, n) {
        var a = "";
        a += XMLElementBuilder("RequestId", null, null, 0, "Ignore"),
        a += XMLElementBuilder("Entity", null, null, 0, "USER"),
        a += XMLElementBuilder("Command", null, null, 0, "Set"),
        a += "<Values>",
        a += null != t ? XMLElementBuilder("Availability", null, null, 0, t) : "",
        a += null != l ? XMLElementBuilder("AbsenceText", null, null, 0, l) : "",
        a += null != n ? XMLElementBuilder("AvailabilityUntil", null, null, 0, n) : "",
        a += "</Values>",
        a += "<Filter>",
        a += "<Id>" + e + "</Id>",
        a += "</Filter>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, a))
    }
    ,
    EncodeHash = function(e) {
        return 0 == e.length ? "" : MD5(e)
    }
    ,
    Ping = function() {
        Send("<Packet><Command>Pong</Command></Packet>")
    }
    ,
    BlindTransfer = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "TransferBlind"),
        l += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        l += XMLElementBuilder("Id", null, null, 0, e),
        l += XMLElementBuilder("Destination", null, null, 0, t),
        l += XMLElementBuilder("RequestId", null, null, 0, "BlindTransferRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    ConsultTransfer = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "SetupTransfer"),
        l += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        l += XMLElementBuilder("Id", null, null, 0, e),
        l += XMLElementBuilder("Destination", null, null, 0, t),
        l += XMLElementBuilder("RequestId", null, null, 0, "ConsultTransferRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    CompleteTransfer = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "TransferComplete"),
        l += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        l += XMLElementBuilder("Id", null, null, 0, e),
        l += XMLElementBuilder("ConsultId", null, null, 0, t),
        l += XMLElementBuilder("RequestId", null, null, 0, "ConsultCompleteRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    CancelTransfer = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "TransferCancel"),
        l += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        l += XMLElementBuilder("Id", null, null, 0, e),
        l += XMLElementBuilder("ConsultId", null, null, 0, t),
        l += XMLElementBuilder("RequestId", null, null, 0, "ConsultCancelRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    DeflectCall = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "Deflect"),
        l += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        l += XMLElementBuilder("Id", null, null, 0, e),
        l += XMLElementBuilder("Destination", null, null, 0, t),
        l += XMLElementBuilder("RequestId", null, null, 0, "DeflectCallRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    Hold = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "Hold"),
        t += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        t += XMLElementBuilder("Id", null, null, 0, e),
        t += XMLElementBuilder("RequestId", null, null, 0, "HoldRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    Unhold = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "Unhold"),
        t += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        t += XMLElementBuilder("Id", null, null, 0, e),
        t += XMLElementBuilder("RequestId", null, null, 0, "HoldRequest"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    Feature = function(e, t, l) {
        var n = "";
        n += XMLElementBuilder("Command", null, null, 0, "Feature"),
        n += XMLElementBuilder("Entity", null, null, 0, "DEVICE"),
        n += XMLElementBuilder("Id", null, null, 0, e),
        n += XMLElementBuilder("Feature", null, null, 0, t),
        n += XMLElementBuilder("State", null, null, 0, l),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, n))
    }
    ,
    Forward = function(e, t) {
        null != t && null != t && 0 != t.length && "string" == typeof t || (t = "OFF"),
        Feature(e, "Forward", t)
    }
    ,
    DND = function(e, t) {
        null != t && null != t && "boolean" == typeof t || (t = !1),
        Feature(e, "DND", t ? "ON" : "OFF")
    }
    ,
    Send = function(e) {
        "string" != typeof e || null != m_ClientSession && m_ClientSession.Send(e)
    }
    ,
    ConnectionHistory = function(e, t, l) {
        var n = "";
        n += XMLElementBuilder("Command", null, null, 0, "Get"),
        n += XMLElementBuilder("Entity", null, null, 0, "CONNECTIONHISTORY"),
        n += XMLElementBuilder("RequestId", null, null, 0, "GetHistory"),
        n += "<Fields><Start/><Direction/><DurationTotal/><ContactTel/><CallHistoryId/><CallerContact><Id/><Name/><ForeignId/></CallerContact><CalledContact><Id/><Name/><ForeignId/></CalledContact><CallHistory><CallerTel/><CalledTel/><Missed/><Recorded/></CallHistory></Fields>",
        n += "<Sort><Start Order='desc' /></Sort>",
        n += "<Filter>" + e + l + "</Filter>",
        n += "<MaxRows>50</MaxRows>",
        n += "<PageNo>" + t + "</PageNo>",
        n += "<Timeout>15000</Timeout>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, n))
    }
    ,
    SingleUserReq = function(e, t) {
        t = null != t ? t : "GetSingleUser";
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "Get"),
        l += XMLElementBuilder("Entity", null, null, 0, "USER"),
        l += XMLElementBuilder("RequestId", null, null, 0, t),
        l += "<Fields><Id /><ShortName /><Name /><CurrentTel /><RegisteredDevices /><Photo /></Fields>",
        l += "<Filter>" + e + "</Filter>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    monitorCalls = function(e) {
        dbMonitor("CONNECTION", "CONNECTION", e, null, "<All/>", "<All /><Call><All /></Call>")
    }
    ,
    monitorUserCalls = function(e) {
        monitorCalls("<User.ShortName>" + e + "</User.ShortName>")
    }
    ,
    monitorDeviceCalls = function(e) {
        monitorCalls("<Device.ShortName>" + e + "</Device.ShortName>")
    }
    ,
    monitorAllCalls = function() {
        monitorCalls("<All />")
    }
    ,
    monitorHistory = function(e) {
        dbMonitor("CONNECTIONHISTORY", "HISTORY", e, "<Start Order='desc' />", "<Hide/>", "<Start/><Direction/><DurationTotal/><ContactTel/><CallHistoryId/><CallerContact><Id/><Name/><ForeignId/></CallerContact><CalledContact><Id/><Name/><ForeignId/></CalledContact><CallHistory><CallerTel/><CalledTel/><Missed/><Recorded/><Photo/></CallHistory>", "<MaxRows>50</MaxRows><PageNo>1</PageNo><Timeout>15000</Timeout>")
    }
    ,
    monitorUserHistory = function(e) {
        monitorHistory("<UserId>" + e + "</UserId>")
    }
    ,
    monitorDeviceHistory = function(e) {
        monitorHistory("<DeviceId>" + e + "</DeviceId>")
    }
    ,
    getUserHistory = function(e) {
        ConnectionHistory("<UserId>" + e + "</UserId>")
    }
    ,
    getDeviceHistory = function(e, t, l) {
        ConnectionHistory(null != e ? "<DeviceId>" + e + "</DeviceId>" : "", t, l)
    }
    ,
    getSingleUser = function(e, t) {
        SingleUserReq("<Id>" + e + "</Id>", t)
    }
    ,
    monitorDevices = function(e) {
        dbMonitor("DEVICE", "DEVICES", e, null, "<Id/><ShortName/><Name/><Department/><State/><Availability/><UserState/><AgentState/><DirectionState/><MessageState/><ForwardState/><DndState/><AbsenceText/><ContactState/><CurrentTel/><Location/><Privacy/><DDI/><Hide/>", "<All/>", "<MaxRows>500</MaxRows><PageNo>1</PageNo><Timeout>15000</Timeout>")
    }
    ,
    monitorAllDevices = function() {
        monitorDevices("<ClassType>DE</ClassType><Hide/>")
    }
    ,
    monitorUsers = function(e) {
        dbMonitor("USER", "USERS", e, null, "<Id/><ShortName/><Name/><Department/><State/><Availability/><UserState/><AgentState/><DirectionState/><MessageState/><ForwardState/><DndState/><AbsenceText/><ContactState/><CurrentTel/><Location/><Privacy/><DDI/><Hide/><PolicyId/><RegisteredDevices/><Photo/>", "<All/>", "<SendValues/><ForceCache/><MaxRows>5000</MaxRows>")
    }
    ,
    monitorAllUsers = function() {
        monitorUsers("<Disabled/>")
    }
    ,
    serverMinimum = function(e) {
        for (var t = this.m_ServerVersion.split("."), l = e.split("."), n = 0; n < l.length; n++)
            if (l[n] > t[n])
                return !1;
        return !0
    }
    ,
    CurCallId = "",
    makeCall = function(e, t, l) {
        CurCallId = guidGenerator(!0);
        var n = "";
        n += XMLElementBuilder("Command", null, null, 0, "MakeCall"),
        n += XMLElementBuilder("Entity", null, null, 0, "DEVICE"),
        n += XMLElementBuilder("Id", null, null, 0, t),
        n += XMLElementBuilder("Destination", null, null, 0, e),
        n += XMLElementBuilder("NewConnectionId", null, null, 0, CurCallId),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, n))
    }
    ,
    pickUp = function(e) {
        var t = "";
        "" != e && (CurCallId = e),
        t += XMLElementBuilder("Command", null, null, 0, "Answer"),
        t += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        t += XMLElementBuilder("Id", null, null, 0, CurCallId),
        t += XMLElementBuilder("RequestId", null, null, 0, "AnswerCall"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    hangUp = function(e) {
        var t = "";
        "" != e && (CurCallId = e),
        t += XMLElementBuilder("Command", null, null, 0, "Hangup"),
        t += XMLElementBuilder("Entity", null, null, 0, "CONNECTION"),
        t += XMLElementBuilder("Id", null, null, 0, CurCallId),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    setMeeting = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "Set"),
        t += XMLElementBuilder("Entity", null, null, 0, "MEETING"),
        t += XMLElementBuilder("Filter", null, null, 0, "<Room>" + e + "</Room>"),
        t += XMLElementBuilder("Values", null, null, 0, "<Room>" + e + "</Room>"),
        t += XMLElementBuilder("RequestId", null, null, 0, "SetMeeting_" + e),
        t += XMLElementBuilder("CanCreate", null, null, 0, "1"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    getLocation = function() {
        var e = "";
        e += XMLElementBuilder("Command", null, null, 0, "GetLocation"),
        e += XMLElementBuilder("Fields", null, null, 0, "<Location><Country/></Location><Country/>"),
        e += XMLElementBuilder("RequestId", null, null, 0, "LOCATION_Get"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, e))
    }
    ,
    monitorMeeting = function(e) {
        dbMonitor("MEETING", "MonitorMeeting", "<Room>" + e + "</Room>", null, "<All/>", "<All/>", "<SendValues/><MaxRows>1</MaxRows>")
    }
    ,
    requestResource = function(e) {
        "undefined" == e && (e = "SDK");
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "RequestResource"),
        l += XMLElementBuilder("Computer", null, null, 0, t),
        l += XMLElementBuilder("Resource", null, null, 0, e),
        l += XMLElementBuilder("Version", null, null, 0, ""),
        l += XMLElementBuilder("RequestId", null, null, 0, "RequestResource"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    monitorThreads = function(e) {
        var t = XMLElementBuilder("UserId", null, null, 0, e);
        t += XMLElementBuilder("ClassType", null, null, 0, "MC"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MD");
        dbMonitor("CHAT", "UC-THREADS", t, null, "<All />", "<ClassType /><ThreadChatId /><SyncTime />", "<SendValues />", !0)
    }
    ,
    monitorChat = function(e) {
        var t = "";
        for (var l in e)
            t += XMLElementBuilder("ThreadChatId", null, null, 0, l);
        dbMonitor("CHAT", "UC-CHAT", t, null, "<All />", null, null, !0)
    }
    ,
    getChatHistory = function(e, t, l, n) {
        n = null != n ? n : "GetChatHistory";
        var a = "";
        a += XMLElementBuilder("Command", null, null, 0, "Get"),
        a += XMLElementBuilder("Entity", null, null, 0, "CHAT"),
        a += XMLElementBuilder("RequestId", null, null, 0, n),
        a += "<Fields><ClassType/><SyncTime/><ThreadChatId/><ThreadChat><Body/><BodyRtf/><SyncTime/><UserId/><OtherUserId/></ThreadChat>",
        a += "<ThreadPhoto Expression=\"(select top 1 Body from Chat p where (ClassType='MF' and p.ThreadChatId=ThreadChat.Id) order by SyncTime desc)\" />",
        a += "<LastMessage Expression=\"(select top 1 Body from Chat b where (ClassType='MM' and b.ThreadChatId=ThreadChat.Id) order by SyncTime desc)\" />",
        a += "</Fields>",
        a += "<Sort><SyncTime Order='desc'/></Sort>",
        a += "<Filter>",
        a += XMLElementBuilder("UserId", null, null, 0, e),
        a += XMLElementBuilder("ClassType", null, null, 0, "MC"),
        a += XMLElementBuilder("ClassType", null, null, 0, "MD"),
        null != l && (a += "<ThreadChatId>" + l + "</ThreadChatId>"),
        a += "</Filter>",
        a += "<MaxRows>50</MaxRows>",
        a += "<PageNo>" + t + "</PageNo>",
        a += "<Timeout>15000</Timeout>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, a))
    }
    ,
    getThread = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "Get"),
        t += XMLElementBuilder("Entity", null, null, 0, "CHAT"),
        t += XMLElementBuilder("RequestId", null, null, 0, "GetThread"),
        t += "<Fields>",
        t += "<All />",
        t += "<User>",
        t += "<Id /><ShortName /><Name /><CurrentTel /><Photo />",
        t += "</User>",
        t += "<OtherUser>",
        t += "<Id /><ShortName /><Name /><CurrentTel /><Photo />",
        t += "</OtherUser>",
        t += "</Fields>",
        t += "<Filter>",
        t += XMLElementBuilder("ThreadChatId", null, null, 0, e),
        t += XMLElementBuilder("ClassType", null, null, 0, "MA"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MB"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MC"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MD"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MF"),
        t += "</Filter>",
        t += "<Sort>",
        t += "<SyncTime Order='desc' />",
        t += "</Sort>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    getThreadMessages = function(e) {
        var t = "";
        t += XMLElementBuilder("Command", null, null, 0, "Get"),
        t += XMLElementBuilder("Entity", null, null, 0, "CHAT"),
        t += XMLElementBuilder("RequestId", null, null, 0, "GetThreadMessages"),
        t += "<Fields>",
        t += "<All />",
        t += "<User>",
        t += "<Id /><ShortName /><Name /><CurrentTel /><Photo />",
        t += "</User>",
        t += "</Fields>",
        t += "<Filter>",
        t += XMLElementBuilder("ThreadChatId", null, null, 0, e),
        t += XMLElementBuilder("ClassType", null, null, 0, "MM"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MN"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MO"),
        t += XMLElementBuilder("ClassType", null, null, 0, "MP"),
        t += "<SyncTime Type='Date' Operator='LT'>2017/09/22 00:00:00</SyncTime>",
        t += "</Filter>",
        t += "<Sort>",
        t += "<SyncTime Order='desc' />",
        t += "</Sort>",
        t += XMLElementBuilder("MaxRows", null, null, 0, "100"),
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, t))
    }
    ,
    removeChatUser = function(e, t) {
        var l = "";
        l += XMLElementBuilder("Command", null, null, 0, "Set"),
        l += XMLElementBuilder("Entity", null, null, 0, "CHAT"),
        l += XMLElementBuilder("RequestId", null, null, 0, "RemoveUser"),
        l += "<Values>",
        l += XMLElementBuilder("ClassType", null, null, 0, "ME"),
        l += "</Values>",
        l += "<Filter>",
        l += XMLElementBuilder("UserId", null, null, 0, t),
        l += XMLElementBuilder("ThreadChatId", null, null, 0, e),
        l += XMLElementBuilder("ClassType", null, null, 0, "MD"),
        l += "</Filter>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, l))
    }
    ,
    sendChatMessage = function(e, t, l) {
        var n = "";
        n += XMLElementBuilder("Command", null, null, 0, "Create"),
        n += XMLElementBuilder("Entity", null, null, 0, "CHAT"),
        n += XMLElementBuilder("RequestId", null, null, 0, "CreateUser"),
        n += "<Values>",
        n += XMLElementBuilder("UserId", null, null, 0, t),
        n += XMLElementBuilder("ThreadChatId", null, null, 0, e),
        n += XMLElementBuilder("ClassType", null, null, 0, "MM"),
        n += XMLElementBuilder("Body", null, null, 0, l),
        n += "</Values>",
        Send(XMLElementBuilder("Packet", "Type", "Command", 0, n))
    }
    ,
    m_ClientSession = null,
    this.Send = Send,
    this.Connect = Connect,
    this.ConnectSecure = ConnectSecure,
    this.Disconnect = Disconnect,
    this.Login = Login,
    this.GetContact = GetContact,
    this.AddContact = AddContact,
    this.UpdateContact = UpdateContact,
    this.DeleteContact = DeleteContact,
    this.SearchAddressBook = SearchAddressBook,
    this.GetCallData = GetCallData,
    this.Ping = Ping,
    this.BlindTransfer = BlindTransfer,
    this.ConsultTransfer = ConsultTransfer,
    this.CompleteTransfer = CompleteTransfer,
    this.CancelTransfer = CancelTransfer,
    this.DeflectCall = DeflectCall,
    this.Hold = Hold,
    this.Unhold = Unhold,
    this.Forward = Forward,
    this.DND = DND,
    this.SetAvailability = SetAvailability,
    this.dbSet = dbSet,
    this.dbGet = dbGet,
    this.dbCreate = dbCreate,
    this.dbDelete = dbDelete,
    this.getUserHistory = getUserHistory,
    this.getDeviceHistory = getDeviceHistory,
    this.monitorUsers = monitorUsers,
    this.monitorAllDevices = monitorAllDevices,
    this.monitorAllUsers = monitorAllUsers,
    this.getSingleUser = getSingleUser,
    this.monitorUserHistory = monitorUserHistory,
    this.monitorDeviceHistory = monitorDeviceHistory,
    this.monitorUserCalls = monitorUserCalls,
    this.monitorDeviceCalls = monitorDeviceCalls,
    this.monitorAllCalls = monitorAllCalls,
    this.makeCall = makeCall,
    this.pickUp = pickUp,
    this.hangUp = hangUp,
    this.setMeeting = setMeeting,
    this.getLocation = getLocation,
    this.requestResource = requestResource,
    this.getChatHistory = getChatHistory,
    this.getThread = getThread,
    this.getThreadMessages = getThreadMessages,
    this.removeChatUser = removeChatUser,
    this.sendChatMessage = sendChatMessage,
    this.monitorChat = monitorChat,
    this.monitorThreads = monitorThreads
}
,
_requestId = function() {
    return "$$" + guidGenerator(!1)
}
,
this.sRequestId = _requestId;
var XMLParser = require("xmldom").DOMParser;
function XMLReplaceTag(e, t) {
    var l = e.innerHTML.match(new RegExp("[</]" + t,"ig"));
    if (null != l && l.length > 0)
        try {
            var n = e.innerHTML;
            l.forEach(function(e) {
                newElement = e.replace(new RegExp(t,"ig"), t),
                n = n.replace(e, newElement)
            }),
            e.innerHTML = n
        } catch (e) {}
    return e
}
function deviceUpdate(e) {
    var t = new device;
    return t.Id = XMLGetData(e, "T", "Id"),
    t.ShortName = XMLGetData(e, "T", "ShortName"),
    t.Name = XMLGetData(e, "T", "Name"),
    t.Department = XMLGetData(e, "T", "Department"),
    t.State = XMLGetData(e, "T", "State"),
    t.DirectionState = XMLGetData(e, "T", "DirectionState"),
    t.UserState = XMLGetData(e, "T", "UserState"),
    t.AgentState = XMLGetData(e, "T", "AgentState"),
    t.ContactState = XMLGetData(e, "T", "ContactState"),
    t.DndState = XMLGetData(e, "T", "DndState"),
    t.ForwardState = XMLGetData(e, "T", "ForwardState"),
    t.MessageState = XMLGetData(e, "T", "MessageState"),
    t.Location = locationUpdateSmall(XMLGetData(e, "X", "Location")),
    t.AbsenceText = XMLGetData(e, "T", "AbsenceText"),
    t.Availability = XMLGetData(e, "T", "Availability"),
    t.DDI = XMLGetData(e, "T", "DDI"),
    t.Photo = XMLGetData(e, "T", "Photo"),
    t
}
function userUpdate(e) {
    var t = new user;
    return t.Id = XMLGetData(e, "T", "Id"),
    t.ShortName = XMLGetData(e, "T", "ShortName"),
    t.Name = XMLGetData(e, "T", "Name"),
    t.Department = XMLGetData(e, "T", "Department"),
    t.State = XMLGetData(e, "T", "State"),
    t.DirectionState = XMLGetData(e, "T", "DirectionState"),
    t.UserState = XMLGetData(e, "T", "UserState"),
    t.AgentState = XMLGetData(e, "T", "AgentState"),
    t.ContactState = XMLGetData(e, "T", "ContactState"),
    t.DndState = XMLGetData(e, "T", "DndState"),
    t.ForwardState = XMLGetData(e, "T", "ForwardState"),
    t.MessageState = XMLGetData(e, "T", "MessageState"),
    t.Location = locationUpdateSmall(XMLGetData(e, "X", "Location")),
    t.AbsenceText = XMLGetData(e, "T", "AbsenceText"),
    t.Availability = XMLGetData(e, "T", "Availability"),
    t.DDI = XMLGetData(e, "T", "DDI"),
    t.Email = XMLGetData(e, "T", "Email"),
    t.Photo = XMLGetData(e, "T", "Photo"),
    t.RegisteredDevices = XMLGetData(e, "T", "RegisteredDevices"),
    t.CurrentTel = XMLGetData(e, "T", "CurrentTel"),
    t.AvailabilityUntil = XMLGetData(e, "T", "AvailabilityUntil"),
    t.Hide = null != XMLGetData(e, "T", "Hide") && parseInt(XMLGetData(e, "T", "Hide"), 10) > 0,
    t
}
function singleUser(e) {
    var t = new user;
    return t.Type = ucObjectType.PhotoUser,
    t.Id = XMLGetData(e, "T", "Id"),
    t.ShortName = XMLGetData(e, "T", "ShortName"),
    t.Name = XMLGetData(e, "T", "Name"),
    t.Photo = XMLGetData(e, "T", "Photo"),
    t.CurrentTel = XMLGetData(e, "T", "CurrentTel"),
    t.RegisteredDevices = XMLGetData(e, "T", "RegisteredDevices"),
    t
}
function locationUpdateSmall(e) {
    return lDetail = new locationData,
    "" != e && (lDetail.Longitude = XMLGetData(e, "T", "Longitude"),
    lDetail.Latitude = XMLGetData(e, "T", "Latitude"),
    lDetail.Road = XMLGetData(e, "T", "Road"),
    lDetail.Town = XMLGetData(e, "T", "Town"),
    lDetail.Country = XMLGetData(e, "T", "Country"),
    lDetail.DisplayName = XMLGetData(e, "T", "DisplayName"),
    lDetail.LastUpdate = XMLGetData(e, "T", "LastUpdate")),
    lDetail
}
function historyUpdate(e) {
    var t = new connHistory;
    return t.Start = XMLGetData(e, "T", "Start"),
    t.DurationTotal = XMLGetData(e, "T", "DurationTotal"),
    t.CallHistoryId = XMLGetData(e, "T", "CallHistoryId"),
    t.ContactTel = XMLGetData(e, "T", "ContactTel"),
    t.DeviceId = XMLGetData(e, "T", "DeviceId"),
    t.ClassType = XMLGetData(e, "T", "ClassType"),
    t.Direction = XMLGetData(e, "T", "Direction"),
    t.Caller = callDetailUpdate(XMLGetData(e, "X", "CallerContact")),
    t.Called = callDetailUpdate(XMLGetData(e, "X", "CalledContact")),
    t.History = callHistoryUpdate(XMLGetData(e, "X", "CallHistory")),
    t.Reason = XMLGetData(e, "T", "Reason"),
    t.ReasonDevice = XMLGetData(e, "T", "ReasonDevice"),
    t.State = XMLGetData(e, "T", "State"),
    t
}
function chatHistory(e) {
    var t = new chat;
    return t.SyncTime = XMLGetData(e, "T", "SyncTime"),
    t.Id = XMLGetData(e, "T", "ThreadChatId"),
    t.ThreadChat = getThreadChat(XMLGetData(e, "X", "ThreadChat")),
    t.ThreadPhoto = XMLGetData(e, "T", "ThreadPhoto"),
    t.LastMessage = XMLGetData(e, "T", "LastMessage"),
    t.RequestId = "GetChatHistory",
    t
}
function getThreadMonitor(e) {
    var t = new threadMonitor;
    return t.ThreadId = XMLGetData(e, "T", "THREADCHATID"),
    t.RequestId = "ThreadMonitor",
    t
}
function getChatMonitor(e) {
    var t = new chatMonitor;
    t.Event = XMLGetData(e, "T", "Event"),
    t.Id = XMLGetData(e, "T", "Id");
    var l = XMLGetData(e, "X", "Values");
    return t.Body = XMLGetData(l, "T", "Body"),
    t.ClassType = XMLGetData(l, "T", "ClassType"),
    t.UserId = XMLGetData(l, "T", "UserId"),
    t.ThreadChatId = XMLGetData(l, "T", "ThreadChatId"),
    t.SyncTime = XMLGetData(l, "T", "SyncTime"),
    "" != XMLGetData(l, "X", "USER") && (t.User = userUpdate(XMLGetData(l, "X", "USER"))),
    t.State = XMLGetData(l, "T", "State"),
    t.RequestId = "ChatMonitorDetail",
    t
}
function getThreadChat(e) {
    var t = new threadChat;
    return t.Body = XMLGetData(e, "T", "Body"),
    t.BodyRTF = XMLGetData(e, "T", "BodyRtf"),
    t.SyncTime = XMLGetData(e, "T", "SyncTime"),
    t.UserId = XMLGetData(e, "T", "UserId"),
    t.OtherUserId = XMLGetData(e, "T", "OtherUserId"),
    t
}
function allThread(e) {
    var t = new chatData;
    return t.Id = XMLGetData(e, "T", "Id"),
    t.Body = XMLGetData(e, "T", "Body"),
    t.BodyRTF = XMLGetData(e, "T", "BodyRTF"),
    t.ClassType = XMLGetData(e, "T", "ClassType"),
    t.UserId = XMLGetData(e, "T", "UserId"),
    t.OtherUserId = XMLGetData(e, "T", "OtherUserId"),
    t.ThreadChatId = XMLGetData(e, "T", "ThreadChatId"),
    t.SyncTime = XMLGetData(e, "T", "SyncTime"),
    t.User = getChatUserData(XMLGetData(e, "X", "USER")),
    t.OtherUser = getChatUserData(XMLGetData(e, "X", "OTHERUSER")),
    t.RequestId = "GetThread",
    t
}
function threadMessages(e) {
    var t = new chatDataMessages;
    return t.Id = XMLGetData(e, "T", "Id"),
    t.Body = XMLGetData(e, "T", "Body"),
    t.BodyRTF = XMLGetData(e, "T", "BodyRTF"),
    t.ClassType = XMLGetData(e, "T", "ClassType"),
    t.UserId = XMLGetData(e, "T", "UserId"),
    t.OtherUserId = XMLGetData(e, "T", "OtherUserId"),
    t.ThreadChatId = XMLGetData(e, "T", "ThreadChatId"),
    t.SyncTime = XMLGetData(e, "T", "SyncTime"),
    t.User = getChatUserData(XMLGetData(e, "X", "USER")),
    t.RequestId = "GetThreadMessages",
    t
}
function getChatUserData(e) {
    var t = new chatUser;
    return t.Id = XMLGetData(e, "T", "Id"),
    t.ShortName = XMLGetData(e, "T", "ShortName"),
    t.Name = XMLGetData(e, "T", "Name"),
    t.CurrentTel = XMLGetData(e, "T", "CurrentTel"),
    t.Photo = XMLGetData(e, "T", "Photo"),
    t
}
function callUpdate(e) {
    var t = new call;
    return t.Id = XMLGetData(e, "T", "Id"),
    t.Event = XMLGetData(e, "T", "Event"),
    t.CallId = XMLGetData(e, "T", "Id"),
    t.State = XMLGetData(e, "T", "State"),
    t.Start = XMLGetData(e, "T", "Start"),
    t.DurationTotal = XMLGetData(e, "T", "DurationTotal"),
    t.DurationRing = XMLGetData(e, "T", "DurationRing"),
    t.DurationHeld = XMLGetData(e, "T", "DurationHeld"),
    t.DurationConnected = XMLGetData(e, "T", "DurationConnected"),
    t.DurationOther = XMLGetData(e, "T", "DurationOther"),
    t.Caller = callDetailUpdate(XMLGetData(e, "X", "CallerContact")),
    t.Called = callDetailUpdate(XMLGetData(e, "X", "CalledContact")),
    t.Contact = callDetailUpdate(XMLGetData(e, "X", "Contact")),
    t.Trunk = "",
    t.Direction = XMLGetData(e, "T", "Direction"),
    t.External = "",
    t.Missed = XMLGetData(e, "T", "Missed"),
    t.Category = "",
    t.Custom1 = "",
    t.Custom2 = "",
    t
}
function locationUpdate(e) {
    var t = new locationObj;
    return t.LocalArea = XMLGetData(e, "T", "Location", "LocalArea"),
    t.Area = locationAreaUpdate(XMLGetData(e, "X", "Location", "Area")),
    t.Country = locationCountryUpdate(XMLGetData(e, "X", "Location", "Country")),
    t.TimeZone = locationTimeZoneUpdate(XMLGetData(e, "X", "Location", "TimeZone")),
    t
}
function locationAreaUpdate(e) {
    return cArea = new locationArea,
    "" != e && (cArea.ID = XMLGetData(e, "T", "ID"),
    cArea.CountryId = XMLGetData(e, "T", "CountryId"),
    cArea.Code = XMLGetData(e, "T", "Code"),
    cArea.Name = XMLGetData(e, "T", "Name"),
    cArea.LocalName = XMLGetData(e, "T", "LocalName"),
    cArea.TimeZoneId = XMLGetData(e, "T", "TimeZoneId"),
    cArea.Mobile = "True" == XMLGetData(e, "T", "Mobile"),
    cArea.NonGeographic = "True" == XMLGetData(e, "T", "NonGeographic"),
    cArea.RemainderMin = XMLGetData(e, "T", "RemainderMin"),
    cArea.RemainderMax = XMLGetData(e, "T", "RemainderMax"),
    cArea.Latitude = XMLGetData(e, "T", "Latitude"),
    cArea.Longitude = XMLGetData(e, "T", "Longitude")),
    cArea
}
function locationCountryUpdate(e) {
    return cCountry = new locationCountry,
    "" != e && (cCountry.ID = XMLGetData(e, "T", "ID"),
    cCountry.Code = XMLGetData(e, "T", "Code"),
    cCountry.Name = XMLGetData(e, "T", "Name"),
    cCountry.Duplicate = "True" == XMLGetData(e, "T", "Duplicate"),
    cCountry.LocalName = XMLGetData(e, "T", "LocalName"),
    cCountry.TimeZoneId = XMLGetData(e, "T", "TimeZoneId"),
    cCountry.InternationalAccess = XMLGetData(e, "T", "InternationalAccess"),
    cCountry.StdAccess = XMLGetData(e, "T", "StdAccess"),
    cCountry.RemainderMin = XMLGetData(e, "T", "RemainderMin"),
    cCountry.RemainderMax = XMLGetData(e, "T", "RemainderMax"),
    cCountry.CountryCode = XMLGetData(e, "T", "CountryCode"),
    cCountry.LanguageCode = XMLGetData(e, "T", "LanguageCode")),
    cCountry
}
function locationTimeZoneUpdate(e) {
    return cTimeZone = new locationTimeZone,
    "" != e && (cTimeZone.ID = XMLGetData(e, "T", "Id"),
    cTimeZone.Code = XMLGetData(e, "T", "Code"),
    cTimeZone.Name = XMLGetData(e, "T", "Name"),
    cTimeZone.GmtOffset = XMLGetData(e, "T", "GmtOffset")),
    cTimeZone
}
function meetingUpdate(e) {
    var t = new meeting;
    return "" != e && (t.ServerId = XMLGetData(e, "T", "Id"),
    t.Room = XMLGetData(e, "T", "Room")),
    t
}
function callDetailUpdate(e) {
    return cDetail = new callerContact,
    "" != e && (cDetail.Id = XMLGetData(e, "T", "Id"),
    cDetail.Tel = XMLGetData(e, "T", "Tel"),
    cDetail.DisplayTel = XMLGetData(e, "T", "DisplayTel"),
    cDetail.Name = XMLGetData(e, "T", "Name"),
    cDetail.DisplayName = XMLGetData(e, "T", "DisplayName"),
    cDetail.ClassType = XMLGetData(e, "T", "ClassType"),
    cDetail.ForeignId = XMLGetData(e, "T", "ForeignId"),
    cDetail.DirectoryId = XMLGetData(e, "T", "DirectoryId"),
    cDetail.Department = XMLGetData(e, "T", "Department")),
    cDetail
}
function callHistoryUpdate(e) {
    return cHistory = new historyContact,
    "" != e && (cHistory.CallerTel = XMLGetData(e, "T", "CallerTel"),
    cHistory.CalledTel = XMLGetData(e, "T", "CalledTel"),
    cHistory.Missed = XMLGetData(e, "T", "Missed"),
    cHistory.Recorded = XMLGetData(e, "T", "Recorded")),
    cHistory
}
function addressContactSer(e) {
    var t = {};
    if (t.Type = ucObjectType.Contact,
    t.RequestId = null != e.getElementsByTagName("RequestId")[0].childNodes[0] ? e.getElementsByTagName("RequestId")[0].childNodes[0].data : "",
    e.getElementsByTagName("Entities")[0].getElementsByTagName("Entity").length > 1) {
        t.contacts = {};
        for (var l = e.getElementsByTagName("Entities")[0], n = 0; n < e.getElementsByTagName("Entities")[0].getElementsByTagName("Entity").length; n++) {
            var a = new addressContact;
            if ("" != (i = l.getElementsByTagName("Entity")[n]) && null != i)
                (o = a.Values).Id = null != i.getElementsByTagName("ID")[0].childNodes[0] ? i.getElementsByTagName("ID")[0].childNodes[0].data : "",
                o.Telephone.Phone1 = null != i.getElementsByTagName("Phone1")[0] && null != i.getElementsByTagName("Phone1")[0].childNodes[0] ? i.getElementsByTagName("Phone1")[0].childNodes[0].data : "",
                o.Telephone.Phone2 = null != i.getElementsByTagName("Phone2")[0] && null != i.getElementsByTagName("Phone2")[0].childNodes[0] ? i.getElementsByTagName("Phone2")[0].childNodes[0].data : "",
                o.Telephone.Phone3 = null != i.getElementsByTagName("Phone3")[0] && null != i.getElementsByTagName("Phone3")[0].childNodes[0] ? i.getElementsByTagName("Phone3")[0].childNodes[0].data : "",
                o.Address.Main.Town = null != i.getElementsByTagName("Town")[0] && null != i.getElementsByTagName("Town")[0].childNodes[0] ? i.getElementsByTagName("Town")[0].childNodes[0].data : "",
                o.Address.Main.PostalCode = null != i.getElementsByTagName("PostalCode")[0] && null != i.getElementsByTagName("PostalCode")[0].childNodes[0] ? i.getElementsByTagName("PostalCode")[0].childNodes[0].data : "",
                o.Address.Main.Street = null != i.getElementsByTagName("Street")[0] && null != i.getElementsByTagName("Street")[0].childNodes[0] ? i.getElementsByTagName("Street")[0].childNodes[0].data : "",
                o.Notes = null != i.getElementsByTagName("Notes")[0] && null != i.getElementsByTagName("Notes")[0].childNodes[0] ? i.getElementsByTagName("Notes")[0].childNodes[0].data : "",
                o.Type = null != i.getElementsByTagName("Type")[0] && null != i.getElementsByTagName("Type")[0].childNodes[0] ? i.getElementsByTagName("Type")[0].childNodes[0].data : "",
                o.Contact = null != i.getElementsByTagName("Contact")[0] && null != i.getElementsByTagName("Contact")[0].childNodes[0] ? i.getElementsByTagName("Contact")[0].childNodes[0].data : "",
                o.Company = null != i.getElementsByTagName("Company")[0] && null != i.getElementsByTagName("Company")[0].childNodes[0] ? i.getElementsByTagName("Company")[0].childNodes[0].data : "",
                o.Web = null != i.getElementsByTagName("Web")[0] && null != i.getElementsByTagName("Web")[0].childNodes[0] ? i.getElementsByTagName("Web")[0].childNodes[0].data : "",
                o.Email = null != i.getElementsByTagName("Email")[0] && null != i.getElementsByTagName("Email")[0].childNodes[0] ? i.getElementsByTagName("Email")[0].childNodes[0].data : "",
                a.Values = o;
            t.contacts[null != i.getElementsByTagName("ID")[0].childNodes[0] ? i.getElementsByTagName("ID")[0].childNodes[0].data : ""] = a.Values
        }
    } else {
        a = new addressContact;
        var i = e.getElementsByTagName("Entities")[0].getElementsByTagName("Entity")[0];
        if ("" != i && null != i) {
            var o = a.Values;
            t.Id = null != i.getElementsByTagName("ID")[0].childNodes[0] ? i.getElementsByTagName("ID")[0].childNodes[0].data : "",
            o.Id = null != i.getElementsByTagName("ID")[0].childNodes[0] ? i.getElementsByTagName("ID")[0].childNodes[0].data : "",
            o.Telephone.Phone1 = null != i.getElementsByTagName("Phone1")[0].childNodes[0] ? i.getElementsByTagName("Phone1")[0].childNodes[0].data : "",
            o.Telephone.Phone2 = null != i.getElementsByTagName("Phone2")[0].childNodes[0] ? i.getElementsByTagName("Phone2")[0].childNodes[0].data : "",
            o.Telephone.Phone3 = null != i.getElementsByTagName("Phone3")[0].childNodes[0] ? i.getElementsByTagName("Phone3")[0].childNodes[0].data : "",
            o.Address.Main.Town = null != i.getElementsByTagName("Town")[0] && null != i.getElementsByTagName("Town")[0].childNodes[0] ? i.getElementsByTagName("Town")[0].childNodes[0].data : "",
            o.Address.Main.PostalCode = null != i.getElementsByTagName("PostalCode")[0] && null != i.getElementsByTagName("PostalCode")[0].childNodes[0] ? i.getElementsByTagName("PostalCode")[0].childNodes[0].data : "",
            o.Address.Main.PostalCode = null != i.getElementsByTagName("Street")[0] && null != i.getElementsByTagName("Street")[0].childNodes[0] ? i.getElementsByTagName("Street")[0].childNodes[0].data : "",
            o.Notes = null != i.getElementsByTagName("Notes")[0] && null != i.getElementsByTagName("Notes")[0].childNodes[0] ? i.getElementsByTagName("Notes")[0].childNodes[0].data : "",
            o.Type = null != i.getElementsByTagName("Type")[0] ? i.getElementsByTagName("Type")[0].childNodes[0].data : "",
            o.Contact = null != i.getElementsByTagName("Contact")[0] ? i.getElementsByTagName("Contact")[0].childNodes[0].data : "",
            o.Company = null != i.getElementsByTagName("Company")[0] && null != i.getElementsByTagName("Company")[0].childNodes[0] ? i.getElementsByTagName("Company")[0].childNodes[0].data : "",
            o.Web = null != i.getElementsByTagName("Web")[0] && null != i.getElementsByTagName("Web")[0].childNodes[0] ? i.getElementsByTagName("Web")[0].childNodes[0].data : "",
            o.Email = null != i.getElementsByTagName("Email")[0] && null != i.getElementsByTagName("Email")[0].childNodes[0] ? i.getElementsByTagName("Email")[0].childNodes[0].data : "",
            a.Values = o
        }
        t.Values = a.Values
    }
    return t
}
function updateHandler(e) {
    switch (XMLGetData(e, "T", "EntityName")) {
    case "DEVICE":
        return deviceUpdate(xmlPacket);
    case "USER":
        return userUpdate(xmlPacket);
    case "CONNECTION":
        return callUpdate(xmlPacket);
    case "SESSION":
        break;
    case "MEETING":
        return meetingUpdate(xmlPacket);
    case "CONNECTIONHISTORY":
        return historyUpdate(xmlPacket);
    case "LOCATION":
        return locationUpdate(xmlPacket);
    case "CHAT":
        return getChatMonitor(xmlPacket)
    }
    return ""
}
function checkElement(e, t) {
    return !!e.getElementsByTagName(t)[0]
}
function messageHandler(e) {
    if ("<Packet><Event>Ping</Event></Packet>" != e)
        if (xmlParser = new XMLParser,
        xmlResponse = xmlParser.parseFromString(e, "text/xml"),
        xmlPacket = xmlResponse.getElementsByTagName("Packet")[0],
        reqObj = xmlPacket.getElementsByTagName("RequestId"),
        typObj = xmlPacket.attributes.getNamedItem("Type"),
        null == typObj && (typObj = xmlPacket.attributes.getNamedItem("type")),
        cmdObj = xmlPacket.attributes.getNamedItem("Command"),
        null == cmdObj && (cmdObj = xmlPacket.attributes.getNamedItem("command")),
        reqObj.length > 0) {
            var t = reqObj[0].childNodes[0].data.split("_")[0]
              , l = reqObj[0].childNodes[0].data.split("_")[1];
            switch (l) {
            case "Get":
                switch (t) {
                case "DEVICE":
                    E = xmlPacket.getElementsByTagName("Entities")[0];
                    for (var n = 0; n < E.childNodes.length; n++)
                        onReceive(deviceUpdate(E.childNodes[n]));
                    break;
                case "USER":
                    E = xmlPacket.getElementsByTagName("Entities")[0];
                    for (n = 0; n < E.childNodes.length; n++)
                        onReceive(userUpdate(E.childNodes[n]));
                    break;
                case "LOCATION":
                    onReceive(locationUpdate(xmlPacket));
                    break;
                default:
                    null == packetUnhandled && (packetUnhandled = function(e) {}
                    ),
                    this.packetUnhandled(xmlPacket)
                }
                break;
            case "Set":
            case "Create":
            case "Delete":
                null == this.packetUnhandled && (this.packetUnhandled = function(e) {}
                ),
                this.packetUnhandled(xmlPacket);
                break;
            case "Monitor":
                switch (t) {
                case "UC-THREADS":
                    console.log(xmlPacket);
                    var a = {
                        threadIds: {}
                    };
                    if (0 == (E = xmlPacket.getElementsByTagName("Entities")[0]).childElementCount)
                        onReceive(new connHistory);
                    else
                        for (n = 0; n < E.childElementCount; n++)
                            console.log(XMLGetData(E.childNodes[n], "T", "ThreadChatId")),
                            a.threadIds[XMLGetData(E.childNodes[n], "T", "ThreadChatId")] = getThreadMonitor(E.childNodes[n]);
                    a.RequestId = "ThreadMonitor",
                    a.Type = ucObjectType.Chat,
                    onReceive(a);
                    break;
                case "UC-CHATS":
                    var i = getChatMonitor(xmlPacket);
                    onReceive(i)
                }
            default:
                if (result = xmlPacket.getElementsByTagName("Result")[0].childNodes[0].data,
                "FAILURE" == result) {
                    var o = new error;
                    return o.Code = xmlPacket.getElementsByTagName("ErrorCode")[0].childNodes[0].data,
                    o.Code = null != xmlPacket.getElementsByTagName("ErrorCode")[0] ? xmlPacket.getElementsByTagName("ErrorCode")[0].childNodes[0].data : "",
                    o.Description = null != xmlPacket.getElementsByTagName("Description")[0] ? " - " + xmlPacket.getElementsByTagName("Description")[0].childNodes[0].data : "",
                    o.Source = t,
                    void onReceive(o)
                }
                switch (t) {
                case "RequestSessionId":
                    sessionId = xmlPacket.getElementsByTagName("SessionId")[0].childNodes[0].data,
                    onReceive(new connectedObj);
                    break;
                case "RequestResource":
                    serverVersion = xmlPacket.getElementsByTagName("Version")[0].childNodes[0].data,
                    this.m_ServerVersion = serverVersion;
                    var s = new resourcesObj;
                    s.Version = xmlPacket.getElementsByTagName("Version")[0].childNodes[0].data,
                    s.Count = xmlPacket.getElementsByTagName("Count")[0].childNodes[0].data,
                    onReceive(s);
                    break;
                case "Login":
                    (r = new user).Type = ucObjectType.Login,
                    r.Id = xmlPacket.getElementsByTagName("UserId")[0].childNodes[0].data,
                    r.ShortName = xmlPacket.getElementsByTagName("UserShortName")[0].childNodes[0].data,
                    r.Name = xmlPacket.getElementsByTagName("UserName")[0].childNodes[0].data,
                    r.PolicyId = xmlPacket.getElementsByTagName("PolicyId")[0].childNodes[0].data,
                    r.UserSrc = "LoginUser",
                    onReceive(r);
                    break;
                case "LoginUserRequest":
                    var r = new user;
                    E = xmlPacket.getElementsByTagName("Entities")[0];
                    for (n = 0; n < E.childElementCount; n++)
                        r = singleUser(E.childNodes[n]);
                    r.Type = ucObjectType.Login,
                    r.RequestId = xmlPacket.getElementsByTagName("RequestId")[0].childNodes[0].data,
                    onReceive(r);
                    break;
                case "MessageUser":
                    var d = new user;
                    E = xmlPacket.getElementsByTagName("Entities")[0];
                    for (n = 0; n < E.childElementCount; n++)
                        d = singleUser(E.childNodes[n]);
                    d.Type = ucObjectType.PhotoUser,
                    d.RequestId = xmlPacket.getElementsByTagName("RequestId")[0].childNodes[0].data,
                    onReceive(d);
                    break;
                case "GetHistory":
                    if (0 == (E = xmlPacket.getElementsByTagName("Entities")[0]).childElementCount)
                        onReceive(new connHistory);
                    else
                        for (n = 0; n < E.childElementCount; n++)
                            onReceive(historyUpdate(E.childNodes[n]));
                    break;
                case "GetChatHistory":
                    if (0 == (E = xmlPacket.getElementsByTagName("Entities")[0]).childElementCount)
                        onReceive(new chat);
                    else
                        for (n = 0; n < E.childElementCount; n++)
                            onReceive(chatHistory(E.childNodes[n]));
                    break;
                case "UpdateChatHistory":
                    if (0 == (E = xmlPacket.getElementsByTagName("Entities")[0]).childElementCount)
                        onReceive(new chat);
                    else
                        for (n = 0; n < E.childElementCount; n++) {
                            var u = chatHistory(E.childNodes[n]);
                            u.RequestId = "UpdateChatHistory",
                            onReceive(u)
                        }
                    break;
                case "GetThread":
                    if (0 == (E = xmlPacket.getElementsByTagName("Entities")[0]).childElementCount)
                        onReceive(new chatData);
                    else
                        for (n = 0; n < E.childElementCount; n++)
                            onReceive(allThread(E.childNodes[n]));
                    break;
                case "GetThreadMessages":
                    if (0 == (E = xmlPacket.getElementsByTagName("Entities")[0]).childElementCount)
                        onReceive(new chatData);
                    else
                        for (n = 0; n < E.childElementCount; n++)
                            onReceive(threadMessages(E.childNodes[n]));
                    break;
                case "GetSingleUser":
                    E = xmlPacket.getElementsByTagName("Entities")[0];
                    for (n = 0; n < E.childElementCount; n++)
                        onReceive(singleUser(E.childNodes[n]));
                    break;
                case "GetCall":
                    var c = new call;
                    E = xmlPacket.getElementsByTagName("Call")[0],
                    c.Type = ucObjectType.CallData,
                    c.Id = null != E.getElementsByTagName("ID")[0].childNodes[0] ? E.getElementsByTagName("ID")[0].childNodes[0].data : "",
                    c.DurationTotal = null != E.getElementsByTagName("DURATIONRINGING")[0].childNodes[0] ? E.getElementsByTagName("DURATIONTOTAL")[0].childNodes[0].data : "",
                    c.DurationRinging = null != E.getElementsByTagName("DURATIONRINGING")[0].childNodes[0] ? E.getElementsByTagName("DURATIONRINGING")[0].childNodes[0].data : "",
                    c.DurationHeld = null != E.getElementsByTagName("DURATIONHELD")[0].childNodes[0] ? E.getElementsByTagName("DURATIONHELD")[0].childNodes[0].data : "",
                    c.DurationConnected = null != E.getElementsByTagName("DURATIONCONNECTED")[0].childNodes[0] ? E.getElementsByTagName("DURATIONCONNECTED")[0].childNodes[0].data : "",
                    c.DurationOther = null != E.getElementsByTagName("DURATIONOTHER")[0].childNodes[0] ? E.getElementsByTagName("DURATIONOTHER")[0].childNodes[0].data : "",
                    c.Trunk = null != E.getElementsByTagName("TRUNK")[0].childNodes[0] ? E.getElementsByTagName("TRUNK")[0].childNodes[0].data : "";
                    var m = E.getElementsByTagName("Connections")[0]
                      , T = {};
                    for (n = 0; n < m.childElementCount; n++) {
                        var h = m.getElementsByTagName("Entity")[n];
                        T[n] = new connection,
                        T[n].Id = null != h.getElementsByTagName("ID")[0].childNodes[0] ? h.getElementsByTagName("ID")[0].childNodes[0].data : "",
                        T[n].Start = null != h.getElementsByTagName("START")[0].childNodes[0] ? h.getElementsByTagName("START")[0].childNodes[0].data : "",
                        T[n].DurationTotal = null != h.getElementsByTagName("DURATIONTOTAL")[0].childNodes[0] ? h.getElementsByTagName("DURATIONTOTAL")[0].childNodes[0].data : "",
                        T[n].CallHistoryId = null != h.getElementsByTagName("CALLHISTORYID")[0].childNodes[0] ? h.getElementsByTagName("CALLHISTORYID")[0].childNodes[0].data : "",
                        T[n].Direction = null != h.getElementsByTagName("DIRECTION")[0].childNodes[0] ? h.getElementsByTagName("DIRECTION")[0].childNodes[0].data : "";
                        var C = h.getElementsByTagName("CONTACT")[0];
                        T[n].Contact.Id = null != C.getElementsByTagName("ID")[0].childNodes[0] ? C.getElementsByTagName("ID")[0].childNodes[0].data : "",
                        T[n].Contact.Tel = null != C.getElementsByTagName("TEL")[0].childNodes[0] ? C.getElementsByTagName("TEL")[0].childNodes[0].data : "",
                        T[n].Contact.Name = null != C.getElementsByTagName("NAME")[0].childNodes[0] ? C.getElementsByTagName("NAME")[0].childNodes[0].data : ""
                    }
                    c.Connections = T,
                    onReceive(c);
                    break;
                case "AddressBookSearch":
                    null != xmlPacket.getElementsByTagName("Entities")[0].getElementsByTagName("Entity")[0] ? onReceive(addressContactSer(xmlPacket)) : onReceive({
                        Type: ucObjectType.Contact,
                        Error: "No results",
                        RequestId: null != xmlPacket.getElementsByTagName("RequestId")[0].childNodes[0] ? xmlPacket.getElementsByTagName("RequestId")[0].childNodes[0].data : ""
                    });
                    break;
                case "CallSearch":
                case "ContactUpdateSearch":
                    console.log(xmlPacket);
                    break;
                case "GetContact":
                    null != xmlPacket.getElementsByTagName("Entities")[0].getElementsByTagName("Entity")[0] && onReceive(addressContactSer(xmlPacket));
                    break;
                case "SetMeeting":
                    this.monitorMeeting(l);
                    break;
                case "MonitorMeeting":
                case "GetLocation":
                case "HoldRequest":
                    break;
                default:
                    packetUnhandled(xmlPacket)
                }
            }
        } else {
            if (null != typObj)
                switch (typObj.value) {
                case "Command":
                    onReceive(updateHandler(xmlPacket));
                    break;
                case "Event":
                    var E = xmlPacket.getElementsByTagName("Values")[0];
                    switch (xmlPacket.getElementsByTagName("Event")[0].childNodes[0].data.toUpperCase()) {
                    case "INITIAL":
                    case "UPDATE":
                    case "ADD":
                    case "REMOVE":
                        onReceive(updateHandler(xmlPacket));
                        break;
                    case "ERROR":
                        onError(xmlPacket.getElementsByTagName("Message")[0].childNodes[0].data);
                        break;
                    default:
                        onError(xmlPacket.getElementsByTagName("Event")[0].childNodes[0].data + " - Unknown Event")
                    }
                    break;
                default:
                    onError(xmlPacket.getElementsByTagName("Event")[0].childNodes[0].data + " - Unknown Type")
                }
            if (null != cmdObj)
                switch (cmdObj.value) {
                case "Monitor":
                case "Feature":
                    break;
                case "GetId":
                    sessionId = xmlPacket.getElementsByTagName("SessionId")[0].childNodes[0].data,
                    dbName = xmlPacket.getElementsByTagName("DbName")[0].childNodes[0].data,
                    result = xmlPacket.getElementsByTagName("Result")[0].childNodes[0].data;
                    break;
                case "Get":
                    E = xmlPacket.getElementsByTagName("Entities")[0];
                    for (n = 0; n < E.childElementCount; n++)
                        onReceive(historyUpdate(E.childNodes[n]));
                    break;
                case "MakeCall":
                case "Hangup":
                    if (result = xmlPacket.getElementsByTagName("Result")[0].childNodes[0].data,
                    "SUCCESS" == result)
                        break;
                    break;
                default:
                    onError(xmlPacket.getElementsByTagName("Command")[0].childNodes[0].data + " - Unknown Command")
                }
        }
    else
        this.Ping()
}
XMLGetData = function(e, t, l, n) {
    if (void 0 !== l && (e = XMLReplaceTag(e, l)),
    void 0 === n) {
        if (e.getElementsByTagName(l)[0] && e.getElementsByTagName(l)[0].childNodes.length > 0)
            return "T" == t ? e.getElementsByTagName(l)[0].childNodes[0].data : e.getElementsByTagName(l)[0]
    } else if ((e = XMLReplaceTag(e, n)).getElementsByTagName(l)[0] && e.getElementsByTagName(l)[0].getElementsByTagName(n)[0] && e.getElementsByTagName(l)[0].getElementsByTagName(n)[0].childNodes.length > 0)
        return "T" == t ? e.getElementsByTagName(l)[0].getElementsByTagName(n)[0].childNodes[0].data : e.getElementsByTagName(l)[0].getElementsByTagName(n)[0];
    return ""
}
,
this.ucClient = function() {
    this.Session = new _session
}
,
ClientSocketSession = function(e, t, l, n) {
    Connection = {
        Send: function(e) {
            this.socket.send(e)
        },
        Connect: function(e, t, l) {
            this.socket = new SocketFactory(e,!1),
            void 0 !== this.socket ? this.InitSocketHandlers() : onError("Socket err")
        },
        Disconnect: function() {
            onError("Socket Disconnect")
        },
        ConnectSecure: function(e, t, l) {
            this.socket = new SocketFactory(e,!0),
            "undefined" != typeof socket && this.InitSocketHandlers()
        },
        ConnectAuto: function(e, t, l) {
            this.socket = new SocketFactory(e,!0),
            this.socket.onopen = this.InitSocketHandlers,
            this.socket.onerror = function(t) {
                var l = this.socket.onopen;
                this.socket = new SocketFactory(e,!1),
                this.socket.onopen = l,
                this.socket.onerror = function(e) {}
            }
        },
        InitSocketHandlers: function() {
            this.socket.onmessage = function(e) {
                messageHandler(e)
            }
            ,
            this.timeout = 0,
            this.socket.onopen = function(e) {
                this.timeout = 0,
                Send(XMLElementBuilder("Packet", null, null, 0, "<RequestId>RequestResource</RequestId><Command>RequestResource</Command><Computer>" + l + "</Computer><Resource>SDK</Resource><Version/>")),
                onOpen(e)
            }
            ,
            this.socket.onclose = function(e) {
                this.timeout = 0,
                onClose(e)
            }
            ,
            this.socket.onerror = function(e) {
                onError(e)
            }
        },
        Close: function() {
            void 0 !== this.socket && (this.socket.close(),
            onClose())
        }
    },
    void 0 !== n && 1 == n ? Connection.ConnectSecure(e, t) : Connection.Connect(e, t),
    this.Close = function() {
        Connection.Close()
    }
    ,
    this.Send = function(e) {
        Connection.Send(e)
    }
    ,
    void 0 !== typeof window && ("undefined" == typeof packetUnhandled && (packetUnhandled = function(e) {}
    ),
    null != window.onError && (onError,
    window.onError),
    null != window.onClose && (onClose,
    window.onClose),
    null != window.onDisconnect && (onDisconnect,
    window.onDisconnect),
    null != window.onOpen && (onOpen,
    window.onOpen),
    null != window.onReceive && (onReceive,
    window.onReceive),
    null != window.packetUnhandled && (packetUnhandled,
    window.packetUnhandled))
}
;
