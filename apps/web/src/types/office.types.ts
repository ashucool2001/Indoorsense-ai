import type { Vector3Tuple } from '@/types/scene.types'

export type Vector2Tuple = [number, number]

export type OfficeLayoutConfig = {
  id: string
  name: string
  floors: FloorConfig[]
}

export type FloorConfig = {
  id: string
  name: string
  width: number
  depth: number
  position: Vector3Tuple
  rooms: RoomConfig[]
}

export type RoomConfig = {
  id: string
  name: string
  width: number
  depth: number
  position: Vector3Tuple
  walls: WallConfig[]
}

export type WallConfig = {
  id: string
  start: Vector2Tuple
  end: Vector2Tuple
  height: number
  thickness: number
  doors?: DoorConfig[]
}

export type DoorConfig = {
  id: string
  offset: number
  width: number
  height: number
}

export type OfficeBuilderProps = {
  office: OfficeLayoutConfig
}

export type FloorBuilderProps = {
  floor: FloorConfig
}

export type RoomBuilderProps = {
  room: RoomConfig
}

export type WallBuilderProps = {
  wall: WallConfig
}

export type RoomProps = {
  name: string
  width: number
  depth: number
  position: Vector3Tuple
}

export type WallProps = {
  length: number
  height: number
  thickness: number
  position: Vector3Tuple
  rotationY: number
}

export type DoorProps = {
  width: number
  height: number
  thickness: number
  position: Vector3Tuple
  rotationY: number
}

export type OfficeBounds = {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

export type CameraFrame = {
  position: Vector3Tuple
  target: Vector3Tuple
}

export type CameraFocusTarget = {
  position: Vector3Tuple
  distance?: number
}
