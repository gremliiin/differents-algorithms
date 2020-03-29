let arr = [
    1,
    3,
    5,
    7,
    9,
];

let num = +prompt("Enter number that you'll wanna find", 0);



let binarySearching = function (list, item) {
    let low = 0;
    let hight = list.length - 1;

    while (low <= hight) {
        let mid = Math.floor((Math.floor(low) + hight) / 2);
        let guess = list[mid];

        if (guess == item) {
            return mid;
        } else if (guess > item) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }  
    }

    return undefined;

};


  if (binarySearching(arr, num) === undefined) {
    $("#output").text("your number is undefined");
} else {
    $("#output").text("This number is located of array under number: " + binarySearching(arr, num));
} 
