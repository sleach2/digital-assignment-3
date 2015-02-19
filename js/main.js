window.onload = function() {
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.image( 'floor', 'assets/floor.png' );
    }
    
    
    function create() {
        game.add.sprite(0,0,'floor');
    }
    
    function update() {
    }
};