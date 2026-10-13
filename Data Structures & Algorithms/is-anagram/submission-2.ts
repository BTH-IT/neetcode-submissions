
class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const count = new Int32Array(26);

        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        for (const value of count) {
            if (value !== 0) return false;
        }

        return true;
    }
}
