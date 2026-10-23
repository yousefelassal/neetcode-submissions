class MyHashSet {
    constructor() {}

    private hashMap = {};

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        this.hashMap[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        delete this.hashMap[key];
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        return !!this.hashMap[key];
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
