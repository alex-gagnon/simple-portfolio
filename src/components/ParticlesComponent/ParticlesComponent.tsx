import React from "react";
import Particles, { IParticlesProps } from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";


export class ParticlesComponent extends React.PureComponent<IParticlesProps> {
    // this customizes the component tsParticles installation
    async particlesInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
        fullScreen: true,
        preset: "stars",
    };

    return <Particles options={options} init={this.particlesInit} />;
  }
}