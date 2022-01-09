Player = function(game, canvas) {
    // La scène du jeu
    this.scene = game.scene;
    window.addEventListener("keyup", function(evt) {

        switch(evt.keyCode){
            case 90:
                _this.camera.axisMovement[0] = false;
                break;
            case 83:
                _this.camera.axisMovement[1] = false;
                break;
            case 81:
                _this.camera.axisMovement[2] = false;
                break;
            case 68:
                _this.camera.axisMovement[3] = false;
                break;
        }
    }, false);

    // Quand les touches sont relachés
    window.addEventListener("keydown", function(evt) {
        switch(evt.keyCode){
            case 90:
                _this.camera.axisMovement[0] = true;
                break;
            case 83:
                _this.camera.axisMovement[1] = true;
                break;
            case 81:
                _this.camera.axisMovement[2] = true;
                break;
            case 68:
                _this.camera.axisMovement[3] = true;
                break;
        }
    }, false);
    window.addEventListener("mousemove", function(evt) {
        // if(_this.rotEngaged === true){
        _this.camera.rotation.y+=evt.movementX * 0.001 * (_this.angularSensibility / 250);
        var nextRotationX = _this.camera.rotation.x + (evt.movementY * 0.001 * (_this.angularSensibility / 250));
        if( nextRotationX < degToRad(90) && nextRotationX > degToRad(-90)){
            _this.camera.rotation.x+=evt.movementY * 0.001 * (_this.angularSensibility / 250);
        }
        // }
    }, false);

    // Initialisation de la caméra
    this._initCamera(this.scene, canvas);

};
_initPointerLock : function() {
    var _this = this;

    // Requete pour la capture du pointeur
    var canvas = this.game.scene.getEngine().getRenderingCanvas();
    canvas.addEventListener("click", function(evt) {
        canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
        if (canvas.requestPointerLock) {
            canvas.requestPointerLock();
        }
    }, false);

    // Evenement pour changer le paramètre de rotation
    var pointerlockchange = function (event) {
        _this.controlEnabled = (document.mozPointerLockElement === canvas || document.webkitPointerLockElement === canvas || document.msPointerLockElement === canvas || document.pointerLockElement === canvas);
        if (!_this.controlEnabled) {
            _this.rotEngaged = false;
        } else {
            _this.rotEngaged = true;
        }
    };

    // Event pour changer l'état du pointeur, sous tout les types de navigateur
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    document.addEventListener("mspointerlockchange", pointerlockchange, false);
    document.addEventListener("mozpointerlockchange", pointerlockchange, false);
    document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
},

Player.prototype = {
    _initCamera : function(scene, canvas) {
        // On crée la caméra
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);

        this.camera.axisMovement = [false,false,false,false];

        this.isAlive = true;
        // On demande à la caméra de regarder au point zéro de la scène
        this.camera.setTarget(BABYLON.Vector3.Zero());

        // On affecte le mouvement de la caméra au canvas

    }
};
class calculateHealth {
    constructor(health, degats) {
        this.health = health;
        this.degats = degats;
        let finalHealth;
        return finalHealth = degats - health;

    }

}

