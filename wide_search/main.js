let deque = function (arr) {

    return arr.concat([]);

};

let graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

let enterName = prompt("Enter name from graph","bob");

let personIsSeller = function (name) {
    return name[name.length - 1] == "m";
};

let search = function (name) {
    if (graph[name] === undefined){
        $("#output").append(enterName + " isn't correcting name" + "<br>");
        return false;
    }
    let searchQueue = deque(graph[name]);
    let searched = {};
    while (searchQueue[0] != null) {
        let person = searchQueue.shift();
        if (person in searched == false) {
            if (personIsSeller(person)) {
                $("#output").text(person + " is a mango seller");
                return true;
            } else {
                searchQueue = searchQueue.concat(deque(graph[person]));
            }
        }
    }
    return false;
}; 

if(search(enterName) == false){
    $("#output").append(enterName + " doesn't have friends with a mango seller\n");
}