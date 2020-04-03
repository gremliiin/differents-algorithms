let cache = {
    "https://www.facebook.com/":"facebook" ,
};
let enterUrl = prompt("Enter here your URL", "https://...");
let getDataFromServer = function (){
    let data = prompt("write down of data","unknown");
    return data;
};

let getPage = function (url){
    if (url in cache){
        return cache[url];
    } else {
        let data = getDataFromServer();
        cache[url] = data;
        return data;
    }
};

$("#output").text(getPage(enterUrl));
