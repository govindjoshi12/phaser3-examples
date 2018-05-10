var sceneConfig = {
    create: create,
    pack: {
        files: [
            { type: 'atlas', key: 'megaset', textureURL: 'assets/atlas/megaset-0.png', atlasURL: 'assets/atlas/megaset-0.json'}
        ]
    }
};

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: sceneConfig
};

var game = new Phaser.Game(config);

function create ()
{
    var atlasTexture = this.textures.get('megaset');

    var frames = atlasTexture.getFrameNames();

    for (var i = 0; i < frames.length; i++)
    {
        var x = Phaser.Math.Between(0, 800);
        var y = Phaser.Math.Between(0, 600);

        this.add.image(x, y, 'megaset', frames[i]);
    }
}