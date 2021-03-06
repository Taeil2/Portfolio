import * as THREE from 'three';

var camera, scene, renderer;
var geometry, material, mesh;
let animationRun = false;

function init() {
  let container = document.getElementById('animation');

  camera = new THREE.PerspectiveCamera( 70, container.offsetWidth / container.offsetHeight, 0.01, 10 );
  camera.position.z = 1;

  scene = new THREE.Scene();

  const frontSpot = new THREE.SpotLight(0xdddddd);
  frontSpot.position.set(-150, 350, 1000);
  scene.add(frontSpot);

  // geometry = new THREE.OctahedronGeometry( 0.5, 0 );
  geometry = new THREE.DodecahedronGeometry( 0.5, 0 );
  // geometry = new THREE.IcosahedronGeometry( 0.5, 0 );

  let orange = 0xFFA726;
  let yellow = 0xFFEB3B;
  let red = 0xE65100;
  let blue = 0x3381FF;
  let purple = 0x8B44EE;
  let green = 0x3381FF;
  // let colors = [orange, yellow, red, orange, yellow, red, orange, yellow, red, orange, yellow, red];
  let colors = [orange, yellow, red, blue, purple, green, orange, yellow, red, blue, purple, green];
  // let colors = [red, blue, purple, orange, 0x000000, 0x000000, purple, 0xffffff, yellow, green, blue, red];
  let j = -1;
  for ( var i = 0; i < geometry.faces.length; i++ ) {
    if (i % 3 === 0) {
      j++;
    }
    geometry.faces[ i ].color.setHex( colors[j] );
  }
  material = new THREE.MeshPhongMaterial({color: 0xffffff, vertexColors: true, flatShading: true });


  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
  renderer.setSize( container.offsetWidth, container.offsetHeight );
  // renderer.setClearColor( 0x212121 );
  container.appendChild( renderer.domElement );
}

function animate() {
  requestAnimationFrame( animate );

  mesh.rotation.x += 0.007;
  mesh.rotation.y += 0.005;

  renderer.render( scene, camera );
}

export default {
  init,
  animate,
  animationRun
};
