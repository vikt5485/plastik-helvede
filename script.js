window.addEventListener("load", startScreen);

let point;
let liv;

let plasticSpriteNum;
let plasticContainerNum;

let fishSriteNum;
let fishContainerNum;

let popUp;

let timer;

function startScreen() {
    console.log("startScreen");

    document.querySelector("#settings_knap").addEventListener("click", openSettings);
    document.querySelector("#settings_knap").classList.remove("hide");
    document.querySelector("#settings_screen").classList.add("hide");

    //skjuler gameover, levelcomplete og instruktioner
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#instructions").classList.add("hide");

    //FÅR KNAPPEN TIL AT PULSERER, OG GØR AT MAN KAN KLKKE PÅ DEN
    document.querySelector("#play_knap").classList.add("pulse");
    document.querySelector("#play_knap").addEventListener("click", gameInstructions);
}

function openSettings() {
    console.log("openSettings");

    document.querySelector("#mute_music").classList.add("hide");
    document.querySelector("#mute_sound_effects").classList.add("hide");

    document.querySelector("#settings_knap").removeEventListener("click", openSettings);
    document.querySelector("#settings_screen").classList.remove("hide");

    //    document.querySelector("#sound_effects").addEventListener("click", muteSounds);


    document.querySelector("#exit_knap").addEventListener("click", closeSettings);
}




function closeSettings() {
    console.log("closeSettings");

    document.querySelector("#exit_knap").removeEventListener("click", closeSettings);
    document.querySelector("#settings_screen").classList.add("hide");
    document.querySelector("#settings_knap").addEventListener("click", openSettings);
}

function gameInstructions() {
    console.log("gameInstructions");

    //RYDDER OP fra startScreen
    document.querySelector("#play_knap").removeEventListener("click", gameInstructions);
    document.querySelector("#game_ui").classList.remove("hide");

    //viser instruktioner
    document.querySelector("#instructions").classList.remove("hide");
    document.querySelector("#settings_knap").classList.remove("hide");

    //Skjul gameover og levelcomplete skærm
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");

    //rydder op fra gameOver skærm
    document.querySelector("#restart_knap").classList.remove("pulse");
    document.querySelector("#restart_knap").removeEventListener("click", startGame);


    //GEMMER ALLE SPIL OG UI ELEMENTER
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#score_board").classList.add("hide");
    document.querySelector("#energy_board_container1").classList.add("hide");
    document.querySelector("#energy_board_container2").classList.add("hide");
    document.querySelector("#energy_board_container3").classList.add("hide");
    document.querySelector("#time_board_container").classList.add("hide");
    document.querySelector("#plastic_container1").classList.add("hide");
    document.querySelector("#plastic_container2").classList.add("hide");
    document.querySelector("#plastic_container3").classList.add("hide");
    document.querySelector("#fish_container1").classList.add("hide");
    document.querySelector("#fish_container2").classList.add("hide");
    document.querySelector("#fish_container3").classList.add("hide");
    document.querySelector("#sun_container").classList.add("hide");


    //FÅR KNAPPEN TIL AT PULSERER, OG GØR AT MAN KAN KLKKE PÅ DEN
    document.querySelector("#start_knap").addEventListener("click", startGame);
    document.querySelector("#start_knap").classList.add("pulse");
}

