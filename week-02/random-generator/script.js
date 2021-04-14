let path = ["loteria-images/el-alacran.png",
"loteria-images/el-ingeniero.png",
"loteria-images/el-paraguas.png",
"loteria-images/el-corazon.png",
"loteria-images/la-sandia.png",
"loteria-images/el-barril.png",
"loteria-images/el-camaron.png",
"loteria-images/el-dj.png",
"loteria-images/el-gorrito.png",
"loteria-images/la-bota.png",
"loteria-images/la-estrella.png",
"loteria-images/el-mundo.png",
"loteria-images/el-violoncello.png",
"loteria-images/el-nopal.png",
"loteria-images/el-papa.png"];

function randomCard() {
    let myRandomCard = getRandomCard();
    document.getElementById('cards').src = myRandomCard;
}

function getRandomCard() {
    let card = path[Math.floor(Math.random() * 15)];
    return card;
  }