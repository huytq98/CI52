function findDiff (a1, a2) {

    let a = [], diff = [];

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (let h in a) {
        diff.push(h);
    }

    return diff;
}
let arr1 = prompt('Nhập vào các phần tử: ').split(',');
let arr2 = prompt('Nhập vào các phần tử: ').split(',');
findDiff(arr1, arr2)
alert(`Đây là output: [${findDiff(arr1,arr2)}]`);
