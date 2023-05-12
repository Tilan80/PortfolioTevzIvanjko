import Experience from "../Experience.js";
import * as THREE from "three";

export default class Clickables {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setObjects();
    }

    setObjects() {
        this.geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05); 
        this.material = new THREE.MeshBasicMaterial( { color: 0xD16666 } ); 
        this.material.wireframe = true;

        this.cubeHob = new THREE.Mesh(this.geometry, this.material ); 
        this.cubeHob.position.set (-0.7, 1, -0.5);

        this.cubeProj = new THREE.Mesh(this.geometry, this.material);
        this.cubeProj.position.set(0.1, 0.6, -0.6);

        this.cubeLang = new THREE.Mesh(this.geometry, this.material);
        this.cubeLang.position.set(-0.7, 0.7, 0.1);

        this.cubeEdu = new THREE.Mesh(this.geometry, this.material);
        this.cubeEdu.position.set(0.7, 1, -1);


        this.scene.add(this.cubeHob, this.cubeProj, this.cubeLang, this.cubeEdu);
    }


    resize() { };

    update() { };
}