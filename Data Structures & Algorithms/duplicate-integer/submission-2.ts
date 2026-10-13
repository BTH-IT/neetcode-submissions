
class Solution {
    hasDuplicate(nums: number[]): boolean {
        const hash: Record<number, boolean> = Object.create(null);

        for (const num of nums) {
            if (hash[num]) return true;
            hash[num] = true;
        }

        return false;
    }
}
