import { WallBuilder } from '@/engine/builders/WallBuilder'
import { EntityFactory } from '@/engine/factory/EntityFactory'
import type { RoomBuilderProps } from '@/types/office.types'

export function RoomBuilder({ room }: RoomBuilderProps) {
  return (
    <group name={room.name}>
      {EntityFactory.createRoom({
        name: room.name,
        width: room.width,
        depth: room.depth,
        position: room.position,
      })}
      {room.walls.map((wall) => (
        <WallBuilder wall={wall} key={wall.id} />
      ))}
    </group>
  )
}
