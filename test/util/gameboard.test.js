import { Gameboard } from "../../src/js/model/Gameboard.js";
import { Ship } from "../../src/js/model/Ship.js";

describe("Gameboard", () => {
     it ("Should place the ship horizontally and have the instance of the ship", ()=> {
        const gameboard = new Gameboard()
        gameboard.place([0,7], new Ship(3), "horizontal")
        expect(gameboard.board[0][7] instanceof Ship).toBe(true)
        expect(gameboard.board[0][8] instanceof Ship).toBe(true)
        expect(gameboard.board[0][9] instanceof Ship).toBe(true)

    })

    it("Should place the ship vertically and have the instance of the ship", () => {
        const gameboard = new Gameboard()
        gameboard.place([0,7], new Ship(3), "vertical")
        expect(gameboard.board[0][7] instanceof Ship).toBe(true)
        expect(gameboard.board[1][7] instanceof Ship).toBe(true)
        expect(gameboard.board[2][7] instanceof Ship).toBe(true)
    })

    it("Should receive an attack with ship then hit it", () => {
        const gameboard = new Gameboard()
        gameboard.place([1,0], new Ship(2), "horizontal")
        gameboard.receiveAttack([1,0])
        expect(gameboard.board[1][0].numberOfHits).toBe(1)
        expect(gameboard.board[1][1].numberOfHits).toBe(1)

    })

    it("Should receive an attack without ship then record the missed shot", () => {
        const gameboard = new Gameboard()
        gameboard.place([2,0], new Ship(1), "vertical")
        gameboard.receiveAttack([1,0])
        expect(gameboard.board[1][0].isHit).toBe(true)
    })

    it("Should return true if all ships is sunk", () => {
        const gameboard = new Gameboard()
        gameboard.place([2,0], new Ship(2), "horizontal")
        gameboard.receiveAttack([2,0])
        gameboard.receiveAttack([2,1])
        expect(gameboard.isAllShipSunk()).toBe(true)

    })
    it ("Should return false if all ship isn't sunk", () => {
        const gameboard = new Gameboard()
        gameboard.place([1,0], new Ship(2), "vertical")
        gameboard.receiveAttack([1,1])
        expect(gameboard.isAllShipSunk()).toBe(false)
    })

    it("Should return false when placing if ship was exists horizontally", () => {
        const gameboard = new Gameboard()
        gameboard.place([1,0], new Ship(4), "horizontal")

        expect(gameboard.place([1,2], new Ship(4), "horizontal")).toBe(false)
    })

    it("Should return false when placing if ship was exists vertically", () => {
        const gameboard = new Gameboard()
        gameboard.place([1,0], new Ship(4), "vertical")

        expect(gameboard.place([2,0], new Ship(4), "vertical")).toBe(false)
    })

  
})