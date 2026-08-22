"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const PRECISE_POINTER_QUERY = "(pointer: fine)";

function createSeededRandom(seed = 17) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

export function HeroThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const precisePointerQuery = window.matchMedia(PRECISE_POINTER_QUERY);
    let reduceMotion = reduceMotionQuery.matches;
    let isVisible = true;
    let isDocumentVisible = !document.hidden;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "default",
      });
    } catch {
      return;
    }

    renderer.setClearAlpha(0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.domElement.className = "three-scene-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const system = new THREE.Group();
    system.rotation.set(-0.22, -0.3, 0.08);
    scene.add(system);

    const coreGeometry = new THREE.IcosahedronGeometry(1.36, 4);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#8b5cf6"),
      emissive: new THREE.Color("#28114f"),
      emissiveIntensity: 0.7,
      metalness: 0.2,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.16,
      iridescence: 0.72,
      iridescenceIOR: 1.7,
      iridescenceThicknessRange: [140, 640],
      flatShading: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    system.add(core);

    const shellGeometry = new THREE.IcosahedronGeometry(1.58, 2);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#60a5fa"),
      transparent: true,
      opacity: 0.16,
      wireframe: true,
      depthWrite: false,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    system.add(shell);

    const ringGeometryA = new THREE.TorusGeometry(2.18, 0.018, 8, 160);
    const ringGeometryB = new THREE.TorusGeometry(2.72, 0.012, 8, 180);
    const violetMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#a78bfa"),
      transparent: true,
      opacity: 0.54,
      depthWrite: false,
    });
    const blueMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#60a5fa"),
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
    });
    const ringA = new THREE.Mesh(ringGeometryA, violetMaterial);
    ringA.rotation.set(1.15, 0.28, -0.18);
    const ringB = new THREE.Mesh(ringGeometryB, blueMaterial);
    ringB.rotation.set(0.45, 1.12, 0.5);
    system.add(ringA, ringB);

    const nodeGeometry = new THREE.SphereGeometry(0.07, 14, 14);
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: "#c4b5fd" }),
      new THREE.MeshBasicMaterial({ color: "#7dd3fc" }),
    ];
    const nodes: THREE.Mesh[] = [];
    const nodePivots: THREE.Group[] = [];

    for (let index = 0; index < 7; index += 1) {
      const pivot = new THREE.Group();
      const node = new THREE.Mesh(nodeGeometry, nodeMaterials[index % 2]);
      const radius = index % 2 === 0 ? 2.18 : 2.72;
      node.position.set(radius, 0, 0);
      pivot.rotation.set(
        index * 0.47,
        index * 0.86,
        index * (Math.PI / 3.5),
      );
      pivot.add(node);
      system.add(pivot);
      nodes.push(node);
      nodePivots.push(pivot);
    }

    const random = createSeededRandom();
    const pointCount = window.innerWidth < 640 ? 100 : 180;
    const pointPositions = new Float32Array(pointCount * 3);

    for (let index = 0; index < pointCount; index += 1) {
      const radius = 3 + random() * 2.7;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      pointPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pointPositions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pointPositions[index * 3 + 2] = radius * Math.cos(phi);
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(pointPositions, 3),
    );
    const pointMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#a78bfa"),
      size: 0.022,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    system.add(points);

    scene.add(new THREE.AmbientLight("#c4b5fd", 1.8));
    const violetLight = new THREE.PointLight("#8b5cf6", 18, 18, 2);
    violetLight.position.set(-3.5, 2.8, 4.5);
    scene.add(violetLight);
    const blueLight = new THREE.PointLight("#38bdf8", 16, 18, 2);
    blueLight.position.set(3.8, -2.1, 3.5);
    scene.add(blueLight);

    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    const timer = new THREE.Timer();
    let isLoopRunning = false;
    let lastRenderedAt = 0;
    const frameInterval = 1000 / 60;

    const render = () => renderer.render(scene, camera);

    const animate = (time: number) => {
      if (lastRenderedAt && time - lastRenderedAt < frameInterval) return;
      lastRenderedAt = time - ((time - lastRenderedAt) % frameInterval);
      timer.update(time);
      const elapsed = timer.getElapsed();
      const delta = Math.min(timer.getDelta(), 0.05);
      pointer.x = THREE.MathUtils.damp(pointer.x, pointerTarget.x, 3, delta);
      pointer.y = THREE.MathUtils.damp(pointer.y, pointerTarget.y, 3, delta);

      system.rotation.y = -0.3 + elapsed * 0.075 + pointer.x * 0.16;
      system.rotation.x = -0.22 + Math.sin(elapsed * 0.42) * 0.045 - pointer.y * 0.12;
      core.rotation.y = elapsed * 0.16;
      core.rotation.x = elapsed * 0.09;
      shell.rotation.y = -elapsed * 0.11;
      shell.rotation.z = elapsed * 0.075;
      ringA.rotation.z = -0.18 + elapsed * 0.08;
      ringB.rotation.z = 0.5 - elapsed * 0.055;
      points.rotation.y = -elapsed * 0.018;

      nodePivots.forEach((pivot, index) => {
        pivot.rotation.z += (index % 2 === 0 ? 0.096 : -0.072) * delta;
        nodes[index].scale.setScalar(
          0.82 + Math.sin(elapsed * 1.7 + index) * 0.18,
        );
      });

      render();
    };

    const updateLoop = () => {
      const shouldAnimate = !reduceMotion && isVisible && isDocumentVisible;

      if (shouldAnimate && !isLoopRunning) {
        timer.reset();
        lastRenderedAt = 0;
        renderer.setAnimationLoop(animate);
        isLoopRunning = true;
      } else if (!shouldAnimate && isLoopRunning) {
        renderer.setAnimationLoop(null);
        isLoopRunning = false;
        render();
      } else if (!shouldAnimate) {
        render();
      }
    };

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      render();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!precisePointerQuery.matches || reduceMotion) return;
      const bounds = mount.getBoundingClientRect();
      pointerTarget.set(
        ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        -((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      );
    };

    const onPointerLeave = () => pointerTarget.set(0, 0);
    const onVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      updateLoop();
    };
    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      if (reduceMotion) {
        pointer.set(0, 0);
        pointerTarget.set(0, 0);
      }
      updateLoop();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    window.addEventListener("resize", resize, { passive: true });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? true;
        updateLoop();
      },
      { rootMargin: "100px" },
    );
    intersectionObserver.observe(mount);

    mount.addEventListener("pointermove", onPointerMove, { passive: true });
    mount.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reduceMotionQuery.addEventListener("change", onMotionPreferenceChange);

    resize();
    updateLoop();

    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reduceMotionQuery.removeEventListener("change", onMotionPreferenceChange);

      coreGeometry.dispose();
      coreMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      ringGeometryA.dispose();
      ringGeometryB.dispose();
      violetMaterial.dispose();
      blueMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterials.forEach((material) => material.dispose());
      pointGeometry.dispose();
      pointMaterial.dispose();
      timer.dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
