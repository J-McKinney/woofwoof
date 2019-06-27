$("document").ready(function () {
    var score = 0;
    var userScore;
    //History Question, 1stgrade-5thgrade////////////////////////////////////////////////////////////////
    var firstH = [
        ["The first Thanksgiving was celebrated by Native Americans and what other group of people?", "The Pilgrims", "The Cherokee", "The Puritans", "The Spaniards"],
        ["From which country did Mexico gain its independence in the 19th century?", "Spain", "England", "Portugal", "Honduras"],
        ["Who invented the light bulb in 1879?", "Thomas Edison", "Alexander Graham Bell", "George Westinghouse", "J. P. Morgan"],
        ["Which language is the most widely spoken in South America?", "Spanish", "English", "Portuguese", "French"],
        ["Neil Armstrong and Buzz Aldrin were the first two men in the entire world to do what?", "Walk on the moon", "Play golf on the moon", "Land on the darkside of the moon", "Drive on the moon"]
    ];
    var oneH = firstH[Math.floor(Math.random() * firstH.length)];
    console.log(oneH);
    $("#h100").on("click", function () {
        $(".lead").html(oneH[0]);
        $("#ans1").html(oneH[1]).on("mousedown", function () {
            userScore = score + 100;
            $("#score").html(userScore);
            alert("Correct Answer");
        });
        $("#ans2").html(oneH[2]).on("mousedown", function () {
            alert("Wrong Answer");
        });
        $("#ans3").html(oneH[3]).on("mousedown", function () {
            alert("Wrong Answer");
        });
        $("#ans4").html(oneH[4]).on("mousedown", function () {
            alert("Wrong Answer");
        });
    })





})