class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
      const sCountMap = new Map<string, number>();
      const tCountMap = new Map<string, number>();

      for (const i of s) {
        this.upsertMap(sCountMap, i);
      }

      for (const i of t) {
        this.upsertMap(tCountMap, i);
      }

      if (sCountMap.size !== tCountMap.size) return false;

      for (const [key, value] of sCountMap.entries()) {
        const t = tCountMap.get(key);
        if (!t || t !== value) return false;
      }

      return true;
    }

    private upsertMap(map: Map<string, number>, value: string) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1);
        } else {
            map.set(value, 1);
        }
    }
}
