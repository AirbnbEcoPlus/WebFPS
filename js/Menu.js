Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

    // Création de notre lumière principale
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    var ground = new BABYLON.Mesh.CreateGround("baseGround", 100,100,2, scene)
    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/groundtexture1.jpg", scene);
    materialGround.diffuseTexture.uScale = 10.0;
    materialGround.diffuseTexture.vScale = 10.0;
    ground.material = materialGround;
};