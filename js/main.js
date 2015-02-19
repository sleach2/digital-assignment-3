window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude', 'assets/dude.png',32,48);
    }
    
    var player;
    var move;
    var land

    function create() {
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(-1000, -1000, 2000, 2000);
        land=game.add.tileSprite(0,0,800,600,'bricks');
        land.fixedToCamera=true;
        player = game.add.sprite(32, game.world.height - 150, 'dude');
        game.physics.enable(player, Phaser.Physics.ARCADE)
        player.body.collideWorldBounds = true;
        //player.animations.add('left', [0, 1, 2, 3], 10, true);
        //player.animations.add('right', [5, 6, 7, 8], 10, true);
        move = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);
    }
    
    function update() {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        if (move.left.isDown){ 
             player.body.velocity.x = -250; 
             //player.animations.play('left'); 
        }else if (move.right.isDown){ 
             player.body.velocity.x = 250; 
             //player.animations.play('right'); 
        }/*else{ 
             player.animations.stop(); 
             player.frame = 4; 
         } */
         if(move.up.isDown){
            player.body.velocity.y=-250;
        }
        if(move.down.isDown){
            player.body.velocity.y=250;
        }
    }
};