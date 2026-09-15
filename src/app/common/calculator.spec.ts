import {describe, it, expect, vi} from 'vitest';
import {calculator} from "./calculator";


describe("Calculator Test", () => {

    it("should add two numbers correctly", () => {

        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    })

    it("should how mocking works", () =>{
        const spy = vi.spyOn(calculator, "add").mockReturnValue(5);
        const result = calculator.add(2, 3);

        expect(result).toBe(5); //se o resultado foi exatamente 5
        expect(spy).toHaveBeenCalledOnce(); //se o método foi chamado exatamente 1 vez
        expect(spy).toHaveBeenCalledWith(2, 3); //se os argumentos foram exatamente 2 e 3
    })

//PURE MOCK
    it.only("shows how pure mocking works", () =>{
        const addMock = vi.fn().mockReturnValue(10);
        const result = addMock(5, 5);
        expect(result).toBe(10);
        expect(addMock).toHaveBeenCalledOnce();
        expect(addMock).toHaveBeenCalledWith(5, 5);
    })

});