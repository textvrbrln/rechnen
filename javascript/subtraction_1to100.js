"use strict";
// Subtract two numbers while the result is in the range between 0 and 100.

// Waiting until the DOM is loaded...
document.addEventListener("DOMContentLoaded", function(event) {

var rangemin = 0;
var rangemax = 100;

function zufall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
    $(".oneInput").focus();

    // Row 1
    var element1 = zufall(rangemin,rangemax);
    var element2 = zufall(rangemin,rangemax);
    if (element1 >= element2) {
        document.getElementById("number1").innerHTML = element1;
        document.getElementById("number2").innerHTML = element2;
    } else {
        document.getElementById("number1").innerHTML = element2;
        document.getElementById("number2").innerHTML = element1;
    }

    var getElementOne = document.getElementById("number1").innerHTML;
    var getElementTwo = document.getElementById("number2").innerHTML;
    var subtractElements1 = +getElementOne - +getElementTwo;

    // listen to input (jquery)
    $('input.oneInput')
    .on('input', function() {
        if ($(this).val() == subtractElements1) {
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
        if ($(this).val() != subtractElements1) {
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    });

    // Row 2
    var element3 = zufall(rangemin,rangemax);
    var element4 = zufall(rangemin,rangemax);
    if (element3 >= element4) {
        document.getElementById("number3").innerHTML = element3;
        document.getElementById("number4").innerHTML = element4;
    } else {
        document.getElementById("number3").innerHTML = element4;
        document.getElementById("number4").innerHTML = element3;
    }

    var getElementThree = document.getElementById("number3").innerHTML;
    var getElementFour = document.getElementById("number4").innerHTML;
    var subtractElements2 = +getElementThree - +getElementFour;

    // listen to input (jquery)
    $('input.twoInput')
    .on('input', function() {
        if ($(this).val() == subtractElements2) {
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
        if ($(this).val() != subtractElements2) {
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-red");
        }
    });

    // Row 3
    var element5 = zufall(rangemin,rangemax);
    var element6 = zufall(rangemin,rangemax);
    if (element5 >= element6) {
        document.getElementById("number5").innerHTML = element5;
        document.getElementById("number6").innerHTML = element6;
    } else {
        document.getElementById("number5").innerHTML = element6;
        document.getElementById("number6").innerHTML = element5;
    }

    var getElementFive = document.getElementById("number5").innerHTML;
    var getElementSix = document.getElementById("number6").innerHTML;
    var subtractElements3 = +getElementFive - +getElementSix;

    // listen to input (jquery)
    $('input.threeInput')
    .on('input', function() {
        if ($(this).val() == subtractElements3) {
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
        if ($(this).val() != subtractElements3) {
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-red");
        }
    });

    // Row 4
    var element7 = zufall(rangemin,rangemax);
    var element8 = zufall(rangemin,rangemax);
    if (element7 >= element8) {
        document.getElementById("number7").innerHTML = element7;
        document.getElementById("number8").innerHTML = element8;
    } else {
        document.getElementById("number7").innerHTML = element8;
        document.getElementById("number8").innerHTML = element7;
    }

    var getElementSeven = document.getElementById("number7").innerHTML;
    var getElementEight = document.getElementById("number8").innerHTML;
    var subtractElements4 = +getElementSeven - +getElementEight;

    // listen to input (jquery)
    $('input.fourInput')
    .on('input', function() {
        if ($(this).val() == subtractElements4) {
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
        if ($(this).val() != subtractElements3) {
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-red");
        }
    });

    // Row 5
    var element9 = zufall(rangemin,rangemax);
    var element10 = zufall(rangemin,rangemax);
    if (element9 >= element10) {
        document.getElementById("number9").innerHTML = element9;
        document.getElementById("number10").innerHTML = element10;
    } else {
        document.getElementById("number9").innerHTML = element10;
        document.getElementById("number10").innerHTML = element9;
    }

    var getElementNine = document.getElementById("number9").innerHTML;
    var getElementTen = document.getElementById("number10").innerHTML;
    var subtractElements5 = +getElementNine - +getElementTen;

    // listen to input (jquery)
    $('input.fiveInput')
    .on('input', function() {
        if ($(this).val() == subtractElements5) {
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
        if ($(this).val() != subtractElements5) {
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-red");
        }
    });
});
