//Write a loop that makes seven calls to console.log to output the following triangle
for(var i=1; i<=4; i++){
    let str = "";
    for(var j=1; j<=i; j++){
        str = str + "*";
    }
    console.log(str);
}

//Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"];

strArray.forEach(function(a){
    console.log(a)
});

//write a code to count the elements in the array . Don’t use length property
let myarray=[11,22,33,44,55,66];
let count = 0;
let k = 0
while(myarray[k] != undefined){
    count = count + 1;
    k++;
    
}
console.log(count);

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
//Find the length of your foods array
let myFood = ["rice","chicken","fish","roll","paneer"]
function favFoodByPos(arr,pos){
    return arr[pos-1];
}
console.log(favFoodByPos(myFood,3));
console.log("");

//Starting from the existing friends variable below, change the element that is currently “Mari" to “Munnabai”.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
            if(input[i] === "Mari"){
                input[i] = "Munnabhai";
            }
        }
    }
    dataHandling(friends);
    console.log(friends);


//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends1 = [
    "Mari",
    "MaryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function printTillCapAm(input){
        for (var i = 0; i < input.length; i++) {
            if(input[i] === "CaptainAmerica"){
                break;
            }
            console.log(input[i]);
        }
    }
    printTillCapAm(friends1);
    console.log("");



 //   Find the person is ur friend or not.
    const friends2 = [
        "Mari",
        "MaryJane",
        "CaptainAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
    ];
    function findFriend(input, name){
    for (var i = 0; i < input.length; i++) {
            if(input[i] === name){
                console.log("found!");
                break;
            }
        }
    }
    findFriend(friends2,"Jeff");



// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends3 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var friends4 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
function mergeArray(input1, input2){
    let res = input1.concat(input2);
    return res.sort();
//Your code goes here
}

let sortedArray = mergeArray(friends3, friends4);
console.log(sortedArray);


//Add Mr or Ms to the names in the friends array.
var friends4 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    function addMr(input){
        for(var i = 0; i < input.length; i++){
            input[i] = "Mr. " + input[i];
        }       
    }
    addMr(friends4);
    console.log(friends4);
