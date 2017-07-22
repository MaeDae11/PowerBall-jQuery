// first set of numbers range from 1-69. there are 5 slots to be filled and the numbers cannot repeat
// second set of numbers range from 1-26. there is 1 to be filled.

// 5 slots
// user must press button to innitiate thing (event listener)
// generage a random number between 1-69  (math.random)
// choose one at a time and enter them into the html shown to user (probably using textContent property) 
// want to replace h1 with random number generated
// as loops through and fills slots on html: 
    // if number is same as previous number(s) choose another

// stop when all 5 slots are filled --> then do next two slots of numbers


// ***************************
// 3
function getButton(){
    var $button = $("button");
    // var buttonArray = [].slice.call(button)
    return $button;
};

// ***************************
//2
function clickButton(min, max){
    var counter = 1;
    var $clickMeBtn = getButton();
    $clickMeBtn.click(function (event) {
        // event.preventDefault();
        moveBall(counter);
        counter++;
        getNumberSlot(min, max);
        getPowerBallSlot();
        
    });
};


function moveBall(counter) {
    var degree = 720 * counter;
    // $('.ball-container').css({'transform': 'rotate(0deg)', 'transition': '2s'});
    $('.ball-container').css(
        {'transform': 'rotate(' + degree + 'deg)',
         'transition': '2s'});
}
// ***************************
//4
function getNumberSlot(min, max){
    var $numberSlots = $("[data-text-role='number']");
    var numberArray = numberArrayMaker(min, max)
    $.each($numberSlots , function(i, slot){
        $(this).text(numberArray[i]);
    });
}

// 5
function numberArrayMaker(min, max){
    var numberArray = [];
    for (var i = 0; i < 5; i++){
        var randomNumber = (getRandomFirstNumbers(min, max));
        if (numberArray.indexOf(randomNumber) === -1){
            numberArray.push(randomNumber);
        } else {
            i--;
        }
    }
    return numberArray;
}


// 6
function getRandomFirstNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // returns random number between min and max (ex 1, 69)
};

//7
function getPowerBallSlot(){
    var powerballSlot = document.querySelector("[data-text-role='powerball-number']");
    powerballSlot.textContent = getRandomFirstNumbers(1, 26);
    };



//1
clickButton(1, 69);
