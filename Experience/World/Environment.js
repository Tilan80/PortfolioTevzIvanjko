import * as THREE from "three";
import Experience from "../Experience.js";
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
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
        this.pointLight = new THREE.PointLight("#ffffff", 0.4, 5);
        this.pointLight.position.set(0.9, 1.5, 0.9);
        this.pointLight.castShadow = true;
        this.pointLight.shadow.camera.far = 20;
        this.pointLight.shadow.mapSize.set(2048, 2048);
        this.pointLight.shadow.normalBias = 0.05;
        this.scene.add(this.pointLight);

        /*this.pointLightHelper = new THREE.PointLightHelper(this.pointLight, 0.1);
        this.scene.add(this.pointLightHelper);*/

        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.05);
        this.scene.add(this.ambientLight);


        ///////////// variables
        const colorL = "#D16666";
        const intensity = 10;
        //////////// left wall
        
        this.LrectLight = new THREE.RectAreaLight(colorL, intensity, 2, 0.01);
        this.LrectLight.position.set(-1.02, 1.1, 0);
        this.LrectLight.lookAt(-0.5, 0.5, 0);
        this.scene.add(this.LrectLight);

        this.LrectLightHelper = new RectAreaLightHelper(this.LrectLight);
        this.LrectLight.add(this.LrectLightHelper);

        /*this.LGeom = new THREE.BoxGeometry(2, 0.01, 0.01);
        this.LMate = new THREE.MeshStandardMaterial({
            color: colorL,
        });
        this.Lrect = new THREE.Mesh(this.LGeom, this.LMate);
        this.Lrect.position.copy(this.LrectLight.position);
        this.Lrect.rotateY(Math.PI / 2);
        this.scene.add(this.Lrect);*/
        //////right wall
        this.RrectLight = new THREE.RectAreaLight(colorL, intensity, 2, 0.01);
        this.RrectLight.position.set(0, 1.1, -1.02);
        this.RrectLight.lookAt(0, 0.5, -0.5);
        this.scene.add(this.RrectLight);

        this.RrectLightHelper = new RectAreaLightHelper(this.RrectLight);
        this.RrectLight.add(this.RrectLightHelper);

        /////Corner Light
        this.CrectLight = new THREE.RectAreaLight(colorL, intensity, 0.01, 0.5);
        this.CrectLight.position.set(-1.02, 0.4, -1.02);
        this.CrectLight.lookAt(0, 0.4, 0);
        this.scene.add(this.CrectLight);

        this.CrectLightHelper = new RectAreaLightHelper(this.CrectLight);
        this.CrectLight.add(this.CrectLightHelper);

        ///////TV light
        this.TVrectLight = new THREE.RectAreaLight(colorL, intensity, 0.9, 0.4);
        this.TVrectLight.position.set(-1.02, 0.8, 0.3);
        this.TVrectLight.lookAt(-2, 0.8, 0.3);
        this.scene.add(this.TVrectLight);

        //this.TVrectLightHelper = new RectAreaLightHelper(this.TVrectLight);
        //this.TVrectLight.add(this.TVrectLightHelper);

        ////// Monitor light
        this.MRrectLight = new THREE.RectAreaLight(colorL, intensity, 0.2, 0.1);
        this.MRrectLight.position.set(0, 0.7, -0.9);
        this.MRrectLight.lookAt(-0.5, 0.7, -2);
        this.scene.add(this.MRrectLight);

        /*this.MRrectLightHelper = new RectAreaLightHelper(this.MRrectLight);
        this.MRrectLight.add(this.MRrectLightHelper);*/

        this.MR1rectLight = new THREE.RectAreaLight(colorL, intensity, 0.2, 0.1);
        this.MR1rectLight.position.set(0.5, 0.7, -0.9);
        this.MR1rectLight.lookAt(0.7, 0.7, -2);
        this.scene.add(this.MR1rectLight);

        /*this.MR1rectLightHelper = new RectAreaLightHelper(this.MR1rectLight);
        this.MR1rectLight.add(this.MR1rectLightHelper);*/

        /////////desk light
        this.DrectLight = new THREE.RectAreaLight(colorL, intensity, 0.8, 0.1);
        this.DrectLight.position.set(-0.9, 0.25, 0.3);
        this.DrectLight.lookAt(0, 0.25, 0.3);
        this.scene.add(this.DrectLight);
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