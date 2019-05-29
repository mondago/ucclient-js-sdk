import { expect } from "chai"
import "mocha"
import UCSession from "../src"
import Calls from "../src/Calls"

describe("initialise session", () => {
    const ucSession = new UCSession()
    it("should create a new call controller", () => {
        expect(ucSession.callController).to.deep.equal(Calls)
    })
})
