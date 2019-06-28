$("document").ready(function () {
    var score = 0;
    var userScore = 0;

     //Eng & Lit Question, 1stgrade-5thgrade/////////////////////////////////////////////////////////////////////////////////////////////////////////        
     var firstE = [
        ["The plural of “moose” is…", "Moose", "Meese", "A Mock", "Mooses"],
        ["How many letters are in the English alphabet?", "26", "24", "22", "28"],
        ["In the story about the boy who cried wolf, what is the lesson?", "Always tell the truth", "It's better to love than loss", "What goes around, comes around", "Don't pet the sweaty things and don't sweat the pety things"],
        ["What is the term for a word that is similar in meaning to another word?", "Synonym", "Antonym", "Palindrome", "Homonym"],
        ["What type of words should be capitalized?", "Proper nouns", "Adjectives", "Proverbs", "Variables"]
    ];
    var secondE = [
        ["What type of literature features magical creatures, such as giants, gnomes, and goblins?", "Fairy Tales", "Folk Lores", "Myths", "Legends"],
        ["Is “red” an adjective or a noun?", "Both", "Adjective", "Noun", "Neither"],
        ["What is the term for a word that has the opposite meaning of another word?", "Antonym", "Synonym", "Palindrome", "Pangram"],
        ["What are the five interrogative or 'question' words?", "What, why, who, where, when", "Because, else, if, so, like", "Am, your, his, hers, those", "Look, hear, smell, taste, feel"],
        ["What are the comparative and superlative forms of the word 'big'?", "Bigger and biggest", "Large and huge", "Small and tiny", "More and too"]
    ];
    var thirdE = [
        ["The person in a novel who tells the story from a third-person perspective is called a what?", "A narrator", "A third wall", "The antagonist", "The protagonist"],
        ["What is the name of the book about a friendship between a pig named Wilbur and spider named Charlotte?", "Charlotte’s Web", "Babe", "The sandlot", "Free Willy"],
        ["Adding conjunctions such as “and” or “but” turns a simple sentence into what type of sentence?", "Compound sentence", "Inline sentence", "A panogram", "None of them"],
        ["Who is the author of James and the Giant Peach?", "Roald Dahl", "Eric Carle", "Judy Blume", "E. B. White"],
        ["The main series of events in a story is called a what?", "A plot", "An End", "Conflict", "Structure"]
    ];
    var fourthE = [
        ["What is the main character in a story called?", "A protagonist", " An antagonist", "A narrator", "A comic-relief"],
        ["What type of word is 'truthfully?'", "Adverb", "Noun", "Proverb", "Adjective"],
        ["In this book titled The Lion, the Witch, and the Wardrobe, what is the last comma called?", "The Oxford comma", "The Brown note", "The Stanford character", "TOC"],
        ["A story conveying a moral lesson is called what?", "A fable", "A myth", "A legend", "a note"],
        ["What do you call a group of crows?", "A murder", "A flock", "A herd", "A trove"]
    ]; var fifthE = [

    ];
   
    //History Question, 1stgrade-5thgrade///////////////////////////////////////////////////////////////////////////////////////////////////////// 
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
        $("#ans1").html(oneH[1]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans2").html(oneH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(oneH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                            3rd answer right
    var twoH = secondH[Math.floor(Math.random() * secondH.length)];
    console.log(twoH);
    $("#h200").on("click", function () {
        $("#h200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoH[0]);
        $("#ans1").html(twoH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(twoH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoH[3]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans4").html(twoH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                           2nd answer right
    var threeH = thirdH[Math.floor(Math.random() * thirdH.length)];
    console.log(threeH);
    $("#h300").on("click", function () {
        $("#h300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeH[0]);
        $("#ans1").html(threeH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeH[2]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans3").html(threeH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(threeH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                      1st answer right
    var fourH = fourthH[Math.floor(Math.random() * fourthH.length)];
    console.log(fourH);
    $("#h400").on("click", function () {
        $("#h400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourH[0]);
        $("#ans1").html(fourH[1]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans2").html(fourH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fourH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                       4th answer right
    var fiveH = fifthH[Math.floor(Math.random() * fifthH.length)];
    console.log(fiveH);
    $("#h500").on("click", function () {
        $("#h500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveH[0]);
        $("#ans1").html(fiveH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fiveH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fiveH[4]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        })
    })

    function disableAnswers() {
        $("#ans1").prop("disabled", true);
        $("#ans2").prop("disabled", true);
        $("#ans3").prop("disabled", true);
        $("#ans4").prop("disabled", true);
    }

    function enableAnswers() {
        $("#ans1").prop("disabled", false);
        $("#ans2").prop("disabled", false);
        $("#ans3").prop("disabled", false);
        $("#ans4").prop("disabled", false);
    }




})