import { LIGHT_CONFIG } from '@/config/scene.config'

export function OfficeLights() {
  return (
    <>
      <ambientLight intensity={LIGHT_CONFIG.ambientIntensity} />
      <hemisphereLight
        args={[
          LIGHT_CONFIG.hemisphere.skyColor,
          LIGHT_CONFIG.hemisphere.groundColor,
          LIGHT_CONFIG.hemisphere.intensity,
        ]}
      />
      <directionalLight
        castShadow
        color={LIGHT_CONFIG.directional.color}
        intensity={LIGHT_CONFIG.directional.intensity}
        position={LIGHT_CONFIG.directional.position}
        shadow-mapSize={LIGHT_CONFIG.directional.shadowMapSize}
        shadow-camera-left={-LIGHT_CONFIG.directional.shadowCameraSize}
        shadow-camera-right={LIGHT_CONFIG.directional.shadowCameraSize}
        shadow-camera-top={LIGHT_CONFIG.directional.shadowCameraSize}
        shadow-camera-bottom={-LIGHT_CONFIG.directional.shadowCameraSize}
      />
      {LIGHT_CONFIG.accentLights.map((light) => (
        <pointLight
          color={light.color}
          distance={light.distance}
          intensity={light.intensity}
          key={light.color}
          position={light.position}
        />
      ))}
    </>
  )
}
