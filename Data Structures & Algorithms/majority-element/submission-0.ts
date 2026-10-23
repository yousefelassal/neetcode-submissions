class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // key is the number
        // value is the occurences
        const map = new Map<number, number>();
        const largest = { number: nums[0], occurences: 1 };

        for (const n of nums) {
            if (map.has(n)) {
                const occ = map.get(n) + 1;
                map.set(n, occ);

                if (occ > largest.occurences) {
                    largest.number = n;
                    largest.occurences = occ;
                }
            } else {
                map.set(n, 1)
            }
        }

        return largest.number;
    }
}
