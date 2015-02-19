window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude2', 'assets/dude2.png');
        game.load.image('man','assets/man.png');
    }
    
    var player;
    var move;
    var land

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 2000, 2000);
        land=game.add.tileSprite(0,0,800,600,'bricks');
        land.fixedToCamera=true;
        player = game.add.sprite(0, 0, 'dude2');
        //game.physics.enable(player, Phaser.Physics.ARCADE)
        //player.anchor.setTo(0.5,0.5);
        game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        move = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(0, 0, 2000, 2000);
        game.camera.focusOnXY(0, 0);
    }
    
    function update() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
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
    }
};