import { Human } from "../../src/js/model/Human.js";
import { Gameboard } from "../../src/js/model/Gameboard";

describe("Human", () => {
    it("Should have its own gameboard", () => {
        const humanPlayer = new Human()
        expect(humanPlayer.gameboard instanceof Gameboard).toBe(true)
    })
})