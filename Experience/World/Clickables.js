import Experience from "../Experience.js";
import * as THREE from "three";


export default class Clickables {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.camera = this.experience.camera.perspectiveCamera;
        this.renderer = this.experience.renderer;

        this.setObjects();


    }

    setObjects() {

        this.geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
        this.material = new THREE.MeshBasicMaterial({ color: 0xD16666 });
        this.material.wireframe = true;

        this.cubeHob = new THREE.Mesh(this.geometry, this.material);
        this.cubeHob.position.set(-0.7, 1, -0.5);

        this.geometry1 = new THREE.BoxGeometry(0.05, 0.05, 0.05);
        this.material1 = new THREE.MeshBasicMaterial({ color: 0xD16666 });
        this.material1.wireframe = true;
        this.cubeProj = new THREE.Mesh(this.geometry1, this.material1);
        this.cubeProj.position.set(0.1, 0.6, -0.6);


        this.geometry2 = new THREE.BoxGeometry(0.05, 0.05, 0.05);
        this.material2 = new THREE.MeshBasicMaterial({ color: 0xD16666 });
        this.material2.wireframe = true;
        this.cubeLang = new THREE.Mesh(this.geometry2, this.material2);
        this.cubeLang.position.set(-0.7, 0.7, 0.1);


        this.geometry3 = new THREE.BoxGeometry(0.05, 0.05, 0.05);
        this.material3 = new THREE.MeshBasicMaterial({ color: 0xD16666 });
        this.material3.wireframe = true;
        this.cubeEdu = new THREE.Mesh(this.geometry3, this.material3);
        this.cubeEdu.position.set(0.7, 1, -1);

        let cubes = [this.cubeHob, this.cubeProj, this.cubeLang, this.cubeEdu];
        let cubeHob = [this.cubeHob];
        let cubeProj = [this.cubeProj];
        let cubeLang = [this.cubeLang];
        let cubeEdu = [this.cubeEdu];

        this.scene.add(this.cubeHob, this.cubeProj, this.cubeLang, this.cubeEdu);

        ////////////////////////raycasting

        const pointer = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();


        window.addEventListener('pointermove', (event) => {
            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            //console.log(pointer.x + "\n" + pointer.y);
            //console.log("Looking");

            // update the picking ray with the camera and pointer position
            raycaster.setFromCamera(pointer, this.camera);
            cubes.forEach((cube) => {
                cube.material.color.set(0xD16666);
                cube.scale.set(1, 1, 1);
            })
            // calculate objects intersecting the picking ray
            const intersects = raycaster.intersectObjects(cubes, false);
            for (let i = 0; i < intersects.length; i++) {
                console.log("on");
                intersects[i].object.material.color.set(0xff0000);
                intersects[i].object.scale.set(2, 2, 2);

            }

        });

        window.addEventListener('pointerdown', (event) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            //console.log(pointer.x + "\n" + pointer.y);
            //console.log("Looking");

            // update the picking ray with the camera and pointer position
            raycaster.setFromCamera(pointer, this.camera);

            // calculate objects intersecting the picking ray
            const intersects = raycaster.intersectObjects(cubeHob, false);
            if (0 < intersects.length) {
                intersects[0].object.material.color.set(0x00ff00);
                let elem = document.getElementById("click0");
                elem.style.zIndex = 7;
            }
            const intersects1 = raycaster.intersectObjects(cubeProj, false);
            if (0 < intersects1.length) {
                intersects1[0].object.material.color.set(0x00ff00);
                let elem = document.getElementById("click1");
                elem.style.zIndex = 7;
            }
            const intersects2 = raycaster.intersectObjects(cubeLang, false);
            if (0 < intersects2.length) {
                intersects2[0].object.material.color.set(0x00ff00);
                let elem = document.getElementById("click2");
                elem.style.zIndex = 7;
            }
            const intersects3 = raycaster.intersectObjects(cubeEdu, false);
            if (0 < intersects3.length) {
                intersects3[0].object.material.color.set(0x00ff00);
                let elem = document.getElementById("click3");
                elem.style.zIndex = 7;
            }



        })


    }


    resize() { };

    update() { };
}