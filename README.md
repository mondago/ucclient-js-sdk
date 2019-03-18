# UCCLIENT - SDK

UCCLIENT - SDK is a client side SDK to access the Mondago family of UC desktop products.

## Features

-   **Monitor login**: check for the start up and login of your desktop client, telling you when you can start using the api
-   **Monitor calls**: see your call events coming in, initial event and updates to your calls.
-   **Control handset**: use the api to easily control your active calls and make new calls

## Installing

Using npm:

```
$ npm install ucsdk-api
```

Using cdn:

```html
<script src="https://url-goes-here.org"></script>
```

## Example

Simple connect and show data

```javascript
import UCSession from "ucsdk-api"

const ucSession = new UCSession()

window.addEventListener("ucLogin", loginEvent => console.log(loginEvent))
window.addEventListener("ucCall", callEvent => console.log(callEvent))

ucSession.connect()
```

## UCCLIENT - SDK Methods

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
