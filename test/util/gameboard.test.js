import { Gameboard } from "../../src/js/board/Gameboard.js";
import { Ship } from "../../src/js/entities/Ship.js";

describe("Gameboard", () => {
    it("Should place ships on specific coordinates", () => {
        const gameboard = new Gameboard()
        gameboard.place(33, new Ship(1))

        expect(gameboard.board[33]).toEqual(new Ship(1))
    })

    it("Should receive an attack with ship then hit it", () => {
        const gameboard = new Gameboard()
        gameboard.place(33, new Ship(2))
        gameboard.receiveAttack(33)
        expect(gameboard.board[33].numberOfHits).toBe(1)
    })

    it("Should receive an attack without ship then record the missed shot", () => {
        const gameboard = new Gameboard()
        gameboard.place(33, new Ship(1))
        gameboard.receiveAttack(32)
        expect(gameboard.board[32].isHit).toBe(true)
    })

    it("Should return true if all ships is sunk", () => {
        const gameboard = new Gameboard()
        gameboard.place(33, new Ship(2))
        gameboard.receiveAttack(33)
        gameboard.receiveAttack(33)
        expect(gameboard.isAllShipSunk()).toBe(true)

    })
    it ("Should return false if all ship isn't sunk", () => {
        const gameboard = new Gameboard()
        gameboard.place(33, new Ship(2))
        gameboard.receiveAttack(33)
        expect(gameboard.isAllShipSunk()).toBe(false)
    })
})