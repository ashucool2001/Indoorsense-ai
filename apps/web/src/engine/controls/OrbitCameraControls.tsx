import { OrbitControls } from '@react-three/drei'
import { CAMERA_CONFIG } from '@/config/scene.config'
import { useCameraStore } from '@/stores/camera.store'

export function OrbitCameraControls() {
  const camera = useCameraStore((state) => state.camera)

  return (
    <OrbitControls
      target={camera.target}
      enableDamping
      dampingFactor={0.08}
      minDistance={CAMERA_CONFIG.minDistance}
      maxDistance={CAMERA_CONFIG.maxDistance}
      maxPolarAngle={CAMERA_CONFIG.maxPolarAngle}
      screenSpacePanning={false}
      makeDefault
    />
  )
}
