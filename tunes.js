var alreadyPlayed = [];

function playMusic(){
    alreadyPlayed.push(document.getElementById('request').value + ", ");
    
    console.log(alreadyPlayed);
}