function cutTheSticks(arr: number[]): number[] {
    // Write your code here
    function ha(arr: number[], cutSticks?: number[]): number[] {
        const cs: number[] = cutSticks ? cutSticks : [];
        const newArr: number[] = [];
        arr.sort((a, b) => a - b);
        const m = arr[0];
        if (arr.length > 0) {
            cs.push(arr.length);
            for (let i = 0; i < arr.length; i++) {
                const x = arr[i] - m;
                if (x > 0) {
                    newArr.push(x);
                };
            }
            return ha(newArr, cs)
        } else {
            return cs;
        }
    }
    return ha(arr);
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))