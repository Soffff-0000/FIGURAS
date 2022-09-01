const scene = new THREE.Scene();
scene.background = new THREE.Color(0x357C52);
scene.fog = new THREE.Fog(0x000000, 0.5, 80)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xF9FF98 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 30;


function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

	renderer.render( scene, camera );
}
animate();