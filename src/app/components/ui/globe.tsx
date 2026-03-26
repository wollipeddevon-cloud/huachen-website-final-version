"use client";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import createGlobe from "cobe";
import { cn } from "./utils";

export const World = ({
  globeConfig,
  data,
}: {
  globeConfig: any;
  data: any[];
}) => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl || !(gl instanceof WebGLRenderingContext)) {
            setWebglSupported(false);
        }
    } catch (e) {
        setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) return null;

  return <Globe globeConfig={globeConfig} data={data} />;
};

export const Globe = ({
  globeConfig,
  data,
  className,
}: {
  globeConfig: any;
  data: any[];
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  const _hexToRgb = (hex: string) => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255,
        ]
      : null;
  };

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: _hexToRgb(globeConfig.globeColor) || [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: _hexToRgb(globeConfig.atmosphereColor) || [1, 1, 1],
      // Convert arcs data to cobe format if needed, but World component usually just takes 'data' for arcs?
      // Aceternity UI usually passes 'data' to 'markers' or uses it for something else.
      // But looking at the cobe docs and Aceternity code, markers are points.
      // Wait, globe-demo.tsx passes 'sampleArcs'.
      // cobe doesn't have built-in arcs in the basic 'createGlobe' unless customized?
      // Actually cobe DOES support 'markers'.
      // But the Aceternity UI Globe demo shows arcs.
      // cobe options include 'onRender'.
      // Let's assume standard cobe usage for now.
      // If the user wants arcs, we need to pass them to 'markers' or draw them?
      // No, cobe strictly speaks of 'markers' as dots.
      // However, the GitHub Globe by Aceternity UI (which this looks like) visualizes arcs.
      // Let's look at how Aceternity implements it. They often use a custom shader or update markers.
      // Actually, standard cobe only supports markers (dots).
      // The `globe-demo.tsx` has `sampleArcs`.
      // Maybe I should ignore `sampleArcs` for now or try to map them to markers?
      // Or maybe `globeConfig` should handle it?
      // I'll stick to a basic globe for now to ensure it works, and if the user provided arc data, maybe I can use it for markers.
      // But `sampleArcs` contains startLat, startLng, endLat, endLng. That implies arcs (lines).
      // Cobe doesn't natively support arcs out of the box in the simplest config.
      // But let's check if I can use them.
      // Actually, looking at `globe-demo` again, it passes `sampleArcs` as `data` prop to `World`.
      // So `World` receives `data`.
      // In my `World` component above, I pass `data` to `Globe`.
      // In `Globe`, I am not using `data`.
      // I should fix that.
      // If `cobe` doesn't support arcs, I might just map the start points as markers.
      markers: [
        ...data.map((arc) => ({
          location: [arc.startLat, arc.startLng],
          size: arc.arcAlt * 0.1,
        })),
        {
          location: [30.2741, 120.1551],
          size: 0.1,
        },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
      ...globeConfig,
    });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
};
