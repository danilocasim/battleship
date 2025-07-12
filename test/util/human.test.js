import { Human } from "../../src/js/entities/Human";
import { Gameboard } from "../../src/js/board/Gameboard";

describe("Human", () => {
    it("Should have its own gameboard", () => {
        const humanPlayer = new Human()
        expect(humanPlayer.gameboard instanceof Gameboard).toBe(true)
    })
})