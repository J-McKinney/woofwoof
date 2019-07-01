$("document").ready(function () {
    var score = 0;
    var userScore = 0;
    var hist;
    var eng;
    var sci;
    var math;
    var hard;
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var history = [
        ["The what was the name of the last Queen of France?", "Anne of Brittany", "Adela of Champagne", "Empress Jose`phine", "Queen Marie Antoinette"],
        ["The region known as the “Fertile Crescent” is located in present day…", "Southeast Asia", "Western Europe", "Western Asia", "Middle East"],
        ["The modern day city of Istanbul was known by what name in the 13th century…", "Ephesus", "Ankara", "Izmir", "Constantinople"],
        ["The French and Indian war, which began in 1754, became the North American theater of this worldwide war that lasted from 1756 to 1763…", "American Revolutionary War", "The Battle of Britannia", "The Civil War", "The Seven Years War"],
        ["In which decade did Hong Kong revert from British rule…", "1960s (1968)", "1970s (1979)", "1980s (1986)", "1990s (1997)"]
    ];
    var english = [
        ["Who is the creator of the classic book characters Tom Sawyer and Huckleberry Finn?", "Clara Clemens", "Mark Twain", "John Marshall", "Charles Dickens"],
        ["The words “the,” “an,” and “a,” are known as what in English grammar?", "Fillers", "Articles", "Arbitraries", "Pointers"],
        ["Who is the author of the 1960 novel about social and racial inequality To Kill a Mockingbird?", "Lee Harper", "Harper Lee", "Marcus Anthony", "John J. Reynolds"],
        ["Often seen at the end of a sentence, the three trailing dots that indicate the omission from speech or writing of a word or words that are superfluous or able to be understood from contextual clues are known as…", "Contrasts", "Ellipsis", "Pointers", "Wheels"],
        ["What is the name of the most famous English playwright?", "Homer", "William Shakespeare", "Charles Dickens", "Jane Austen"]
    ];
    var geography = [
        ["What is the main language spoken in the Canadian province of Quebec?", "Spanish", "Dutch", "French", "English"],
        ["Which country is both an island and a continent?", "New Zealand", "Africa", "Australia", "Madagascar"],
        ["What is the name of the sea bordered by Europe to the north and North Africa to the south?", "The Red Sea", "The Baltic Sea", "The Mediterranean Sea", "The Caspian Sea"],
        ["The mountain range that includes Mount Everest is called...", "The Andes", "The Rockys", "The Himalayas", "The Appalachians"],
        ["Imaginary lines traversing the globe from pole to pole are called…", "International Date Line", "Equator", "Meridians", "Tropic of Cancer"]
    ];
    var science = [
        ["The Earth is at least how many billion years old?", "6 billion", "13 billion", "4 billion", "10 billion"],
        ["What are the three states of matter?", "Gas, liquid, and antimatter", "Water, air, and mass", "Solid, liquid, and gas", "Protons, Neutrons, and electrons"],
        ["The Earth has 4 layers, the thickest of which is the mantle. What is the thinnest layer called?", "The Mantle", "The Inner Core", "The Crust", "The Outer Core"],
        ["Animals without backbones are known as...", "Vertabrates", "Cephalapods", "Invertebrates", "Mammelia"],
        ["What species can live on both water and land?", "Crustaceans", "Mammels", "Amphibians", "Cephalapods"]
    ];
    var math = [
        ["A hexagon has how many sides?", "6", "8", "9", "7"],
        ["A father has 7 daughters and 100 dollars. If he wants to give each daughter an equal amount of money, rounding to the nearest dollar, how much much does each daughter get?", "$14", "$16", "$12", "$13"],
        ["You collect 48 pieces of Halloween candy. Your parents say you can eat 2 pieces per day, plus an extra piece on Saturdays and Sundays. How many weeks will it take to finish all of your candy?", "3 weeks", "2.5 weeks", "3.5 weeks", "4 weeks"],
        ["If a football field is 100 yards long, how many feet long is the football field?", "300 ft", "250 ft", "350 ft", "400 ft"],
        ["Solve the following equation: (2 * 4)/(5 + 3 - 1)0…", "8", "1 7/8", "0", "None of the above"]
    ];
    var hardFriends = [
        ["What is Joey's PIN number? Hint: They spell out Joey", "6395", "3695", "5639", "3569"],
        ["What was the name of Ross' monkey in Friends?", "Jack", "Ben", "Marcel", "Richard"],
        ["What was Monica and Rachel's apartment number in the first couple of episodes of 'Friends'?", "6", "4", "5", "9"],
        ["In the sitcom 'Friends' what is the Joey Special?", "A philly cheesesteak", "A 36 inch sub", "2 pizzas", "A bucket of fried chicken"],
        ["Who was Ross' second wife?", "Emily", "Susan", "Rachel", "Carol"]
    ];
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                          4th answer right
    var oneQ = history[Math.floor(Math.random() * history.length)];
    console.log(oneQ);
    $("#question1").html(oneQ[0]);
    $("#ans11").html(oneQ[1]).one("click", function () {
        $("#ans11").css("background-color", "red");
        $("#ans12").css("background-color", "red");
        $("#ans13").css("background-color", "red");
        $("#ans14").css("background-color", "green");
        $("#ans11").prop("disabled", true);
        $("#ans12").prop("disabled", true);
        $("#ans13").prop("disabled", true);
        $("#ans14").prop("disabled", true);
    });
    $("#ans12").html(oneQ[2]).one("click", function () {
        $("#ans11").css("background-color", "red");
        $("#ans12").css("background-color", "red");
        $("#ans13").css("background-color", "red");
        $("#ans14").css("background-color", "green");
        $("#ans11").prop("disabled", true);
        $("#ans12").prop("disabled", true);
        $("#ans13").prop("disabled", true);
        $("#ans14").prop("disabled", true);
    });
    $("#ans13").html(oneQ[3]).one("click", function () {
        $("#ans11").css("background-color", "red");
        $("#ans12").css("background-color", "red");
        $("#ans13").css("background-color", "red");
        $("#ans14").css("background-color", "green");
        $("#ans11").prop("disabled", true);
        $("#ans12").prop("disabled", true);
        $("#ans13").prop("disabled", true);
        $("#ans14").prop("disabled", true);
    });
    $("#ans14").html(oneQ[4]).one("click", function () {
        score += 1;
        $("#score").html(score);
        $("#ans11").css("background-color", "red");
        $("#ans12").css("background-color", "red");
        $("#ans13").css("background-color", "red");
        $("#ans14").css("background-color", "green");
        $("#ans11").prop("disabled", true);
        $("#ans12").prop("disabled", true);
        $("#ans13").prop("disabled", true);
        $("#ans14").prop("disabled", true);
    });
    //                                                                      2nd answer right
    var twoQ = english[Math.floor(Math.random() * english.length)];
    console.log(twoQ);
    $("#question2").html(twoQ[0]);
    $("#ans21").html(twoQ[1]).one("click", function () {
        $("#ans21").css("background-color", "red");
        $("#ans23").css("background-color", "red");
        $("#ans24").css("background-color", "red");
        $("#ans22").css("background-color", "green");
        $("#ans21").prop("disabled", true);
        $("#ans22").prop("disabled", true);
        $("#ans23").prop("disabled", true);
        $("#ans24").prop("disabled", true);
    });
    $("#ans22").html(twoQ[2]).one("click", function () {
        score += 1;
        $("#score").html(score);
        $("#ans21").css("background-color", "red");
        $("#ans23").css("background-color", "red");
        $("#ans24").css("background-color", "red");
        $("#ans22").css("background-color", "green");
        $("#ans21").prop("disabled", true);
        $("#ans22").prop("disabled", true);
        $("#ans23").prop("disabled", true);
        $("#ans24").prop("disabled", true);
    });
    $("#ans23").html(twoQ[3]).one("click", function () {
        $("#ans21").css("background-color", "red");
        $("#ans23").css("background-color", "red");
        $("#ans24").css("background-color", "red");
        $("#ans22").css("background-color", "green");
        $("#ans21").prop("disabled", true);
        $("#ans22").prop("disabled", true);
        $("#ans23").prop("disabled", true);
        $("#ans24").prop("disabled", true);
    });
    $("#ans24").html(twoQ[4]).one("click", function () {
        $("#ans21").css("background-color", "red");
        $("#ans23").css("background-color", "red");
        $("#ans24").css("background-color", "red");
        $("#ans22").css("background-color", "green");
        $("#ans21").prop("disabled", true);
        $("#ans22").prop("disabled", true);
        $("#ans23").prop("disabled", true);
        $("#ans24").prop("disabled", true);
    });

    //                                                                        3rd answer right
    var threeQ = geography[Math.floor(Math.random() * geography.length)];
    console.log(threeQ);
    $("#question3").html(threeQ[0]);
    $("#ans31").html(threeQ[1]).one("click", function () {
        $("#ans31").css("background-color", "red");
        $("#ans32").css("background-color", "red");
        $("#ans34").css("background-color", "red");
        $("#ans33").css("background-color", "green");
        $("#ans31").prop("disabled", true);
        $("#ans32").prop("disabled", true);
        $("#ans33").prop("disabled", true);
        $("#ans34").prop("disabled", true);
    });
    $("#ans32").html(threeQ[2]).one("click", function () {
        $("#ans31").css("background-color", "red");
        $("#ans32").css("background-color", "red");
        $("#ans34").css("background-color", "red");
        $("#ans33").css("background-color", "green");
        $("#ans31").prop("disabled", true);
        $("#ans32").prop("disabled", true);
        $("#ans33").prop("disabled", true);
        $("#ans34").prop("disabled", true);
    });
    $("#ans33").html(threeQ[3]).one("click", function () {
        score += 1;
        $("#score").html(score);
        $("#ans31").css("background-color", "red");
        $("#ans32").css("background-color", "red");
        $("#ans34").css("background-color", "red");
        $("#ans33").css("background-color", "green");
        $("#ans31").prop("disabled", true);
        $("#ans32").prop("disabled", true);
        $("#ans33").prop("disabled", true);
        $("#ans34").prop("disabled", true);
    });
    $("#ans34").html(threeQ[4]).one("click", function () {
        $("#ans31").css("background-color", "red");
        $("#ans32").css("background-color", "red");
        $("#ans34").css("background-color", "red");
        $("#ans33").css("background-color", "green");
        $("#ans31").prop("disabled", true);
        $("#ans32").prop("disabled", true);
        $("#ans33").prop("disabled", true);
        $("#ans34").prop("disabled", true);
    });

    //                                                                                3rd answer right
    var fourQ = science[Math.floor(Math.random() * science.length)];
    console.log(fourQ);
    $("#question4").html(fourQ[0]);
    $("#ans41").html(fourQ[1]).one("click", function () {
        $("#ans41").css("background-color", "red");
        $("#ans42").css("background-color", "red");
        $("#ans44").css("background-color", "red");
        $("#ans43").css("background-color", "green");
        $("#ans41").prop("disabled", true);
        $("#ans42").prop("disabled", true);
        $("#ans43").prop("disabled", true);
        $("#ans44").prop("disabled", true);
    });
    $("#ans42").html(fourQ[2]).one("click", function () {
        $("#ans41").css("background-color", "red");
        $("#ans42").css("background-color", "red");
        $("#ans44").css("background-color", "red");
        $("#ans43").css("background-color", "green");
        $("#ans41").prop("disabled", true);
        $("#ans42").prop("disabled", true);
        $("#ans43").prop("disabled", true);
        $("#ans44").prop("disabled", true);
    });
    $("#ans43").html(fourQ[3]).one("click", function () {
        score += 1;
        $("#score").html(score);
        $("#ans41").css("background-color", "red");
        $("#ans42").css("background-color", "red");
        $("#ans44").css("background-color", "red");
        $("#ans43").css("background-color", "green");
        $("#ans41").prop("disabled", true);
        $("#ans42").prop("disabled", true);
        $("#ans43").prop("disabled", true);
        $("#ans44").prop("disabled", true);
    });
    $("#ans44").html(fourQ[4]).one("click", function () {
        $("#ans41").css("background-color", "red");
        $("#ans42").css("background-color", "red");
        $("#ans44").css("background-color", "red");
        $("#ans43").css("background-color", "green");
        $("#ans41").prop("disabled", true);
        $("#ans42").prop("disabled", true);
        $("#ans43").prop("disabled", true);
        $("#ans44").prop("disabled", true);
    });
    //                                                                                1st answer right
    var fiveQ = math[Math.floor(Math.random() * math.length)];
    console.log(fiveQ);
    $("#question5").html(fiveQ[0]);
    $("#ans51").html(fiveQ[1]).one("click", function () {
        score += 1;
        $("#score").html(score);
        $("#ans52").css("background-color", "red");
        $("#ans53").css("background-color", "red");
        $("#ans54").css("background-color", "red");
        $("#ans51").css("background-color", "green");
        $("#ans51").prop("disabled", true);
        $("#ans52").prop("disabled", true);
        $("#ans53").prop("disabled", true);
        $("#ans54").prop("disabled", true);
    });
    $("#ans52").html(fiveQ[2]).one("click", function () {
        $("#ans52").css("background-color", "red");
        $("#ans53").css("background-color", "red");
        $("#ans54").css("background-color", "red");
        $("#ans51").css("background-color", "green");
        $("#ans51").prop("disabled", true);
        $("#ans52").prop("disabled", true);
        $("#ans53").prop("disabled", true);
        $("#ans54").prop("disabled", true);
    });
    $("#ans53").html(fiveQ[3]).one("click", function () {
        $("#ans52").css("background-color", "red");
        $("#ans53").css("background-color", "red");
        $("#ans54").css("background-color", "red");
        $("#ans51").css("background-color", "green");
        $("#ans51").prop("disabled", true);
        $("#ans52").prop("disabled", true);
        $("#ans53").prop("disabled", true);
        $("#ans54").prop("disabled", true);
    });
    $("#ans54").html(fiveQ[4]).one("click", function () {
        $("#ans52").css("background-color", "red");
        $("#ans53").css("background-color", "red");
        $("#ans54").css("background-color", "red");
        $("#ans51").css("background-color", "green");
        $("#ans51").prop("disabled", true);
        $("#ans52").prop("disabled", true);
        $("#ans53").prop("disabled", true);
        $("#ans54").prop("disabled", true);
    });

    //                                                                        3rd answer right
    var sixQ = hardFriends[Math.floor(Math.random() * hardFriends.length)];
    console.log(sixQ);
    $("#question6").html(sixQ[0]);
    $("#ans61").html(sixQ[1]).one("click", function () {
        $("#ans61").css("background-color", "red");
        $("#ans62").css("background-color", "red");
        $("#ans64").css("background-color", "red");
        $("#ans63").css("background-color", "green");
        $("#ans61").prop("disabled", true);
        $("#ans62").prop("disabled", true);
        $("#ans63").prop("disabled", true);
        $("#ans64").prop("disabled", true);
    });
    $("#ans62").html(sixQ[2]).one("click", function () {
        $("#ans61").css("background-color", "red");
        $("#ans62").css("background-color", "red");
        $("#ans64").css("background-color", "red");
        $("#ans63").css("background-color", "green");
        $("#ans61").prop("disabled", true);
        $("#ans62").prop("disabled", true);
        $("#ans63").prop("disabled", true);
        $("#ans64").prop("disabled", true);
    });
    $("#ans63").html(sixQ[3]).one("click", function () {
        score += 1;
        $("#score").html(score);
        $("#ans61").css("background-color", "red");
        $("#ans62").css("background-color", "red");
        $("#ans64").css("background-color", "red");
        $("#ans63").css("background-color", "green");
        $("#ans61").prop("disabled", true);
        $("#ans62").prop("disabled", true);
        $("#ans63").prop("disabled", true);
        $("#ans64").prop("disabled", true);
    });
    $("#ans64").html(sixQ[4]).one("click", function () {
        $("#ans61").css("background-color", "red");
        $("#ans62").css("background-color", "red");
        $("#ans64").css("background-color", "red");
        $("#ans63").css("background-color", "green");
        $("#ans61").prop("disabled", true);
        $("#ans62").prop("disabled", true);
        $("#ans63").prop("disabled", true);
        $("#ans64").prop("disabled", true);
    });


    // document.body.onkeyup = function (e) {
    //     if (e.keyCode == 32) {
    //         reset();
    //     }
    // }
    //<a href="" target="_blank"></a>
    //links to a new html page for the questions
    // for the other window
    //id="close" onclick="window.close()">
    //////////////////////////////////////////////////////////////////////////////////////////////
    //  Interval Demonstration
    //  Set our number counter to 100.
    // var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    // var intervalId;

    //  When the stop button gets clicked, run the stop function.
    // $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    // function run() {
    //   clearInterval(intervalId);
    //   intervalId = setInterval(decrement, 1000);
    // }

    //  The decrement function.
    // function decrement() {

    //  Decrease number by one.
    //   number--;

    //  Show the number in the #show-number tag.
    //   $("#show-number").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    //   if (number === 0) {

    //  ...run the stop function.
    // stop();

    //  Alert the user that time is up.
    //     alert("Time Up!");
    //   }
    // }

    //  The stop function
    // function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    //   clearInterval(intervalId);
    // }

    //  Execute the run function.
    // run();
    ////////////////////////////////////////////////////////////////////////////////////////////////
})
