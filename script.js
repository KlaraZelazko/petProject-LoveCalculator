//Funkcja wykona się dopiero wtedy, gdy cała strona (HTML + CSS) zostanie w pełni załadowana
window.onload = function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}
// Funkcja odpowiedzialna za animację procentów
function animateResult(finalPercentage) {
    let current = 0;
    let resultElement = document.getElementById("result-percentage");

    //setInterval uruchamia funkcję co określoną liczbę milisekund
    let interval = setInterval(() => { //tworzymy animację zwiększania liczby
        if (current >= finalPercentage) {
            clearInterval(interval); //zatrzymujemy animację
        } else {
            current++;
            resultElement.innerText = current + "%";
        }
    }, 20);//20 milisekund przerwy między każdą zmianą
}

function calculateLove(){
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    /* komunikat błędów - uznałam ze nie potrzebuje
    if (yourName === "" || crushName === ""){
        document.getElementById("result-message").innerText = "Please enter both names";
        document.getElementById("result-percentage").innerText = "";
        return;
    }
*/

    //Sprawdzamy czy oba pola NIE są puste
    if (yourName != "" && crushName != ""){
        let percentage = Math.floor(Math.random()* 101);
        document.getElementById("result-message").innerText = yourName + " and "+ crushName+"'s chance of love: "
        //document.getElementById("result-percentage").innerText = percentage.toString()+"%" -> zamiast tego ->animateResult
        animateResult(percentage);
    }
}
