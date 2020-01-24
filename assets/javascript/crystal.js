$(document).ready(function () {

    // variables-----------------
    var wins = 0;
    var losses = 0;

    var userCurrentTotal = 0;

    // ======================FUNCTION 1===============
    //===========================================================
    var targetGoal = assignGoalValue();
    //-------------generating targetGoal-------------------
    function assignGoalValue() {
        targetGoal = Math.floor(Math.random() * 101 + 19);
        return targetGoal;
    }

    //=============== FUNCTION 2=========================
    //===========================================================
    var crystalValuesArray = [];
    //-------generating an array of crystal values---------
    function pickFourNumbersForCrystals() {
        crystalValuesArray = [];
        for (var i = 0; i < 4; i++) {
            var aNumberInTheArray = Math.floor(Math.random() * 11 + 1);
            crystalValuesArray.push(aNumberInTheArray);

            console.log(crystalValuesArray);

            //assigns the html button element "ids" with > values
            // from the randomly generated Array above
            $("#c-one").val(crystalValuesArray[0]);
            $("#c-two").val(crystalValuesArray[1]);
            $("#c-three").val(crystalValuesArray[2]);
            $("#c-four").val(crystalValuesArray[3]);
        }
    }
    //============== END OF FUNCTION 2===============================


    // ++++++++++++++START THE GAME++++++++++++++++++
    // --------run: function 1 & function 2 -----------------
    assignGoalValue();
    $("#target-score").text(targetGoal);
    pickFourNumbersForCrystals();

    $(".bttn").on("click", function () {
        //grabs the value of "this" button and stores it in the variable crystalValue, as an integer
        var crystalValue = parseInt($(this).val());

        //now adds the value to the users current total:
        userCurrentTotal += crystalValue;
        $("#user-current-total").text(userCurrentTotal);

        if (userCurrentTotal === targetGoal) {
            wins++;
            $("#win").text(wins);
            userCurrentTotal = 0;
            $("#user-current-total").text(" ");
            assignGoalValue();
            $("#target-score").text(targetGoal);
            pickFourNumbersForCrystals();
        } else if (userCurrentTotal > targetGoal) {
            losses++;
            $("#lost").text(losses);
            userCurrentTotal = 0;
            $("#user-current-total").text(" ");
            assignGoalValue();
            $("#target-score").text(targetGoal);
            pickFourNumbersForCrystals();
        }  //there is no ELSE because the only other option is to keep playing

    })

    $("#win").text(wins);
    $("#lost").text(losses);
})

