import type { ComponentProps } from 'react'
import type { Canvas } from '@react-three/fiber'

export type Vector3Tuple = [number, number, number]

export type SceneCameraState = {
  position: Vector3Tuple
  target: Vector3Tuple
}

export type FloorProps = {
  width: number
  depth: number
  position: Vector3Tuple
}

export type ReferenceGridProps = {
  size: number
  divisions: number
}

export type ReferenceAxesProps = {
  size: number
}

export type CanvasQuality = Pick<ComponentProps<typeof Canvas>, 'dpr' | 'gl' | 'performance'>
