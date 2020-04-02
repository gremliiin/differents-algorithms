let arr = [];

let arrLength = +prompt("Choose the length of the array", 0);

for (let i = 0; i < arrLength; i++){
    let arrPush = +prompt("Enter the number", 0);
    arr.push(arrPush);
}

let findSmallest = function (arr){
    let smallest = arr[0];
    let smallestIndex = 0;
        for (let i = 1; i < arr.length; i++ ){
            if (arr[i] < smallest) {
                smallest = arr[i];
                smallestIndex = i;
            }
        }
    return smallestIndex;
};
console.log(findSmallest(arr));

let selectionSort = function(arr){
    let newArr = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++){
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1));
    }

    return newArr;
};

if(arrLength <= 0){
    $("#output").text("Your array empty!!!");
} else {
    $("#output").text("Your array without sort: " + arr.join(" "));
    $("#outputTwo").text("Your array sorted: " + selectionSort(arr).join(" "));
}


