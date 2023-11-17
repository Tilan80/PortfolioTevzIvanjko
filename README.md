# Portfolio_TevzIvanjko

![Blender room](/Examples/Blender.png)
![View1](/Examples/View1.png)
![View2](/Examples/view2.png)
![View3](/Examples/view3.png)
 
## Blender Room Visualization
For the creation of the room, Blender was utilized. The room was designed to represent various aspects of my interests, including computer games, sports, music, computer-based creativity, and more. The process began with the modeling of different elements, ranging from simple to complex. Various modeling techniques were employed to ensure diversity in the types of models. Once satisfied with the models, colors and textures were added.

Upon completion, the model was exported in .glb format using DRACO compression.

## Three.js Implementation
The implementation into the website was accomplished using Three.js, with the assistance of the Vite package for project support. Vite automatically loaded the necessary components for project initiation and programming.

The scene components were organized into different sections:

Html: Utilizing only the canvas bound to Three.js, along with four components comprising the portfolio (project descriptions, hobbies, skills, and education).
Css: Used for basic styling and defining z-index to ensure that non-canvas components are hidden behind it.
Three.js Scene: Further divided into essential parts:
Experience.js: The main JavaScript file connecting all others, enabling each linked component to call one another.
Basics: Handling camera and rendering.
Scene Creation: Comprising environment, room, clickable squares, and other fundamental scene elements.
Add-ons: Files for obtaining the room in .glb format, screen size, and elapsed time.
###Experience.js
This file serves as the linking file between HTML and all JavaScript files, establishing the scene and enabling mutual calls among Three.js files.

### Basics
Two files, Camera.js and Renderer.js, establish the camera and rendering for the Three.js scene. A perspective camera with basic movement options was used.

### Add-ons
These files import the room in .glb format (assets.js) and decompress it with the DRACO filter (resources.js). The sizes.js file stores screen size data and calculates canvas size changes. The Time.js file manages scene elapsed time, ensuring continuous updates.

### Scene Creation
In Room.js, the decompressed and imported 3D room model is customized for each element to cast and receive shadows. It is then sent to World.js, where initialization and addition to the scene occur. Clickables.js contains data on newly added cubes with wireframes, and effects are applied when the cursor hovers over them using raycasting.

Environment.js is responsible for defining all lights and illumination. "LED" lights in the scene (on the walls, behind the TV, and computer) are added through Three.js in this file. Through the Tweakpane API, color and intensity adjustments for all added lights were implemented.
