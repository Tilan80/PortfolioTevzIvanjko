import * as THREE from "three";
import Experience from "../Experience.js";
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
//import GSAP from "gsap";
//import GUI from "lil-gui";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.debug = this.experience.debug;


        this.setMenu();
        this.setLighting();
        this.setOtherLighting();
        this.setFloor();
        
        //this.setSunlight();
        //this.setGUI();
    }

    setMenu() {
        if (this.debug) {
            this.debugFolder = this.debug.addFolder({
                title: 'MENU',
                expanded: true
            })

            this.debugFolder.addButton({
                title: "Hobbies",
            }).on('click', () => {
                let elem = document.getElementById("click0");
                elem.style.zIndex = 7;
            })
            this.debugFolder.addButton({
                title: "Projects",
            }).on('click', () => {
                let elem = document.getElementById("click1");
                elem.style.zIndex = 7;
            })
            this.debugFolder.addButton({
                title: "Languages",
            }).on('click', () => {
                let elem = document.getElementById("click2");
                elem.style.zIndex = 7;
            })
            this.debugFolder.addButton({
                title: "Education",
            }).on('click', () => {
                let elem = document.getElementById("click3");
                elem.style.zIndex = 7;
            })
        }
    }

    setLighting() {
        this.lightInput = {};
        this.lightInput.mainColor = "#ffffff"
        this.lightInput.mainIntensity = 1;

        this.pointLight = new THREE.PointLight(this.lightInput.color, this.lightInput.mainIntensity, 5);
        this.pointLight.position.set(0.9, 1.5, 0.9);
        this.pointLight.castShadow = true;
        this.pointLight.shadow.camera.far = 20;
        this.pointLight.shadow.mapSize.set(2048, 2048);
        this.pointLight.shadow.normalBias = 0.05;
        this.scene.add(this.pointLight);

        //this.pointLightHelper = new THREE.PointLightHelper(this.pointLight, 0.1);
        //this.scene.add(this.pointLightHelper);

        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.05);
        this.scene.add(this.ambientLight);


        if (this.debug) {
            this.debugFolder = this.debug.addFolder({
                title: 'Lights',
                expanded: false
            })
            this.debugFolder.addInput(
                this.lightInput,
                'mainColor',
                { view: 'color' }
            ).on('change', () => {
                this.pointLight.color.set(this.lightInput.mainColor);
            })

            this.debugFolder.addInput(
                this.lightInput,
                'mainIntensity',
                { label: 'Intensity', min: 0, max: 2 }
            ).on('change', () => {
                this.pointLight.intensity = this.lightInput.mainIntensity;
            });
        }

    }

    setOtherLighting() {
        this.inputs = {};
        this.inputs.colorL = "#D16666";
        this.inputs.intensity = 10;
        //////////// left wall

        this.LrectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 2, 0.01);
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
        this.RrectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 2, 0.01);
        this.RrectLight.position.set(0, 1.1, -1.02);
        this.RrectLight.lookAt(0, 0.5, -0.5);
        this.scene.add(this.RrectLight);

        this.RrectLightHelper = new RectAreaLightHelper(this.RrectLight);
        this.RrectLight.add(this.RrectLightHelper);

        /////Corner Light
        this.CrectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 0.01, 0.5);
        this.CrectLight.position.set(-1.02, 0.4, -1.02);
        this.CrectLight.lookAt(0, 0.4, 0);
        this.scene.add(this.CrectLight);

        this.CrectLightHelper = new RectAreaLightHelper(this.CrectLight);
        this.CrectLight.add(this.CrectLightHelper);

        ///////TV light
        this.TVrectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 0.9, 0.4);
        this.TVrectLight.position.set(-1.02, 0.8, 0.3);
        this.TVrectLight.lookAt(-2, 0.8, 0.3);
        this.scene.add(this.TVrectLight);

        //this.TVrectLightHelper = new RectAreaLightHelper(this.TVrectLight);
        //this.TVrectLight.add(this.TVrectLightHelper);

        ////// Monitor light
        this.MRrectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 0.2, 0.1);
        this.MRrectLight.position.set(0, 0.7, -0.9);
        this.MRrectLight.lookAt(-0.5, 0.7, -2);
        this.scene.add(this.MRrectLight);

        /*this.MRrectLightHelper = new RectAreaLightHelper(this.MRrectLight);
        this.MRrectLight.add(this.MRrectLightHelper);*/

        this.MR1rectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 0.2, 0.1);
        this.MR1rectLight.position.set(0.5, 0.7, -0.9);
        this.MR1rectLight.lookAt(0.7, 0.7, -2);
        this.scene.add(this.MR1rectLight);

        /*this.MR1rectLightHelper = new RectAreaLightHelper(this.MR1rectLight);
        this.MR1rectLight.add(this.MR1rectLightHelper);*/

        /////////desk light
        this.DrectLight = new THREE.RectAreaLight(this.inputs.colorL, this.inputs.intensity, 0.8, 0.1);
        this.DrectLight.position.set(-0.9, 0.25, 0.3);
        this.DrectLight.lookAt(0, 0.25, 0.3);
        this.scene.add(this.DrectLight);

        if (this.debug) {
            this.debugFolder.addInput(
                this.inputs,
                'colorL',
                { view: 'color' }
            ).on('change', () => {
                this.RrectLight.color.set(this.inputs.colorL);
                this.LrectLight.color.set(this.inputs.colorL);
                this.CrectLight.color.set(this.inputs.colorL);
                this.TVrectLight.color.set(this.inputs.colorL);
                this.MRrectLight.color.set(this.inputs.colorL);
                this.MR1rectLight.color.set(this.inputs.colorL);
                this.DrectLight.color.set(this.inputs.colorL);
            });
            this.debugFolder.addInput(
                this.inputs,
                'intensity',
                { label: 'Intensity', min: 0, max: 20 }
            ).on('change', () => {
                this.RrectLight.intensity = this.inputs.intensity;
                this.LrectLight.intensity = this.inputs.intensity;
                this.CrectLight.intensity = this.inputs.intensity;
                this.TVrectLight.intensity = this.inputs.intensity;
                this.MRrectLight.intensity = this.inputs.intensity;
                this.MR1rectLight.intensity = this.inputs.intensity;
                this.DrectLight.intensity = this.inputs.intensity;
            });
        }
    }

    setFloor() {
        this.inp = {
            color: 0x000000
        };
        this.geometry = new THREE.PlaneGeometry(50, 50);
        this.material = new THREE.MeshStandardMaterial({
            color: 0x000000,
            side: THREE.BackSide,
        });
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.plane.rotation.x = Math.PI / 2;


        this.geometry1 = new THREE.PlaneGeometry(100, 20);
        this.material1 = new THREE.MeshStandardMaterial({
            color: 0x000000,
        });
        this.plane2 = new THREE.Mesh(this.geometry1, this.material1);
        this.plane2.rotation.y = Math.PI / 4;
        this.plane2.position.set(-5, 10, -5)

        this.scene.add(this.plane, this.plane2);

        if (this.debug) {
            this.debugFolder = this.debug.addFolder({
                title: 'background',
                expanded: false
            })

            this.debugFolder.addInput(
                this.inp,
                'color',
                { view: 'color' }
            ).on('change', () => {
                this.material.color.set(this.inp.color);
                this.material1.color.set(this.inp.color);
            });
        }




    };

    resize() { }

    update() { }
}