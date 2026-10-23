class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // go over each element in the array
        // sort the incoming string
        // create a map of the sorted characters
        // so if another word contains the exact characters in any different order we can push the element to the map of chars array

        // key is the word
        // value is the anagrams with the same chars
        const map = new Map<string, string[]>();

        for (const s of strs) {
            const sorted = s.split('').sort().join('');
            if (map.has(sorted)) {
                map.get(sorted).push(s);
            } else {
                map.set(sorted, [s]);
            }
        }

        // loop over the map entries and return them
        return [...map.values()];
    }
}
