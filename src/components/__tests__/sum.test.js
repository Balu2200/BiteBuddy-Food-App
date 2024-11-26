import {sum} from "../sum";


test("Sum function should give sum of two numbers", () =>{

    const result = sum(3,4);

    expect(result).toBe(7);

});
