window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1500, 700, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude2', 'assets/dude2.png');
        game.load.image('man','assets/man.png');
        game.load.image('enemy','assets/player.png');
    }
    
    var player;
    var move;
    var land;
    var enemy;

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        land=game.add.tileSprite(0,0,2000,2000,'bricks');
        land.fixedToCamera=true;
        player = game.add.sprite(0, 0, 'dude2');
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        move = game.input.keyboard.createCursorKeys();
        /*game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 800, 600);
        game.camera.focusOnXY(player.x, player.y);*/
    }
    
    function update() {
        player.body.setZeroVelocity();
        
        if (move.left.isDown){ 
            player.body.velocity.x = -250; 
        }else if (move.right.isDown){ 
            player.body.velocity.x = 250;
            //player.body.moveRight(250);
        }    
         if(move.up.isDown){
            player.body.velocity.y = -250;
            //player.body.moveUp(250);
        }else if(move.down.isDown){
            player.body.velocity.y = 250;
            //player.body.moveDown(250);
        }
    }
};