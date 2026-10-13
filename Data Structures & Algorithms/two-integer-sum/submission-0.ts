
class Solution {
    twoSum(nums: number[], target: number): number[] {
        const hash: Record<number, number> = Object.create(null);

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (Object.hasOwn(hash, complement)) {
                return [hash[complement], i];
            }

            hash[nums[i]] = i;
        }

        return [];
    }
}