function startGame() {
    console.log("startGame");


    //viser UI elementer og skjuler instruktioner
    document.querySelector("#game_ui").classList.remove("hide");
    document.querySelector("#score_board").classList.remove("hide");
    document.querySelector("#energy_board_container1").classList.remove("hide");
    document.querySelector("#energy_board_container2").classList.remove("hide");
    document.querySelector("#energy_board_container3").classList.remove("hide");
    document.querySelector("#time_board_container").classList.remove("hide");

    document.querySelector("#instructions").classList.add("hide");
    document.querySelector("#settings_knap").classList.add("hide");


    //viser fisk og plastik
    document.querySelector("#plastic_container1").classList.remove("hide");
    document.querySelector("#plastic_container2").classList.remove("hide");
    document.querySelector("#plastic_container3").classList.remove("hide");
    document.querySelector("#fish_container1").classList.remove("hide");
    document.querySelector("#fish_container2").classList.remove("hide");
    document.querySelector("#fish_container3").classList.remove("hide");

    //TODO: Tiden starter
    timer = setTimeout(countPoints, 30000);
    document.querySelector("#time_board_sprite").classList.add("time_running");

    //Nulstil liv og point og vis liv
    point = 0;
    liv = 3;

    //viser liv og point

    document.querySelector("#energy_board_sprite1").classList.remove("fade_out_energy");
    document.querySelector("#energy_board_sprite2").classList.remove("fade_out_energy");
    document.querySelector("#energy_board_sprite3").classList.remove("fade_out_energy");

    document.querySelector("#score_board_count").innerHTML = point;



    //Start pop-up animation på fisk
    document.querySelector("#fish_container1").classList.add("pop_up1");

    //Klik på fisk -> clickFish
    document.querySelector("#fish_container1").addEventListener("click", fishNum1);

    //Start pop-up animation på fisk
    document.querySelector("#fish_container2").classList.add("pop_up2");

    //Klik på fisk -> clickFish
    document.querySelector("#fish_container2").addEventListener("click", fishNum2);

    //Start pop-up animation på fisk
    document.querySelector("#fish_container3").classList.add("pop_up2");

    //Klik på fisk -> clickFish
    document.querySelector("#fish_container3").addEventListener("click", fishNum3);



    //Start pop-up animation på plastik
    document.querySelector("#plastic_container1").classList.add("pop_up1");

    //Klik på fisk -> clickPlastic
    document.querySelector("#plastic_container1").addEventListener("click", plasticNum1);

    //Start pop-up animation på plastik
    document.querySelector("#plastic_container2").classList.add("pop_up1");

    //Klik på fisk -> clickPlastic
    document.querySelector("#plastic_container2").addEventListener("click", plasticNum2);

    //Start pop-up animation på plastik
    document.querySelector("#plastic_container3").classList.add("pop_up2");

    //Klik på fisk -> clickPlastic
    document.querySelector("#plastic_container3").addEventListener("click", plasticNum3);
}


function plasticNum1() {
    console.log("plasticNum1");
    spriteNum = 1;
    plasticContainerNum = 1;
    popUp = 1;

    clickPlastic();
}

function plasticNum2() {
    console.log("plasticNum2");
    spriteNum = 2;
    plasticContainerNum = 2;
    popUp = 1;

    clickPlastic();
}

function plasticNum3() {
    console.log("plasticNum3");
    spriteNum = 3;
    plasticContainerNum = 3;
    popUp = 2;

    clickPlastic();
}

function fishNum1() {
    console.log("fishNum1");
    fishSriteNum = 1;
    fishContainerNum = 1;
    popUp = 1;

    clickFish();
}

function fishNum2() {
    console.log("fishNum2");
    fishSriteNum = 2;
    fishContainerNum = 2;
    popUp = 2

    clickFish();
}

function fishNum3() {
    console.log("fishNum3");
    fishSriteNum = 3;
    fishContainerNum = 3;
    popUp = 2

    clickFish();
}



function clickFish() {
    console.log("clickFish");

    //Afspil lyd fra begyndelsen
    document.querySelector("#lyd_blob").currentTime = 0;
    document.querySelector("#lyd_blob").play();

    //Pauser pop_up animation
    document.querySelector("#fish_container" + fishContainerNum).classList.add("paused");

    //Start fade animation
    document.querySelector("#fish_sprite" + fishSriteNum).classList.add("fade_out");

    //Fade animation er færdig -> fishGone
    document.querySelector("#fish_sprite" + fishSriteNum).addEventListener("animationend", fishGone);
}

function fishGone() {
    console.log("fishGone");

    //rydder op
    document.querySelector("#fish_sprite" + fishSriteNum).removeEventListener("animationend", fishGone);

    //bruger liv variablen til at definere hvilken fisk der skal fade ud
    document.querySelector("#energy_board_sprite" + liv).classList.add("fade_out_energy");

    //fjerner 1 liv og skriver det i loggen
    liv--;
    console.log("liv: " + liv);



    //[liv tilbage] -> restartFish
    //[0 liv tilbage] -> gameOver

    if (liv > 0) {
        console.log("liv større end 0");
        restartFish();
    } else {
        restartFish();
        countPoints();
    }
}

function restartFish() {
    console.log("restartFish");

    document.querySelector("#fish_container" + fishContainerNum).classList.remove("paused");
    document.querySelector("#fish_sprite" + fishSriteNum).classList.remove("fade_out");

    document.querySelector("#fish_container" + fishContainerNum).classList.remove("pop_up" + popUp);
    document.querySelector("#fish_container" + fishContainerNum).offsetHeight;
    document.querySelector("#fish_container" + fishContainerNum).classList.add("pop_up" + popUp);
}



