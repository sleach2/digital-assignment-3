window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude', 'assets/dude.png');
    }
    
    var player;
    var move;

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(-1000, -1000, 2000, 2000);
        game.add.sprite(0,0,800,600'bricks');
        load.fixedToCamera=true;
        player = game.add.sprite(32, game.world.height - 150, 'cat1');
        player.body.collideWorldBounds = true;
        player.animations.add('left',[0,1],10,true);
        player.animations.add('right',[3,4],10,true);
        move = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);
    }
    
    function update() {
    }
};