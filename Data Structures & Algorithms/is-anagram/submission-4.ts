
class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const hash: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            hash[s[i]] = (hash[s[i]] ?? 0) + 1;
            hash[t[i]] = (hash[t[i]] ?? 0) - 1;
        }

        for (const count of Object.values(hash)) {
            if (count !== 0) return false;
        }

        return true;
    }
}
