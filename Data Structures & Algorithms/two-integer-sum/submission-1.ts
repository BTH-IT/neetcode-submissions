
class Solution {
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const j = map.get(target - nums[i]);

            if (j !== undefined) return [j, i];

            map.set(nums[i], i);
        }

        return [];
    }
}
