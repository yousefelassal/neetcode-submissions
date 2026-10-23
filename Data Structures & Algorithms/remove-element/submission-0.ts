class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        const filtered = nums.filter(s => s !==val);
        for (let i = 0; i < nums.length; i++) {
            nums[i] = filtered[i] ?? null
        }

        return filtered.length;
    }
}
