import { EntityFactory } from '@/engine/factory/EntityFactory'
import type { DoorConfig, Vector2Tuple, WallBuilderProps } from '@/types/office.types'
import type { Vector3Tuple } from '@/types/scene.types'

function getWallMetrics(start: Vector2Tuple, end: Vector2Tuple) {
  const deltaX = end[0] - start[0]
  const deltaZ = end[1] - start[1]
  const length = Math.hypot(deltaX, deltaZ)
  const rotationY = -Math.atan2(deltaZ, deltaX)
  const center: Vector3Tuple = [(start[0] + end[0]) / 2, 0, (start[1] + end[1]) / 2]

  return { center, deltaX, deltaZ, length, rotationY }
}

function getDoorPosition(door: DoorConfig, start: Vector2Tuple, deltaX: number, deltaZ: number, length: number): Vector3Tuple {
  const midpointDistance = length / 2 + door.offset
  const unitX = deltaX / length
  const unitZ = deltaZ / length

  return [start[0] + unitX * midpointDistance, 0, start[1] + unitZ * midpointDistance]
}

export function WallBuilder({ wall }: WallBuilderProps) {
  const { center, deltaX, deltaZ, length, rotationY } = getWallMetrics(wall.start, wall.end)
  const wallPosition: Vector3Tuple = [center[0], wall.height / 2, center[2]]

  return (
    <group name={wall.id}>
      {EntityFactory.createWall({
        length,
        height: wall.height,
        thickness: wall.thickness,
        position: wallPosition,
        rotationY,
      })}
      {wall.doors?.map((door) => (
        <group key={door.id}>
          {EntityFactory.createDoor({
            height: door.height,
            position: getDoorPosition(door, wall.start, deltaX, deltaZ, length),
            rotationY,
            thickness: wall.thickness + 0.04,
            width: door.width,
          })}
        </group>
      ))}
    </group>
  )
}
