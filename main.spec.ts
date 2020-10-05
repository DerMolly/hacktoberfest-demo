import {add, mul} from "./main";

it('test add', () => {
    expect(add(2,3)).toBe(5)
})

it('test mul', () => {
    expect(mul(2,3)).toBe(6)
})
