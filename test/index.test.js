"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('addNum', () => {
    it('returns arguments added together', () => {
        expect((0, src_1.addNum)(1, 2)).toBe(3);
    });
});
