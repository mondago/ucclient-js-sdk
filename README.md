# UCCLIENT - SDK

UCCLIENT - SDK is a client side SDK to access the Mondago family of UC desktop products.

## Dependancies

Download your software depenancies [here](https://www.gointegrator.co.uk/)

## Features

-   **Monitor login**: check for the start up and login of your desktop client, telling you when you can start using the api
-   **Monitor calls**: see your call events coming in, initial event and updates to your calls.
-   **Control handset**: use the api to easily control your active calls and make new calls

## Installing

Using npm:

```
$ npm install ucsdk-api
```

Using our released zip (available [here](https://github.com/mondago/ucclient-js-sdk/releases/))

```html
<script src="./path/to/ucsdk.js"></script>
```

With the zip, you will have to unpack into your project

## Importing

Using npm:

```javascript
import UCSession from "ucsdk-api"
```

Using released zip:

```javascript
const UCSession = window.ucsdk.default
```

## Example

```javascript
const ucSession = new UCSession()

ucSession.connect()
```

Events are communicated using event listeners. To receive an events add event listeners for `"ucLogin"` and `"ucCall"`, the objects shown later are stored in the detail property of the event.

Show data:

```javascript
window.addEventListener("ucLogin", loginEvent => console.log(loginEvent.detail))
window.addEventListener("ucCall", callEvent => console.log(callEvent.detail))
```

## Methods

**ucSession.connect()**

**ucSession.callController.makeCall(destination)**

**ucSession.callController.hangupCall(id)**

**ucSession.callController.holdCall(id)**

**ucSession.callController.unHoldCall(id)**

**ucSession.callController.answerCall(id)**

### Examples

```javascript
ucSession.callController.makeCall("0800123456")
```

```javascript
ucSession.callController.holdCall("call_id_here:0123456789")
```

## Objects

Shown below are the objects you may receive and handle

### Call

Call object, generated on any call event

```javascript
{
    "Type": "Call",

    // `Id` is important, will be used to control this call using the methods shown above
    "Id": "037d274e-64cb-406e-9531-09f205caf5a2",

    // `Event` can be UPDATE | REMOVE
    "Event": "UPDATE",

    // `State` can be "DIALBACK" | "DIALING" | "RINGING" | "CONNECTED" | "ENDED" | "HELD" | "CONFERENCED" | "DISCONNECTED"
    "State": "DIALING",

    "HostId": "",
    "Start": "2019/03/21 10:32:45",
    "DurationTotal": "1",
    "DurationRing": "",
    "DurationHeld": "",
    "DurationConnected": "",
    "DurationOther": "",
    "Caller": {
        "Id": "",
        "Tel": "1234",
        "DisplayTel": "1234",
        "Name": "John Smith",
        "DisplayName": "John Smith",
        "ForeignId": "",
        "DirectoryId": "",
        "Department": "Development"
    },
    "Called": {
        "Id": "321",
        "Tel": "0800500005",
        "DisplayTel": "(0800) 500 005",
        "Name": "United Kingdom",
        "DisplayName": "Freephone",
        "ForeignId": "",
        "DirectoryId": "",
        "Department": ""
    },
    "Connections": "",
    "Trunk": "",

    // `Direction` can either be I | O for inbound or outbound
    "Direction": "O",

    "External": "",
    "Missed": "1",
    "Category": "",
    "Custom1": "",
    "Custom2": ""
}
```

### Login

```javascript
{
   "Type":"Login",

   // The most important part of this object is the id, this may need to be sent in with some methods
   "Id":"#USERID",

   "ShortName":"#SHORTNAME",
   "Name":"#USERNAME",
   "PolicyId":"#POLICYID",
   "Devices":[],
   "Email":"",
   "RegisteredDevices":"",
   "CurrentTel":"",
   "Photo":"",
   "Department":"",
   "State":"",
   "DirectionState":"",
   "UserState":"",
   "AgentState":"",
   "ContactState":"",
   "DndState":"",
   "ForwardState":"",
   "MessageState":"",
   "Location":"",
   "AbsenceText":"",
   "UsePBXName":"",
   "ClassType":"",
   "EquipmentId":"",
   "Changes":"",
   "DDI":"",
   "AvailabilityUntil":"",
   "UserSrc":"LoginUser"
}
```
