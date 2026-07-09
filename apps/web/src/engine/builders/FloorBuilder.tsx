import { RoomBuilder } from '@/engine/builders/RoomBuilder'
import { EntityFactory } from '@/engine/factory/EntityFactory'
import type { FloorBuilderProps } from '@/types/office.types'

export function FloorBuilder({ floor }: FloorBuilderProps) {
  return (
    <group name={floor.name}>
      {EntityFactory.createFloor({ width: floor.width, depth: floor.depth, position: floor.position })}
      {floor.rooms.map((room) => (
        <RoomBuilder room={room} key={room.id} />
      ))}
    </group>
  )
}
