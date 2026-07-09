import { Door } from '@/entities/door/Door'
import { Floor } from '@/entities/floor/Floor'
import { Room } from '@/entities/room/Room'
import { Wall } from '@/entities/wall/Wall'
import type { DoorProps, RoomProps, WallProps } from '@/types/office.types'
import type { FloorProps } from '@/types/scene.types'

export const EntityFactory = {
  createFloor: (props: FloorProps) => <Floor {...props} />,
  createRoom: (props: RoomProps) => <Room {...props} />,
  createWall: (props: WallProps) => <Wall {...props} />,
  createDoor: (props: DoorProps) => <Door {...props} />,
} as const
