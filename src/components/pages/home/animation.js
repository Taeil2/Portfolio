import * as three from 'three';

var camera, scene, renderer;
var geometry, material, mesh;
let animationRun = false;

function init() {
  let container = document.getElementById('animation');

  camera = new three.PerspectiveCamera( 70, container.offsetWidth / container.offsetHeight, 0.01, 10 );
  camera.position.z = 1;

  scene = new three.Scene();

  geometry = new three.BoxGeometry( 0.4, 0.4, 0.4 );
  material = new three.MeshPhongMaterial({color: 0xB7513C, flatShading: true });

  // geometry = new three.IcosahedronGeometry( 1, 0 );
  // material = new three.MeshDistanceMaterial();

  mesh = new three.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new three.WebGLRenderer( { alpha: true, antialias: true } );
  renderer.setSize( container.offsetWidth, container.offsetHeight );
  // renderer.setClearColor( 0x212121 );
  container.appendChild( renderer.domElement );
}

function animate() {
  requestAnimationFrame( animate );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.015;

  renderer.render( scene, camera );
}

export default {
  init,
  animate,
  animationRun
};
