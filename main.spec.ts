import {add, mul} from "./main";

it('test add', () => {
    expect(add(2,3)).toEqual(5)
})

it('test mul', () => {
    expect(mul(2,3)).toEqual(6)
})
