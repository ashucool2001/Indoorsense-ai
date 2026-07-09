import { create } from 'zustand'
import type { CameraFocusTarget, CameraFrame, OfficeBounds } from '@/types/office.types'
import type { SceneCameraState } from '@/types/scene.types'
import { getCameraFrameForFocus, getCameraFrameFromBounds, getDefaultCameraFrame } from '@/utils/cameraFrame'

type CameraStore = {
  camera: SceneCameraState
  fitToBounds: (bounds: OfficeBounds) => void
  focusCamera: (target: CameraFocusTarget) => void
  resetCamera: () => void
  setCameraFrame: (frame: CameraFrame) => void
}

export const useCameraStore = create<CameraStore>((set) => ({
  camera: getDefaultCameraFrame(),
  fitToBounds: (bounds) => {
    set({ camera: getCameraFrameFromBounds(bounds) })
  },
  focusCamera: (target) => {
    set({ camera: getCameraFrameForFocus(target) })
  },
  resetCamera: () => {
    set({ camera: getDefaultCameraFrame() })
  },
  setCameraFrame: (frame) => {
    set({
      camera: {
        position: frame.position,
        target: frame.target,
      },
    })
  },
}))
