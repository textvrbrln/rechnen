"use strict";
// Add two numbers while the result is in the range of 20.

// Waiting until the DOM is loaded...
document.addEventListener("DOMContentLoaded", function(event) {

var rangemin = 0;
var rangemax = 20;

function zufall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

    // addition
	function summe(summand1, summand2) {
    return summand1 + summand2;
}
    $(".oneInput").focus();

    // Row 1
    var element1 = zufall(rangemin,rangemax);
    var differenceOne = rangemax - element1;
    var element2 = zufall(rangemin,differenceOne);

    document.getElementById("number1").innerHTML = element1;
    document.getElementById("number2").innerHTML = element2;
    var getElementOne = document.getElementById("number1").innerHTML;
    var getElementTwo = document.getElementById("number2").innerHTML;
    var addElements1 = +getElementOne + +getElementTwo;

    // listen to input (jquery)
    $('input.oneInput')
    .on('input', function() {
        if ($(this).val() == addElements1) {
            $('#solutionCheck1').html( "&#9745;" );
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-green");
            $(".oneInput").replaceWith(addElements1);
            $(".twoInput").focus();
        } else {
            $('#solutionCheck1').html( "&#9746;" );
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements1) {
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    });

    // Row 2
    var element3 = zufall(rangemin,rangemax);
    var differenceTwo = rangemax - element3;
    var element4 = zufall(rangemin,differenceTwo);

    document.getElementById("number3").innerHTML = element3;
    document.getElementById("number4").innerHTML = element4;
    var getElementThree = document.getElementById("number3").innerHTML;
    var getElementFour = document.getElementById("number4").innerHTML;
    var addElements2 = +getElementThree + +getElementFour;

    // listen to input (jquery)
    $('input.twoInput')
    .on('input', function() {
        if ($(this).val() == addElements2) {
            $('#solutionCheck2').html( "&#9745;" );
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-green");
            $(".twoInput").replaceWith(addElements2);
            $(".threeInput").focus();
        } else {
            $('#solutionCheck2').html( "&#9746;" );
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements2) {
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-red");
        }
    });

    // Row 3
    var element5 = zufall(rangemin,rangemax);
    var differenceThree = rangemax - element5;
    var element6 = zufall(rangemin,differenceThree);

    document.getElementById("number5").innerHTML = element5;
    document.getElementById("number6").innerHTML = element6;
    var getElementFive = document.getElementById("number5").innerHTML;
    var getElementSix = document.getElementById("number6").innerHTML;
    var addElements3 = +getElementFive + +getElementSix;

    // listen to input (jquery)
    $('input.threeInput')
    .on('input', function() {
        if ($(this).val() == addElements3) {
            $('#solutionCheck3').html( "&#9745;" );
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-green");
            $(".threeInput").replaceWith(addElements3);
            $(".fourInput").focus();
        } else {
            $('#solutionCheck3').html( "&#9746;" );
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements3) {
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-red");
        }
    });

    // Row 4
    var element7 = zufall(rangemin,rangemax);
    var differenceFour = rangemax - element7;
    var element8 = zufall(rangemin,differenceFour);

    document.getElementById("number7").innerHTML = element7;
    document.getElementById("number8").innerHTML = element8;
    var getElementSeven = document.getElementById("number7").innerHTML;
    var getElementEight = document.getElementById("number8").innerHTML;
    var addElements4 = +getElementSeven + +getElementEight;

    // listen to input (jquery)
    $('input.fourInput')
    .on('input', function() {
        if ($(this).val() == addElements4) {
            $('#solutionCheck4').html( "&#9745;" );
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-green");
            $(".fourInput").replaceWith(addElements4);
            $(".fiveInput").focus();
        } else {
            $('#solutionCheck4').html( "&#9746;" );
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements3) {
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-red");
        }
    });

    // Row 5
    var element9 = zufall(rangemin,rangemax);
    var differenceFive = rangemax - element9;
    var element10 = zufall(rangemin,differenceFive);

    document.getElementById("number9").innerHTML = element9;
    document.getElementById("number10").innerHTML = element10;
    var getElementNine = document.getElementById("number9").innerHTML;
    var getElementTen = document.getElementById("number10").innerHTML;
    var addElements5 = +getElementNine + +getElementTen;

    // listen to input (jquery)
    $('input.fiveInput')
    .on('input', function() {
        if ($(this).val() == addElements5) {
            $('#solutionCheck5').html( "&#9745;" );
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-green");
            $(".fiveInput").replaceWith(addElements5);
        } else {
            $('#solutionCheck5').html( "&#9746;" );
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements5) {
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-red");
        }
    });
});
