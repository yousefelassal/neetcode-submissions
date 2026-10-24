class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const colors = { red: 0, white: 0, blue: 0 }
        for (const n of nums) {
            if (n === 0) colors.red++;
            if (n === 1) colors.white++;
            if (n === 2) colors.blue++;
        }

        const colorsArray = [
            ...Array(colors.red).fill(0),
            ...Array(colors.white).fill(1),
            ...Array(colors.blue).fill(2),
        ]

        for (let i = 0; i < nums.length; i++) {
            nums[i] = colorsArray[i];
        }
    }
}
