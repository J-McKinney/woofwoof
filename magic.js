$("document").ready(function () {
    var score = 0;
    var userScore = score;
    //History Question, 1stgrade-5thgrade////////////////////////////////////////////////////////////////
        var firstH = [
            ["The first Thanksgiving was celebrated by Native Americans and what other group of people?", "The Pilgrims", "The Cherokee", "The Puritans", "The Spaniards"],
            ["From which country did Mexico gain its independence in the 19th century?", "Spain", "England", "Portugal", "Honduras"],
            ["Who invented the light bulb in 1879?", "Thomas Edison", "Alexander Graham Bell", "George Westinghouse", "J. P. Morgan"],
            ["Which language is the most widely spoken in South America?", "Spanish", "English", "Portuguese", "French"],
            ["Neil Armstrong and Buzz Aldrin were the first two men in the entire world to do what?", "Walk on the moon", "Play golf on the moon", "Land on the darkside of the moon", "Drive on the moon"]
        ];
        var secondH = [
            ["What are the three branches of the United States government?", "Congress, Supreme Court, Senate", "House of Rep., Congress, Legislative", "Legislative, Judicial, Executive", "Executive, Legislative, Congress"],
            ["Which war was fought between the north and south regions in the United States?", "The Revolutionary War", "The French and Indian War", "The Civil War", "The Mexican-American War"],
            ["Italy, Japan, and Germany’s alliance was called what during WWII?", "The Wolf's Lair", "The Third Reich", "The Axis of Evil", "Alliance of Reich"],
            ["What city was the first to be attacked by an atomic bomb?", "Nagasaki", "Kyoto", "Hiroshima", "Osaka"],
            ["What are the first ten amendments to the Constitution called?", "Civil Rights", "The Declaration", "The Bill of Rights", "Jackson's Treaties"]
        ];
        var thirdH = [
            ["What type of feather, beginning with letter Q, did people write with during the Middle Ages?", "Qwill", "Quill", "Quince", "Quint"],
            ["Julius Caesar was the emperor of what empire?", "The Greco-Roman Empire", "The Roman Empire", "The Anglo-Roman Empire", "The Romanian Empire"],
            ["What is Rosa Parks most famous for?", "Her Protests for Equal Rights", "Refusing to give her seat up in the front of the bus.", "First African American to vote", "First African American in a Desegregated College",],
            ["The first fireworks were invented in the 7th century in what country?", "Japan", "China", "India", "Mongolia"],
            ["Name the American president on the half dollar coin who was assassinated in 1963.", "Lyndon B. Johnson", "John F. Kennedy", "Dwight D. Eisenhower", "Harry S. Truman"]
        ];
        var fourthH = [
            ["What ancient civilization built the Machu Picchu complex in Peru?", "The Incas", "The Mayans", "The Aztecs", "The Andeans"],
            ["The ancient Egyptian writing system was called what?", "Hieroglyphics", "Cyrillic Script", "sanskrit", "Cuneiform"],
            ["From whom did the United State buy territory in the Louisiana Purchase?", "Napoleon/France", "Edouard de Stoeckl/Russia", "Luis de onis y Gonzalez-Vera/Spain", "Antonio López de Santa Anna/Mexico"],
            ["Who wrote the national anthem of the United States of America?", "Francis S. Key", "Nathaniel C. Towle", "Richard E. Berg", "Howard P. Willens"]
            ["The Battle of Gettysburg was fought in which war?", "The Civil War", "The Revolutionary War", "The War on Drugs", "World War 2"]
        ];
        var fifthH = [
            ["The what was the name of the last Queen of France?", "Anne of Brittany", "Adela of Champagne", "Empress Jose`phine", "Queen Marie Antoinette"],
            ["The region known as the “Fertile Crescent” is located in present day…", "Southeast Asia", "Western Europe", "Western Asia", "Middle East"],
            ["The modern day city of Istanbul was known by what name in the 13th century…", "Ephesus", "Ankara", "Izmir", "Constantinople"],
            ["The French and Indian war, which began in 1754, became the North American theater of this worldwide war that lasted from 1756 to 1763…", "American Revolutionary War", "The Battle of Britannia", "The Civil War", "The Seven Years War"],
            ["In which decade did Hong Kong revert from British rule…", "1960s (1968)", "1970s (1979)", "1980s (1986)", "1990s (1997)"]
        ];
        //History questions randomly picked, 1stgrade-5thgrade//////////////////////////////////////////////////////
        //                                                                         1st answer right
            var oneH = firstH[Math.floor(Math.random() * firstH.length)];
            console.log(oneH);
            $("#h100").on("click", function () {
                $("#h100").prop("disabled", true);
                enableAnswers();
                $(".lead").html(oneH[0]);
                $("#ans1").html(oneH[1]).on("click", function () {
                    userScore += 100;
                    $("#score").html(userScore);
                    disableAnswers();
                    alert("Correct Answer, Please Pick Another Category");
                });
                $("#ans2").html(oneH[2]).on("click", function () {
                    // userScore -= 100;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans3").html(oneH[3]).on("click", function () {
                    // userScore -= 100;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans4").html(oneH[4]).on("click", function () {
                    // userScore -= 100;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
            })
        //                                                                            3rd answer right
            var twoH = secondH[Math.floor(Math.random() * secondH.length)];
            console.log(twoH);
            $("#h200").on("click", function () {
                $("#h200").prop("disabled", true);
                enableAnswers();
                $(".lead").html(twoH[0]);
                $("#ans1").html(twoH[1]).on("click", function () {
                    // userScore -= 200;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans2").html(twoH[2]).on("click", function () {
                    // userScore -= 200;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans3").html(twoH[3]).on("click", function () {
                    score += 200;
                    $("#score").html(score);
                    disableAnswers();
                    alert("Correct Answer, Please Pick Another Category");
                });
                $("#ans4").html(twoH[4]).on("click", function () {
                    // userScore -= 200;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
            })
        //                                                                           2nd answer right
            var threeH = thirdH[Math.floor(Math.random() * thirdH.length)];
            console.log(threeH);
            $("#h300").on("click", function () {
                $("#h300").prop("disabled", true);
                enableAnswers();
                $(".lead").html(threeH[0]);
                $("#ans1").html(threeH[1]).on("click", function () {
                    // userScore -= 300;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans2").html(threeH[2]).on("click", function () {
                    // userScore += 300;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Correct Answer, Please Pick Another Category");
                });
                $("#ans3").html(threeH[3]).on("click", function () {
                    // userScore -= 300;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans4").html(threeH[4]).on("click", function () {
                    // userScore -= 300;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
            })
        //                                                                      1st answer right
            var fourH = fourthH[Math.floor(Math.random() * fourthH.length)];
            console.log(fourH);
            $("#h400").on("click", function () {
                $("#h400").prop("disabled", true);
                enableAnswers();
                $(".lead").html(fourH[0]);
                $("#ans1").html(fourH[1]).on("mousedown", function () {
                    userScore += 400;
                    $("#score").html(userScore);
                    disableAnswers();
                    alert("Correct Answer, Please Pick Another Category");
                });
                $("#ans2").html(fourH[2]).on("mousedown", function () {
                    // userScore -= 400;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans3").html(fourH[3]).on("mousedown", function () {
                    // userScore -= 400;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans4").html(fourH[4]).on("mousedown", function () {
                    // userScore -= 400;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
            })
        //                                                                       4th answer right
            var fiveH = fifthH[Math.floor(Math.random() * fifthH.length)];
            console.log(fiveH);
            $("#h500").on("click", function () {
                $("#h500").prop("disabled", true);
                enableAnswers();
                $(".lead").html(fiveH[0]);
                $("#ans1").html(fiveH[1]).on("click", function () {
                    // userScore -= 500;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans2").html(fiveH[2]).on("click", function () {
                    // userScore -= 500;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans3").html(fiveH[3]).on("click", function () {
                    // userScore -= 500;
                    // $("#score").html(userScore);
                    disableAnswers();
                    // alert("Unless you know the answer, I would try another category...")
                });
                $("#ans4").html(fiveH[4]).on("click", function () {
                    userScore += 500;
                    $("#score").html(userScore);
                    disableAnswers();
                    alert("Correct Answer, Please Pick Another Category");
                })
            })

            function disableAnswers(){
                $("#ans1").prop("disabled", true);
                $("#ans2").prop("disabled", true);
                $("#ans3").prop("disabled", true);
                $("#ans4").prop("disabled", true);
            }

            function enableAnswers(){
                $("#ans1").prop("disabled", false);
                $("#ans2").prop("disabled", false);
                $("#ans3").prop("disabled", false);
                $("#ans4").prop("disabled", false);
            }








    // $("#ans1").prop("disabled", true);
    // $("#ans2").prop("disabled", true);
    // $("#ans3").prop("disabled", true);
    // $("#ans4").prop("disabled", true);

    // $("#ans1").prop("disabled", false);
    // $("#ans2").prop("disabled", false);
    // $("#ans3").prop("disabled", false);
    // $("#ans4").prop("disabled", false);
    // document.body.onkeyup = function (e) {
    //     if (e.keyCode == 32) {
    //         reset();
    //     }
    // }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // var = [ ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ]
    // var fiveH = fifthH[Math.floor(Math.random() * fifthH.length)];
    // console.log(fiveH);
    // $("#h100").on("click", function () {
    //     $(".lead").html(fiveH[0]);
    //     $("#ans1").html(fiveH[1]).on("click", function () {
    //         alert("Correct Answer, Please Pick Another Category");
    // alert("Wrong Answer, Please Pick Another Category");
    //     });
    //     $("#ans2").html(fiveH[2]).on("click", function () {
    //         alert("Correct Answer, Please Pick Another Category");
    // alert("Wrong Answer, Please Pick Another Category");
    //     });
    //     $("#ans3").html(fiveH[3]).on("click", function () {
    //         alert("Correct Answer, Please Pick Another Category");
    // alert("Wrong Answer, Please Pick Another Category");
    //     });
    //     $("#ans4").html(fiveH[4]).on("click", function () {
    //         alert("Correct Answer, Please Pick Another Category");
    // alert("Wrong Answer, Please Pick Another Category");
    //     })
    // })
})