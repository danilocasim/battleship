import { Ship } from "../../src/js/model/Ship.js"

describe("Ship", () => {
    it("Should apply the length of the instance of Ship",() => {
        const ship = new Ship(8)
        expect(ship.length).toBe(8)
    })

    it("Should increase the number of hits by calling hit", () => {
        const ship = new Ship(4)
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.numberOfHits).toBe(3)
    })

    it("Should check if the ship sunk based on the number of hits", () => {
        const ship = new Ship(3)
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })
})