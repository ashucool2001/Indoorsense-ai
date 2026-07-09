import { CAMERA_CONFIG } from '@/config/scene.config'
import type { CameraFocusTarget, CameraFrame, OfficeBounds } from '@/types/office.types'
import type { Vector3Tuple } from '@/types/scene.types'

export function getCameraFrameFromBounds(bounds: OfficeBounds): CameraFrame {
  const width = bounds.maxX - bounds.minX
  const depth = bounds.maxZ - bounds.minZ
  const size = Math.max(width, depth) * CAMERA_CONFIG.framePadding
  const target: Vector3Tuple = [(bounds.minX + bounds.maxX) / 2, 0, (bounds.minZ + bounds.maxZ) / 2]

  return {
    position: [
      target[0] + size * CAMERA_CONFIG.frameOffset.x,
      size * CAMERA_CONFIG.frameOffset.y,
      target[2] + size * CAMERA_CONFIG.frameOffset.z,
    ],
    target,
  }
}

export function getCameraFrameForFocus({ position, distance = 6 }: CameraFocusTarget): CameraFrame {
  return {
    position: [position[0] + distance * 0.55, position[1] + distance * 0.42, position[2] + distance * 0.72],
    target: position,
  }
}

export function getDefaultCameraFrame(): CameraFrame {
  return {
    position: [...CAMERA_CONFIG.defaultFrame.position],
    target: [...CAMERA_CONFIG.defaultFrame.target],
  }
}
