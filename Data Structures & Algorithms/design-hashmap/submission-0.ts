class MyHashMap {
    constructor() {}

    private hashMap = {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.hashMap[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        return this.hashMap[key] ?? -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        delete this.hashMap[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
