import { Ship } from "../../src/js/Ship.js"

describe("Ship", () => {
    it("Should apply the length of the instance of Ship",() => {
        const ship = new Ship(8)
        expect(ship.length).toBe(8)
    })
})