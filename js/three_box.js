			const scene2 = new THREE.Scene();
			const camera2 = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

      const canvas = document.querySelector('.canvas2');
      const renderer2 = new THREE.WebGLRenderer({canvas: canvas, alpha: true});

      const radius =  1.4;
      const tubeRadius =  0.6;
      const radialSegments = 10;
      const tubularSegments =  40;
      const p =  2;
      const q =  1;

      const geometry = new THREE.TorusKnotGeometry(
        radius, tubeRadius, tubularSegments, radialSegments, p, q);

			// const geometry = new THREE.BoxGeometry();
			 const material2 = new THREE.MeshBasicMaterial( { color: 0xff1111, wireframe: true } );
      // const material2 = new THREE.MeshPhongMaterial({color: 0xFFFFFF, wireframe: true});

			const cube = new THREE.Mesh( geometry, material2 );
			scene2.add( cube );

      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene2.add(light);
      camera2.position.z = 5;

			const animate2 = function () {
				requestAnimationFrame( animate2 );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer2.render( scene2, camera2 );
			};

			animate2();
