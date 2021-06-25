			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
      const canvas = document.querySelector('.scope_canvas');
      const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
      const radius =  1.4;
      const tubeRadius =  0.6;
      const radialSegments = 10;
      const tubularSegments =  40;
      const p =  2;
      const q =  1;
      let cube = null;

      export function init(){

        const geometry = new THREE.TorusKnotGeometry(
          radius, tubeRadius, tubularSegments, radialSegments, p, q);
  			const material = new THREE.MeshBasicMaterial( { color: 0xff1111, wireframe: true } );
  			cube = new THREE.Mesh( geometry, material );
  			scene.add( cube );
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
        camera.position.z = 5;
        animate();

      }

			const animate = function () {

				requestAnimationFrame( animate );
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				renderer.render( scene, camera );

			};
