var mlkImg, mlk;
var ceuImg, ceu
var fantasmaImg, fantasmasGroup, fantasma;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
    mlkImg = loadImage ("mlk.png")
    ceuImg = loadImage ("ceu.jpg")
    fantasmaImg = loadImage ("fantasma.png")

}

function setup() {
    createCanvas(600, 600);
  ceu = createSprite(300,300);
  ceu.addImage("ceu",ceuImg);
  ceu.velocityY = 1;

  fantasmasGroup = new Group();
  invisibleBlockGroup = new Group();

  mlk = createSprite(200,200,50,50);
  mlk.scale = 0.05;
  mlk.addImage("mlk", mlkImg);

  
 
}

function draw() {
    background(200);
    if (gameState === "play") {
    if(ceu.y > 400){
        ceu.y = 300
      }
      spawnFantasmas();

      if(keyDown("left_arrow")){ mlk.x = mlk.x - 3; } 
    if(keyDown("right_arrow")){ mlk.x = mlk.x + 3; } 
    if(keyDown("space")){ mlk.velocityY = -10; } 
    mlk.velocityY = mlk.velocityY + 0.8

    if(fantasmasGroup.isTouching(mlk)){ mlk.velocityY = 0; } 
    if(invisibleBlockGroup.isTouching(mlk) || 
    mlk.y > 600){ mlk.destroy(); 
    gameState = "end" }


    drawSprites();
  } if (gameState === "end"){ 
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30); 
    text("Fim de Jogo", 230,250) }

    function spawnFantasmas() {

      if (frameCount % 240 === 0) { 
        var fantasma = createSprite(1, -50); 
        var invisibleBlock = createSprite(200,15); 
        invisibleBlock.width = 2;
        invisibleBlock.height = 2;

        fantasma.x = Math.round(random(120,400)); 
        invisibleBlock.x = fantasma.x; 
        

        fantasma.velocityY = 1; 
        invisibleBlock.velocityY = 1; 
        mlk.depth = fantasma.depth; 
        mlk.depth +=1;
    
        fantasma.lifetime = 800; 
        invisibleBlock.lifetime = 800;  
         
        invisibleBlock.debug = false; 
        invisibleBlockGroup.add( invisibleBlock);
        fantasmasGroup.add(fantasma);
       



    
    
}
 
}

}
