import { placeShipsRandom } from "../../src/js/controllers/random-ship.js";
import { Human } from "../../src/js/model/Human.js";

describe("Ship Random Placement", () => {
    it ("Should return same number of placed ships", () =>{
        const human = new Human()
        const ships =  [4, 4, 3, 3, 2, 4, 1, 1]
        const totalNumberOfShips = ships.reduce((prev, curr) =>  prev + curr, 0)
        placeShipsRandom(human.gameboard,  ships)
        
        const flattenedBoard = human.gameboard.board.flat()
        const allShips = flattenedBoard.filter((ship) => ship.length)
        expect(totalNumberOfShips).toBe(allShips.length)

    })
})