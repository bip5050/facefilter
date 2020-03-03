var camera, scene, renderer;
var mesh, eyeMesh, eyebrowMesh;

var faceShape = []
var currentFaceShape = 0;

var eyeShape = []
var currentEyeShape = 0;

var count = 0;

function initFaceShapes() {
    var lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5 } );
    var meshMaterial = new THREE.MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true } );
    var face_y = 4

    // cube
    var cubeGroup = new THREE.Group();
    var cube = new THREE.BoxBufferGeometry( 8, 8, 8 );
    cubeGroup.add( new THREE.Mesh( cube, meshMaterial ) );
    cubeGroup.position.set(0, face_y, 0)
    faceShape.push(cubeGroup)

    // icosahedron
    var icosGroup = new THREE.Group();
    var icos = new THREE.IcosahedronGeometry( 8, 0 );
    icosGroup.add( new THREE.Mesh( icos, meshMaterial ) );
    icosGroup.position.set(0, face_y, 0)
    faceShape.push(icosGroup)
    
    // sphere
    var sphereGroup = new THREE.Group();
    var sphere = new THREE.SphereGeometry( 5, 10, 8 );
    sphereGroup.add( new THREE.Mesh( sphere, meshMaterial ) );
    sphereGroup.position.set(0, face_y, 0)
    faceShape.push(sphereGroup)

    // cone
    var coneGroup = new THREE.Group();
    var cone = new THREE.ConeGeometry( 6, 10, 10 );
    coneGroup.add( new THREE.Mesh( cone, meshMaterial ) );
    coneGroup.position.set(0, face_y, 0)
    faceShape.push(coneGroup)
    
    return cubeGroup;
}

function initEyeShapes() {
    var lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5 } );
    var meshMaterial = new THREE.MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true } );
    var eye_y = -8
    
    // tetrahedron
    var tetraGroup = new THREE.Group();
    var tetra = new THREE.TetrahedronGeometry( 5, 0 );
    tetraGroup.add( new THREE.Mesh( tetra, meshMaterial ) );
    tetraGroup.position.set(0, eye_y, 0)
    eyeShape.push(tetraGroup)

    // icosahedron
    var icosGroup = new THREE.Group();
    var icos = new THREE.IcosahedronGeometry( 5, 0 );
    icosGroup.add( new THREE.Mesh( icos, meshMaterial ) );
    icosGroup.position.set(0, eye_y, 0)
    eyeShape.push(icosGroup)
    
    // octahedron
    var octGroup = new THREE.Group();
    var oct = new THREE.OctahedronGeometry( 5, 0 );
    octGroup.add( new THREE.Mesh( oct, meshMaterial ) );
    octGroup.position.set(0, eye_y, 0)
    eyeShape.push(octGroup)

    // torus
    var torusGroup = new THREE.Group();
    var torus = new THREE.TorusGeometry( 4, 2, 8, 10 );
    torusGroup.add( new THREE.Mesh( torus, meshMaterial ) );
    torusGroup.position.set(0, eye_y, 0)
    eyeShape.push(torusGroup)
    
    return tetraGroup;
}

function initEyebrowShapes() {
    var lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5 } );
    var meshMaterial = new THREE.MeshPhongMaterial( { color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true } );
    
    // torus
    var torusGroup = new THREE.Group();
    var torus = new THREE.TorusGeometry( 4.5, 2, 8, 16 );
    var torusMesh = new THREE.Mesh( torus, meshMaterial );
    torusMesh.rotation.set(90, 0, 0);
    torusGroup.add( torusMesh );

    return torusGroup;
}

function init() {
    camera = new THREE.PerspectiveCamera( 70, 640 / 480, 1, 1000 );
    camera.position.z = 40;
    scene = new THREE.Scene();
    
    var lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    scene.add( lights[ 0 ] );
    scene.add( lights[ 1 ] );
    scene.add( lights[ 2 ] );
    
    mesh = initFaceShapes();
    scene.add( mesh );

    eyeMesh = initEyeShapes();
    scene.add( eyeMesh );
    
    eyebrowMesh = initEyebrowShapes();
    scene.add( eyebrowMesh );

    var canvas = document.querySelector('#webgl-canvas');
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( 640/480 );
    renderer.setSize( 640, 480 );
    document.querySelector('#webgl-canvas').appendChild( renderer.domElement );
}