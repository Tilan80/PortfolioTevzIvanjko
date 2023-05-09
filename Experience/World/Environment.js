import * as THREE from "three";
import Experience from "../Experience.js";
//import GSAP from "gsap";
//import GUI from "lil-gui";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // this.gui = new GUI({ container: document.querySelector(".hero-main") });
        /*this.obj = {
            colorObj: { r: 0, g: 0, b: 0 },
            intensity: 3,
        };*/

        this.setLighting();
        //this.setSunlight();
        //this.setGUI();
    }

    setLighting() {
        this.pointLight = new THREE.PointLight("#ffffff", 0.8, 5);
        this.pointLight.position.set(0.9, 1.5, 0.9);
        this.pointLight.castShadow = true;
        this.pointLight.shadow.camera.far = 20;
        this.pointLight.shadow.mapSize.set(2048, 2048);
        this.pointLight.shadow.normalBias = 0.05;
        this.scene.add(this.pointLight);

        this.pointLightHelper = new THREE.PointLightHelper(this.pointLight, 0.1);
        this.scene.add(this.pointLightHelper);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.1);
        this.scene.add(this.ambientLight);
    }


    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#ffffff", 0.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(2048, 2048);
        this.sunLight.shadow.normalBias = 0.05;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.1);
        this.scene.add(this.ambientLight);
    }

    resize() { }

    update() { }
}