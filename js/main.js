window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1500, 700, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude2', 'assets/dude2.png');
        game.load.image('man','assets/man.png');
        game.load.image('player', 'assets/player.png');
    }
    
    var player;
    var move;
    var land

    function create() {
        game.physics.startSystem(Phaser.Physics.P2JS);
        land=game.add.tileSprite(0,0,2000,2000,'bricks');
        land.fixedToCamera=true;
        player = game.add.sprite(0, 0, 'dude2');
        player.anchor.setTo(0.5,0.5);
        game.physics.p2.enable(player);
        player.body.collideWorldBounds = true;
        move = game.input.keyboard.createCursorKeys();
    }
    
    function update() {
        //player.body.setZeroVelocity();
        player.body.velocity.x=0;
        player.body.velocity.y=0;   
        if (move.left.isDown){ 
            player.body.velocity.x = -250; 
        }else if (move.right.isDown){ 
            player.body.moveRight(250);
        }    
         if(move.up.isDown){
            player.body.moveUp(250);
        }else if(move.down.isDown){
            player.body.moveDown(250);
        }
    }
};