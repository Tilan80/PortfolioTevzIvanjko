import Experience from "../Experience.js";
import * as THREE from "three";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        console.log(this.actualRoom);

        this.setModel();
    }

    setModel() {

        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;

            if(child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            };
        });


        this.actualRoom.scale.set(0.2, 0.2, 0.2);
        this.scene.add(this.actualRoom);
        
    }


    resize() { };

    update() { };
}