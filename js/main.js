window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 1500, 700, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
        game.load.image('dude2', 'assets/dude2.png');
        game.load.image('man','assets/man.png');
        game.load.image('enemy','assets/player.png');
    }
    
    var player=null;
    var move;
    var land;
    var enemies;
    var timer;
    var total=0;

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        land=game.add.tileSprite(0,0,2000,2000,'bricks');
        land.fixedToCamera=true;
        enemies=game.add.group();
        //enemies.enableBody=true;
        player = game.add.sprite(0, 0, 'dude2');
        player.anchor.setTo(0.5,0.5);
        game.physics.enable(player,Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;
        move = game.input.keyboard.createCursorKeys();
        /*game.camera.follow(player);
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 800, 600);
        game.camera.focusOnXY(player.x, player.y);*/
        timer = game.time.create(false);
        timer.loop(2000, spawn, this);
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
            //player.body.moveRight(250);
        }    
         if(move.up.isDown){
            player.body.velocity.y -= 250;
            //player.body.moveUp(250);
        }else if(move.down.isDown){
            player.body.velocity.y += 250;
            //player.body.moveDown(250);
        }
        enemies.forEach(
            function(enemy) {
                game.physics.moveToObject(enemy, player, 20);
            }, this);
    }

    /*function render() {

    game.debug.text('Time until event: ' + timer.duration.toFixed(0), 32, 32);
    game.debug.text('Loop Count: ' + total, 32, 64);

    }*/
};