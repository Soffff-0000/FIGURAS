const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFB3FF);
scene.fog = new THREE.Fog(0x000000, 0.5, 80)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 30;

function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;

	renderer.render( scene, camera );
}
animate();