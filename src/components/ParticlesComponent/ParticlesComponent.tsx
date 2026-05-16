import React from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import type { Engine } from "@tsparticles/engine";

const particlesInit = async (engine: Engine): Promise<void> => {
  await loadStarsPreset(engine);
};

const particlesOptions = {
  fullScreen: true,
  preset: "stars",
} as const;

export function ParticlesComponent() {
  return (
    <ParticlesProvider init={particlesInit}>
      <Particles options={particlesOptions} />
    </ParticlesProvider>
  );
}
