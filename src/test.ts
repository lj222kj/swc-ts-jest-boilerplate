import { isNice } from './index';

describe('isNice', () => { 
    test('69', () => {
        expect(isNice(69)).toBeTruthy()
    });
    test('45', () => {
        expect(isNice(45)).toBeFalsy()
    });
})