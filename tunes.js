var alreadyPlayed = [];

function playMusic(){
    alreadyPlayed.push(document.getElementById("request").value + ", ");
    var Song = document.getElementById("request").value;
    document.getElementById("practice").innerHTML = alreadyPlayed;
    console.log(alreadyPlayed);
}