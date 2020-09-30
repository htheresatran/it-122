//Variables - used to store information, JS is a not strict type (don't need to declare a variable is of a specific type).

    //Variable types
    var a = 10;
    var name = "Theresa";
    var middleName = 'Daniel';
    var isHot = false;

    //Arrays
    var arrayNumbers = [1, 2, 3, 4, 5, 6];
    var arrayNames = ["Ralph", "Adrian", "Jovanni"];

    //Objects
    var obj1 = {
        name: "Theresa",
        age: 22
    }

//Functions - blocks of reusable code that you can reuse by calling the name of the function

    function myFunction(){
        console.log("Hey");
    }
    myFunction();

    //pass parameters to a function
    function myFunction2(greeting){
        console.log(greeting);
    }
    myFunction2("Hey you");

//Flow Control (Conditionals)
    var a = 1;

    //basic if else 
    if(true){
        doThis;
    } else {
        doThat;
    }

    //if else with multiple conditions
    if (a == 1){
        doThis;
    } else if(a == 2){
        doThat;
    } else {
        doTheOtherthingl
    }

    var zipCode;

    switch(zipCode){
        case 98101:
            doStuff1;
            break;
        case 98102:
            doStuff2;
            break;
        default:
            doContingent;
            break;
    }

//Flow Control/Counters (Loops)
    //Finite counting when you know how much you want to count
    for(var i = 0; i < 10; i ++){
        doStufff;
    }

    //Infinite counting, don't know how much 
    var b = true;
    while(b){
        doStuff;
        if(someCondition){
            b = false;
        }
    }

//Data structures