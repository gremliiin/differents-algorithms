let arr = [];

let arrLength = +prompt("Choose the length of the array", 0);

for (let i = 0; i < arrLength; i++){
    let arrPush = +prompt("Enter the number", 0);
    arr.push(arrPush);
}

let quickSort = function(arr) {
    if (arr.length < 2){
        return arr;
    } else {
        let pivot = arr[0];
        let less = [];
        let lessArr = [];
        let greaterArr = [];
        let newArr = [];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] <= pivot){
                less.push(arr[i]);
            }
        }
        let greater = [];
        for (let i = 1; i < arr.length; i++){
            if (arr[i] > pivot){
                greater.push(arr[i]);
            }
        }
        lessArr = quickSort(less);
        greaterArr = quickSort(greater);
        lessArr.push(pivot);
        newArr = lessArr.concat(greaterArr);
        return newArr;
    }
};

if(arrLength <= 0){
    $("#output").text("Your array empty!!!");
} else {
    $("#output").text("Your array without sort: " + arr.join(" "));
    $("#outputTwo").text("Your array sorted: " + quickSort(arr).join(" "));
}
