//Når siden er loaded kald functionen sidenVises
window.addEventListener("load", sidenVises);

let point;
let liv;

function sidenVises() {
    //Udskriv at du er i denne funtion i consolen
    console.log("sidenVises");

    //Kald startGame functionen
    startGame();
}

function startScreen() {
    console.log("startScreen");

    //FÅR KNAPPEN TIL AT PULSERER, OG GØR AT MAN KAN KLKKE PÅ DEN
    document.querySelector("#play_knap").classList.add("pulse");
    document.querySelector("#play_knap").addEventListener("click", gameInstructions);
}


function gameInstructions() {
    console.log("gameInstructions");

    //RYDDER OP
    document.querySelector("#play_knap").removeEventListener("click", gameInstructions);

    //FÅR KNAPPEN TIL AT PULSERER, OG GØR AT MAN KAN KLKKE PÅ DEN
    document.querySelector("#start_knap").addEventListener("click", playGame);
    document.querySelector("#start_knap").classList.add("pulse");

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
}


function playGame() {
    console.log("playGame");

    //RYDDER OP
    document.querySelector("#start_knap").removeEventListener("click", playGame);

    //GEMMER START KNAP OG BESKRIVELSE
    document.querySelector("#start_knap").classList.add("hide");
    document.querySelector("#instruktioner_beskrivelse").classList.add("hide");

    //VISER ALLE SPIL OG UI ELEMENTER
    document.querySelector("#score_board").classList.remove("hide");
    document.querySelector("#energy_board_container1").classList.remove("hide");
    document.querySelector("#energy_board_container2").classList.remove("hide");
    document.querySelector("#energy_board_container3").classList.remove("hide");
    document.querySelector("#time_board_container").classList.remove("hide");
    document.querySelector("#plastic_container1").classList.remove("hide");
    document.querySelector("#plastic_container2").classList.remove("hide");
    document.querySelector("#plastic_container3").classList.remove("hide");
    document.querySelector("#fish_container1").classList.remove("hide");
    document.querySelector("#fish_container2").classList.remove("hide");
    document.querySelector("#fish_container3").classList.remove("hide");
    document.querySelector("#sun_container").classList.remove("hide");

    //kalder funktionerne nedenfor
}
