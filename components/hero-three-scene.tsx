"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const PRECISE_POINTER_QUERY = "(pointer: fine)";

const SYSTEM_LAYERS = [
  {
    color: "#c084fc",
    emissive: "#43145a",
    y: 1.32,
    node: [1.06, 0.13, 0.5] as const,
  },
  {
    color: "#8b5cf6",
    emissive: "#39144f",
    y: 0.45,
    node: [-1.02, 0.13, -0.48] as const,
  },
  {
    color: "#8f51c2",
    emissive: "#321340",
    y: -0.42,
    node: [1.02, 0.13, -0.48] as const,
  },
  {
    color: "#7131ad",
    emissive: "#281037",
    y: -1.29,
    node: [-1.06, 0.13, 0.5] as const,
  },
] as const;

function createSeededRandom(seed = 29) {
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
    renderer.toneMappingExposure = 1.08;
    renderer.domElement.className = "three-scene-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0.15, 0.42, 8.4);
    camera.lookAt(0, -0.08, 0);

    const system = new THREE.Group();
    system.rotation.set(-0.13, -0.42, -0.025);
    scene.add(system);

    const slabGeometry = new THREE.BoxGeometry(2.82, 0.16, 1.62);
    const edgeGeometry = new THREE.EdgesGeometry(slabGeometry, 20);
    const nodeGeometry = new THREE.SphereGeometry(0.09, 14, 14);
    const moduleGeometry = new THREE.BoxGeometry(0.52, 0.045, 0.29);
    const layerNodes: THREE.Mesh[] = [];

    SYSTEM_LAYERS.forEach((config) => {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(config.color),
        emissive: new THREE.Color(config.emissive),
        emissiveIntensity: 0.68,
        metalness: 0.16,
        roughness: 0.28,
        transparent: true,
        opacity: 0.9,
      });
      const layer = new THREE.Mesh(slabGeometry, material);
      layer.position.y = config.y;

      const edgeMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color("#d8d5ff"),
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
      });
      const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      layer.add(edges);

      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffffff"),
        emissive: new THREE.Color(config.color),
        emissiveIntensity: 2.6,
        metalness: 0.05,
        roughness: 0.18,
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(config.node[0], config.node[1], config.node[2]);
      layer.add(node);

      system.add(layer);
      layerNodes.push(node);
    });

    const moduleMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    });
    const modules = new THREE.InstancedMesh(moduleGeometry, moduleMaterial, 12);
    const moduleTransform = new THREE.Object3D();
    let moduleIndex = 0;

    SYSTEM_LAYERS.forEach((layer, layerIndex) => {
      [-0.82, 0, 0.82].forEach((x, itemIndex) => {
        moduleTransform.position.set(
          x,
          layer.y + 0.115,
          itemIndex === 1 ? 0.22 : -0.2,
        );
        moduleTransform.scale.set(itemIndex === 1 ? 1.1 : 0.82, 1, 1);
        moduleTransform.updateMatrix();
        modules.setMatrixAt(moduleIndex, moduleTransform.matrix);
        modules.setColorAt(
          moduleIndex,
          new THREE.Color(SYSTEM_LAYERS[layerIndex].color),
        );
        moduleIndex += 1;
      });
    });
    modules.instanceMatrix.needsUpdate = true;
    if (modules.instanceColor) modules.instanceColor.needsUpdate = true;
    system.add(modules);

    const spineGeometry = new THREE.CylinderGeometry(0.022, 0.022, 2.72, 10);
    const spineMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#c79add"),
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    });
    const spine = new THREE.Mesh(spineGeometry, spineMaterial);
    spine.position.z = 0.04;
    system.add(spine);

    const packetGeometry = new THREE.SphereGeometry(0.052, 12, 12);
    const packetMaterials = [
      new THREE.MeshBasicMaterial({ color: "#f0abfc" }),
      new THREE.MeshBasicMaterial({ color: "#c4b5fd" }),
      new THREE.MeshBasicMaterial({ color: "#a855f7" }),
    ];
    const packets = packetMaterials.map((material, index) => {
      const packet = new THREE.Mesh(packetGeometry, material);
      const initialProgress = index / packetMaterials.length;
      packet.position.set(0, -1.3 + initialProgress * 2.62, 0.06);
      system.add(packet);
      return packet;
    });

    const random = createSeededRandom();
    const pointCount = window.innerWidth < 640 ? 70 : 120;
    const pointPositions = new Float32Array(pointCount * 3);

    for (let index = 0; index < pointCount; index += 1) {
      pointPositions[index * 3] = (random() - 0.5) * 7.2;
      pointPositions[index * 3 + 1] = (random() - 0.5) * 6.6;
      pointPositions[index * 3 + 2] = -1.6 - random() * 2.8;
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(pointPositions, 3),
    );
    const pointMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#a78bfa"),
      size: 0.026,
      transparent: true,
      opacity: 0.42,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(points);

    const grid = new THREE.GridHelper(7.2, 16, "#7131ad", "#2f183e");
    grid.position.set(0, -1.75, -0.5);
    const gridMaterials = Array.isArray(grid.material)
      ? grid.material
      : [grid.material];
    gridMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0.12;
      material.depthWrite = false;
    });
    scene.add(grid);

    scene.add(new THREE.AmbientLight("#d8d5ff", 1.6));
    const violetLight = new THREE.PointLight("#8b5cf6", 14, 16, 2);
    violetLight.position.set(-3.2, 3.1, 4.2);
    scene.add(violetLight);
    const violetFill = new THREE.PointLight("#b76ae3", 13, 16, 2);
    violetFill.position.set(3.2, -2.4, 3.5);
    scene.add(violetFill);

    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    const timer = new THREE.Timer();
    let isLoopRunning = false;
    let lastRenderedAt = 0;
    const frameInterval = 1000 / 45;

    const render = () => renderer.render(scene, camera);

    const animate = (time: number) => {
      if (lastRenderedAt && time - lastRenderedAt < frameInterval) return;
      lastRenderedAt = time - ((time - lastRenderedAt) % frameInterval);
      timer.update(time);
      const elapsed = timer.getElapsed();
      const delta = Math.min(timer.getDelta(), 0.05);
      pointer.x = THREE.MathUtils.damp(pointer.x, pointerTarget.x, 3, delta);
      pointer.y = THREE.MathUtils.damp(pointer.y, pointerTarget.y, 3, delta);

      system.rotation.y =
        -0.42 + Math.sin(elapsed * 0.22) * 0.025 + pointer.x * 0.12;
      system.rotation.x = -0.13 - pointer.y * 0.085;
      system.position.y = Math.sin(elapsed * 0.48) * 0.025;
      points.rotation.z = Math.sin(elapsed * 0.08) * 0.018;

      packets.forEach((packet, index) => {
        const progress = (elapsed * 0.16 + index / packets.length) % 1;
        packet.position.y = -1.3 + progress * 2.62;
        packet.position.x = Math.sin(progress * Math.PI * 2 + index) * 0.045;
        packet.scale.setScalar(0.82 + Math.sin(elapsed * 2.2 + index) * 0.16);
      });

      layerNodes.forEach((node, index) => {
        node.scale.setScalar(
          0.88 + Math.sin(elapsed * 1.8 + index * 0.9) * 0.13,
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
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, width < 480 ? 1.25 : 1.5),
      );
      renderer.setSize(width, height, false);
      system.scale.setScalar(width < 420 ? 0.88 : 1);
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

      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      scene.traverse((object) => {
        const renderable = object as THREE.Object3D & {
          geometry?: THREE.BufferGeometry;
          material?: THREE.Material | THREE.Material[];
        };
        if (renderable.geometry) geometries.add(renderable.geometry);
        if (Array.isArray(renderable.material)) {
          renderable.material.forEach((material) => materials.add(material));
        } else if (renderable.material) {
          materials.add(renderable.material);
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());

      timer.dispose();
      renderer.renderLists.dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
}
