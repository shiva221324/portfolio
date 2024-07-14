import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Specify the type for containerRef
  const animationRef = useRef<number | null>(null); // animationRef can be null initially
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return; // Add a null check

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Material for stars
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });

    // Geometry for stars
    const starGeometry = new THREE.BufferGeometry();
    const numStars = 500; // Number of stars
    const positions = new Float32Array(numStars * 3);
    const sizes = new Float32Array(numStars);

    for (let i = 0; i < numStars; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = Math.random() * 2000 - 1000; // Random z position
      sizes[i] = 1; // Initial size for all stars
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Create stars mesh
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      stars.rotation.z += 0.001; // Rotate stars slowly

      // Move stars towards the screen
      for (let i = 0; i < numStars; i++) {
        positions[i * 3 + 2] -= 0.5; // Decrease z-coordinate
        if (positions[i * 3 + 2] < -1000) {
          positions[i * 3 + 2] = 1000; // Reset position if star moves too far
        }
      }
      starGeometry.attributes.position.needsUpdate = true; // Update buffer geometry

      // Update point sizes based on distance from camera
      stars.material.sizeAttenuation = false;
      stars.material.needsUpdate = true;
      const pointSizes = sizes;
      const cameraPos = camera.position;
      for (let i = 0; i < numStars; i++) {
        const starPos = new THREE.Vector3(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2]
        );
        const distance = cameraPos.distanceTo(starPos);
        pointSizes[i] = Math.min(2, Math.max(0.1, 500 / distance)); // Adjust this range for desired point size
      }
      starGeometry.attributes.size.array = pointSizes;
      starGeometry.attributes.size.needsUpdate = true;
    };

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;

      const targetPosition = new THREE.Vector3(
        mouseX.current * 100,
        mouseY.current * 100,
        1000
      );
      camera.lookAt(targetPosition);
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Adjust camera aspect ratio and position
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div
      className=" starfield "
      // className="w-[88%] fixed m-auto overflow-hidden top-0 left-7 lg:left-[7rem] h-full pointer-events-none"
      ref={containerRef}
    />
  );
};

export default StarField;
