import { addNum } from '../src';

describe('addNum', () => {
    it('returns arguments added together', () => {
        expect(addNum(1, 2)).toBe(3);
    });
});
