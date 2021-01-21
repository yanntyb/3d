import * as Tree from './three.js'


let movekey = false;
let x = 0;
let y = 0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.autoClearColor = false;
renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );


camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    camera.position.z -=0.02;
    if((Math.ceil(camera.position.z*-100))%40 === 0){

        displayArrayObject(defineArrayObject(1))
    }
}

function defineArrayObject(number){
    console.log("ok")
    let tab = [];
    for(let i = 0; i< number; i++){
        let geometry = new THREE.BoxGeometry();
        let material = new THREE.MeshBasicMaterial( { color: "#" + Math.floor(Math.random()*16777215).toString(16) } );
        let cube = new THREE.Mesh( geometry, material );
        cube.position.x = camera.position.x + Math.ceil(Math.random() * 20) - 10;
        cube.position.y = camera.position.y +Math.ceil(Math.random() * 10) - 5;
        cube.position.z = camera.position.z - 10;
        cube.name = Math.random();
        tab.push(cube);
    }
    return tab;
}

function displayArrayObject(array){
    for(let i of array){
        i.addEventListener("click",function(){
            console.log(this)
        })
        scene.add(i);
    }
}

function moveCamera(){
    $("body").keydown((e)=>{
        switch(e.key){
            case "q":
                camera.rotation.y += 0.03;
                break;
            case "d":
                camera.rotation.y -= 0.03;
                break;
            case "z":
                camera.position.y += 0.03;
                break;
            case "s":
                camera.position.y -= 0.03;
                break;
        }
    })
}

let tab = defineArrayObject(1);
displayArrayObject(tab);



animate(tab);
moveCamera();
