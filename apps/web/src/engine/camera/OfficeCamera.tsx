import { PerspectiveCamera } from '@react-three/drei'
import { CAMERA_CONFIG } from '@/config/scene.config'
import { useCameraStore } from '@/stores/camera.store'

export function OfficeCamera() {
  const camera = useCameraStore((state) => state.camera)

  return (
    <PerspectiveCamera
      makeDefault
      fov={CAMERA_CONFIG.fov}
      near={CAMERA_CONFIG.near}
      far={CAMERA_CONFIG.far}
      position={camera.position}
    />
  )
}
