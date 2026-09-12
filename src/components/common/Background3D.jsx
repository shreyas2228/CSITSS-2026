import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './Background3D.css';

export default function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    // Deep executive tech fog for depth attenuation
    scene.fog = new THREE.FogExp2(0x040816, 0.00085);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2500
    );
    camera.position.set(0, 120, 480);

    // 2. WebGL Renderer with High-Performance Settings
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x040816, 1);
    container.appendChild(renderer.domElement);

    // 3. Dynamic Undulating 3D Cyber Wave Mesh (Topological Grid)
    const gridWidth = 1400;
    const gridDepth = 1400;
    const gridSegX = 64;
    const gridSegY = 64;
    const planeGeo = new THREE.PlaneGeometry(gridWidth, gridDepth, gridSegX, gridSegY);
    planeGeo.rotateX(-Math.PI / 2);

    // Store base positions for dynamic vertex wave calculations
    const posAttribute = planeGeo.attributes.position;
    const basePositions = posAttribute.array.slice();

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x00b4d8,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const waveMesh = new THREE.Mesh(planeGeo, planeMat);
    waveMesh.position.set(0, -180, -200);
    scene.add(waveMesh);

    // 4. Floating 3D Wireframe Polyhedra
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    // Material with subtle glow for floating geometry
    const cyanWireMat = new THREE.MeshBasicMaterial({
      color: 0x00b4d8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    const blueWireMat = new THREE.MeshBasicMaterial({
      color: 0x00629b,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    const goldWireMat = new THREE.MeshBasicMaterial({
      color: 0xe0a96d,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });

    // Shape 1: 3D Icosahedron (Top Right)
    const icosahedronGeo = new THREE.IcosahedronGeometry(75, 1);
    const icosahedron = new THREE.Mesh(icosahedronGeo, cyanWireMat);
    icosahedron.position.set(380, 160, -180);
    shapesGroup.add(icosahedron);

    // Shape 2: 3D Torus Knot (Mid Left)
    const knotGeo = new THREE.TorusKnotGeometry(48, 14, 80, 16);
    const torusKnot = new THREE.Mesh(knotGeo, blueWireMat);
    torusKnot.position.set(-390, 80, -220);
    shapesGroup.add(torusKnot);

    // Shape 3: 3D Octahedron (Far Center Depth)
    const octaGeo = new THREE.OctahedronGeometry(55, 0);
    const octahedron = new THREE.Mesh(octaGeo, goldWireMat);
    octahedron.position.set(120, -60, -350);
    shapesGroup.add(octahedron);

    // Shape 4: 3D Dodecahedron (Bottom Right)
    const dodecaGeo = new THREE.DodecahedronGeometry(60, 0);
    const dodecahedron = new THREE.Mesh(dodecaGeo, cyanWireMat);
    dodecahedron.position.set(320, -140, -150);
    shapesGroup.add(dodecahedron);

    // 5. Deep Space 3D Particle Constellation
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00b4d8); // Electric Cyan
    const c2 = new THREE.Color(0x00629b); // IEEE Blue
    const c3 = new THREE.Color(0xffffff); // Star White

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 2000;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 1600;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 1600;

      const pickColor = Math.random() > 0.6 ? c1 : Math.random() > 0.3 ? c2 : c3;
      particleColors[idx] = pickColor.r;
      particleColors[idx + 1] = pickColor.g;
      particleColors[idx + 2] = pickColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 3.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse & Scroll Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.4;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll parallax tracking
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 7. Responsive Viewport Resize Handler
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 8. High-Performance Render Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Dynamic Camera Position with Scroll & Mouse Parallax
      const scrollOffset = scrollY * 0.15;
      camera.position.x = mouseX * 0.45;
      camera.position.y = 120 - mouseY * 0.45 - (scrollOffset % 300);
      camera.lookAt(0, -scrollOffset * 0.2, 0);

      // Rotate Floating 3D Polyhedra
      icosahedron.rotation.x = elapsedTime * 0.25;
      icosahedron.rotation.y = elapsedTime * 0.35;
      icosahedron.position.y = 160 + Math.sin(elapsedTime * 0.8) * 18;

      torusKnot.rotation.x = elapsedTime * 0.3;
      torusKnot.rotation.z = elapsedTime * 0.2;
      torusKnot.position.y = 80 + Math.cos(elapsedTime * 0.7) * 15;

      octahedron.rotation.y = elapsedTime * 0.4;
      octahedron.rotation.z = elapsedTime * 0.2;
      octahedron.position.y = -60 + Math.sin(elapsedTime * 1.1) * 12;

      dodecahedron.rotation.x = elapsedTime * 0.2;
      dodecahedron.rotation.y = elapsedTime * 0.3;
      dodecahedron.position.y = -140 + Math.cos(elapsedTime * 0.9) * 14;

      // Rotate Background Starfield slowly
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      // Animate 3D Undulating Cyber Wave Grid
      const positions = planeGeo.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const baseX = basePositions[i];
        const baseZ = basePositions[i + 2];
        // Mathematical wave interference with time
        const distance = Math.sqrt(baseX * baseX + baseZ * baseZ);
        positions[i + 1] =
          Math.sin(distance * 0.012 - elapsedTime * 1.6) * 22 +
          Math.cos(baseX * 0.015 + elapsedTime * 1.1) * 14;
      }
      planeGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      icosahedronGeo.dispose();
      knotGeo.dispose();
      octaGeo.dispose();
      dodecaGeo.dispose();
      cyanWireMat.dispose();
      blueWireMat.dispose();
      goldWireMat.dispose();
    };
  }, []);

  return (
    <div className="background-3d-root">
      {/* Three.js WebGL Canvas Mount Container */}
      <div ref={containerRef} className="background-3d-canvas-container" />

      {/* Radiant Deep-Space Ambient Atmospheric Glow Orbs */}
      <div className="bg-glow-orb bg-orb-top-left" />
      <div className="bg-glow-orb bg-orb-mid-right" />
      <div className="bg-glow-orb bg-orb-bottom-center" />

      {/* Cyber Grid Perspective Vignette */}
      <div className="bg-cyber-grid" />
    </div>
  );
}
