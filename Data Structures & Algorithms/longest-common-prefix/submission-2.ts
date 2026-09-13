class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const arrStrs = strs.map((s) => s.split(''));
        const prefixes = [];

        for (let i = 0; i < arrStrs[0].length; i++) {
            const charAtI = arrStrs[0][i];
            const every = arrStrs.every((arr) => arr[i] === charAtI)
            if (every) {
                prefixes.push(charAtI)
            } else {
                return prefixes.join('');
            }
        }

        return prefixes.join('');
    }
}