function clickPlastic() {
    console.log("clickPlastic");

    document.querySelector("#lyd_flaske").currentTime = 0;
    document.querySelector("#lyd_flaske").play();

    document.querySelector("#plastic_container" + plasticContainerNum).classList.add("paused");

    //Start fade animation
    document.querySelector("#plastic_sprite" + spriteNum).classList.add("fade_out");


    //TODO: "Jaa" lyd bliver afspiller
    console.log("afspil Jaa lyd");


    //Fade animation er færdig -> plasticGone
    document.querySelector("#plastic_sprite" + spriteNum).addEventListener("animationend", plasticGone);

}

function plasticGone() {
    console.log("plasticGone");

    document.querySelector("#plastic_sprite" + spriteNum).removeEventListener("animationend", plasticGone);

    //Giv point
    point++;
    //Vis point
    document.querySelector("#score_board_count").innerHTML = point;
    console.log("point: " + point);



    document.querySelector("#plastic_container" + plasticContainerNum).classList.remove("paused");
    document.querySelector("#plastic_sprite" + spriteNum).classList.remove("fade_out");


    document.querySelector("#plastic_container" + plasticContainerNum).classList.remove("pop_up" + popUp);
    document.querySelector("#plastic_container" + plasticContainerNum).offsetHeight;
    document.querySelector("#plastic_container" + plasticContainerNum).classList.add("pop_up" + popUp);
}






function countPoints() {
    console.log("countPoints");
    //Check hvor mange point der er samlet

    if (point >= 20) {
        levelComplete();
    } else {
        gameOver();
    }

}

function gameOver() {
    console.log("gameOver");
    clearTimeout(timer);

    //Alle elementer hides
    document.querySelector("#game_ui").classList.add("hide");
    document.querySelector("#plastic_container1").classList.add("hide");
    document.querySelector("#plastic_container2").classList.add("hide");
    document.querySelector("#plastic_container3").classList.add("hide");
    document.querySelector("#fish_container1").classList.add("hide");
    document.querySelector("#fish_container2").classList.add("hide");
    document.querySelector("#fish_container3").classList.add("hide");

    //Gameover skærm vises
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game_over_text").innerHTML = ("Ej nej nej, du nåede ikke at fange nok plastik... <br>Prøv igen!");

    //restart knap restarter spillet -> startGame
    document.querySelector("#restart_knap").classList.add("pulse");
    document.querySelector("#restart_knap").addEventListener("click", gameInstructions);



}

function levelComplete() {
    console.log("levelComplete");
    clearTimeout(timer);

    //Alle elementer hides
    document.querySelector("#game_ui").classList.add("hide");
    document.querySelector("#plastic_container1").classList.add("hide");
    document.querySelector("#plastic_container2").classList.add("hide");
    document.querySelector("#plastic_container3").classList.add("hide");
    document.querySelector("#fish_container1").classList.add("hide");
    document.querySelector("#fish_container2").classList.add("hide");
    document.querySelector("#fish_container3").classList.add("hide");

    //levelComplete skærm vises
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#level_complete_text").innerHTML = ("Mega fedt! Du fik " + point + " point. <br>Prøv igen?");

    //restart knap restarter spillet -> startGame
    document.querySelector("#restart_knap1").classList.add("pulse");
    document.querySelector("#restart_knap1").addEventListener("click", gameInstructions);
}




//
//function muteSounds() {
//    console.log("muteSounds");
//    document.querySelector("#sound_effects").removeEventListener("click", muteSounds);
//
//    document.querySelector("#sound_effects").classList.add("hide");
//    document.querySelector("#mute_sound_effects").classList.remove("hide");
//
//    document.querySelector("#lyd_blob").muted = true;
//    document.querySelector("#lyd_flaske").muted = true;
//
//    document.querySelector("#mute_sound_effects").addEventListener("click", unmuteSounds);
//
//}
//
//function unmuteSounds() {
//    console.log("unmuteSounds");
//    document.querySelector("#mute_sound_effects").removeEventListener("click", unmuteSounds);
//
//    document.querySelector("#sound_effects").classList.remove("hide");
//    document.querySelector("#mute_sound_effects").classList.add("hide");
//
//    document.querySelector("#lyd_blob").muted = false;
//    document.querySelector("#lyd_flaske").muted = false;
//
//    document.querySelector("#sound_effects").addEventListener("click", muteSounds);
//}
