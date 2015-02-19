window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1500, 700, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude2', 'assets/dude2.png');
        game.load.image('man','assets/man.png');
        game.load.image('enemy','assets/player.png');
        game.load.image('door', 'assets/door.png');
        game.load.audio('bks','assets/eerie.mp3');
    }
    
    var player;
    var move;
    var land;
    var enemies;
    var timer;
    var total=0;
    var door;
    var music;

    function create() {
        music=game.add.audio('bks');
        music.play('',0,0.5,true);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        land=game.add.tileSprite(0,0,2000,2000,'bricks');
        land.fixedToCamera=true;
        door=game.add.sprite(1425,625,'door');
        game.physics.enable(door,Phaser.Physics.ARCADE);
        door.enableBody=true;
        door.body.immovable=true;
        enemies=game.add.group();
        enemies.enableBody=true;
        player = game.add.sprite(0, 0, 'dude2');
        player.anchor.setTo(0.5,0.5);
        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        move = game.input.keyboard.createCursorKeys();
        timer = game.time.create(false);
        timer.loop(500, spawn, this);
        timer.start();
        
    }

    function spawn(){
        enemies.create(game.rnd.integerInRange(0,game.world.width),game.rnd.integerInRange(0,game.world.height-150),'enemy');
        total++;
    }
    
    function update() {
        //player.body.setZeroVelocity();
        player.body.velocity.x=0;
        player.body.velocity.y=0;
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
        if(game.physics.arcade.collide(player, door)){
            game.add.text(500, 5000, 'You Win!', { fontSize: '128px', fill: '#000' });
        }
        if(game.physics.arcade.collide(player, enemies)){
            game.add.text(160, 150, 'You Lose!', { fontSize: '128px', fill: '#000' });
            enemies.kill();
        }
    }
};