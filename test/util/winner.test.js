import { getWinner } from "../../src/js/controllers/winner"

describe("Announce the Winner", () => {
    it("Should announce the winner if the winner is human", () =>{
        expect(getWinner("human")).toBe("You Win!")
    })
    it ("Should announce the winner if the winner is computer", () => {
        expect(getWinner("computer")).toBe("Computer's Win")
    })
})