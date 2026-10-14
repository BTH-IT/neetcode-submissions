
class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const groups: string[][] = [];
        const hash: Record<string, number> = {};
        const abc = "abcdefghijklmnopqrstuvwxyz";

        for (const str of strs) {
            const count: Record<string, number> = {};

            // Đếm từng ký tự
            for (const char of str) {
                count[char] = (count[char] ?? 0) + 1;
            }

            // Tạo key chung
            let key = "";
            for (const char of abc) {
                key += "#" + (count[char] ?? 0);
            }

            // Tạo nhóm nếu chưa tồn tại
            if (hash[key] === undefined) {
                hash[key] = groups.length;
                groups[groups.length] = [];
            }

            // Thêm chuỗi vào nhóm
            const group = groups[hash[key]];
            group[group.length] = str;
        }

        return groups;
    }
}
