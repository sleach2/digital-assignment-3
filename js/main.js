window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'bricks', 'assets/bricks.png' );
    }
    
    
    function create() {
        game.add.sprite(0,0,'bricks');
    }
    
    function update() {
    }
};