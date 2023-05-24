import * as THREE from "three";

import { Pane } from 'tweakpane'

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";

import Camera from "./Camera.js";
//import Theme from "./Theme.js";
import Renderer from "./Renderer.js";
//import Preloader from "./Preloader.js";

import World from "./World/World.js";
//import Controls from "./World/Controls.js";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        //this.theme = new Theme();
        this.world = new World();
        //this.preloader = new Preloader();

        this.camera1 = this.camera.perspectiveCamera;

        /*this.preloader.on("enablecontrols", () => {
            this.controls = new Controls();
        });*/

        this.setConfig();
        this.setDebug();

        this.sizes.on("resize", () => {
            this.resize();
        });
        this.time.on("update", () => {
            this.update();
        });

    }





    setConfig() {
        this.config = {}

        // Pixel ratio
        this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2)

        // Width and height
        const boundings = this.canvas.getBoundingClientRect()
        this.config.width = boundings.width
        this.config.height = boundings.height || window.innerHeight
        this.config.smallestSide = Math.min(this.config.width, this.config.height)
        this.config.largestSide = Math.max(this.config.width, this.config.height)

        this.config.debug = this.config.width > 420
    }

    setDebug() {
        if (this.config.debug) {
            this.debug = new Pane();
            this.debug.containerElem_.style.width = '320px';
            this.debug.containerElem_.style.zIndex = 10;
        }
    }

    resize() {
        this.camera.resize();
        this.world.resize();
        this.renderer.resize();
    }

    update() {
        //this.preloader.update();
        this.camera.update();
        this.world.update();
        this.renderer.update();
        /*if (this.controls) {
            this.controls.update();
        }*/
    }
}