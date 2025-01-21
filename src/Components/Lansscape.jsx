import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ParallaxBarrierEffect } from 'three/addons/effects/ParallaxBarrierEffect.js';

const ParallaxBarrier = () => {
  const containerRef = useRef(null);
  const [spheres, setSpheres] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  useEffect(() => {
    const container = containerRef.current;
    let camera, scene, renderer, effect;

    const init = () => {
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);
      camera.position.z = 3;

      const path = 'textures/cube/pisa/';
      const format = '.png';
      const urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format,
      ];

      const textureCube = new THREE.CubeTextureLoader().load(urls);
      scene = new THREE.Scene();
      scene.background = textureCube;

      const geometry = new THREE.SphereGeometry(0.1, 32, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: textureCube });

      let tempSpheres = [];
      for (let i = 0; i < 500; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 10 - 5;
        mesh.position.y = Math.random() * 10 - 5;
        mesh.position.z = Math.random() * 10 - 5;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

        scene.add(mesh);
        tempSpheres.push(mesh);
      }
      setSpheres(tempSpheres);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      const width = window.innerWidth || 2;
      const height = window.innerHeight || 2;

      effect = new ParallaxBarrierEffect(renderer);
      effect.setSize(width, height);

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        effect.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', onWindowResize);

      const onDocumentMouseMove = (event) => {
        setMousePosition({
          x: (event.clientX - windowHalfX) / 100,
          y: (event.clientY - windowHalfY) / 100,
        });
      };
      
      document.addEventListener('mousemove', onDocumentMouseMove);

      const animate = () => {
        const timer = 0.0001 * Date.now();

        camera.position.x += (mousePosition.x - camera.position.x) * 0.05;
        camera.position.y += (-mousePosition.y - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        for (let i = 0, il = spheres.length; i < il; i++) {
          const sphere = spheres[i];
          sphere.position.x = 5 * Math.cos(timer + i);
          sphere.position.y = 5 * Math.sin(timer + i * 1.1);
        }

        effect.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    };

    init();

    return () => {
      // Cleanup event listeners and renderer
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      container.removeChild(renderer.domElement);
    };
  }, [spheres, mousePosition]);

  return (
    <div>
      <div id="info">
        <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> - effects - parallax barrier<br/>
        skybox by <a href="https://www.pauldebevec.com/" target="_blank" rel="noopener">Paul Debevec</a>
      </div>
      <div ref={containerRef} />
    </div>
  );
};

export default ParallaxBarrier;
