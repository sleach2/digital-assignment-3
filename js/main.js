window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1500, 700, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude2', 'assets/dude2.png');
        game.load.image('man','assets/man.png');
        game.load.image('enemy','assets/player.png');
        game.load.image('door', 'assets/door.png');
    }
    
    var player=null;
    var move;
    var land;
    var enemies;
    var timer;
    var total=0;
    var door;

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        land=game.add.tileSprite(0,0,2000,2000,'bricks');
        land.fixedToCamera=true;
        door=game.add.sprite(1500,700,'door');
        game.physics.enable(door,Phaser.Physics.ARCADE);
        door.body.immovable=true;
        enemies=game.add.group();
        enemies.enableBody=true;
        game.physics.enable(enemies,Phaser.Physics.ARCADE);
        player = game.add.sprite(0, 0, 'dude2');
        player.anchor.setTo(0.5,0.5);
        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        move = game.input.keyboard.createCursorKeys();
        timer = game.time.create(false);
        timer.loop(2000, spawn, this);
        timer.start();
    }

    function spawn(){
        enemies.create(game.rnd.integerInRange(0,game.world.width),game.rnd.integerInRange(0,game.world.height-150),'enemy');
        total++;
    }
    
    function update() {
        player.body.setZeroVelocity();
        if (move.left.isDown){ 
            player.body.velocity.x -= 250; 
        }else if (move.right.isDown){ 
            player.body.velocity.x += 250;
        }    
         if(move.up.isDown){
            player.body.velocity.y -= 250;
        }else if(move.down.isDown){
            player.body.velocity.y += 250;
        }
        //enemies.forEach(function(enemy) {this.moveToObject(enemy, player, 20);}, game.physics);
        /*if(game.physics.arcade.collide(player, door)){
            game.add.text(160, 150, 'You Win!', { fontSize: '64px', fill: '#000' });
        }
        if(game.physics.arcade.collide(player, enemies)){
            game.add.text(160, 150, 'You Lose!', { fontSize: '64px', fill: '#000' });
        }*/
    }
};