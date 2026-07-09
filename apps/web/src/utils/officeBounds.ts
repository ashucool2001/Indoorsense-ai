import type { OfficeBounds, OfficeLayoutConfig } from '@/types/office.types'

function expandBounds(bounds: OfficeBounds, x: number, z: number) {
  bounds.minX = Math.min(bounds.minX, x)
  bounds.maxX = Math.max(bounds.maxX, x)
  bounds.minZ = Math.min(bounds.minZ, z)
  bounds.maxZ = Math.max(bounds.maxZ, z)
}

export function getOfficeBounds(office: OfficeLayoutConfig): OfficeBounds {
  const bounds: OfficeBounds = {
    minX: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    minZ: Number.POSITIVE_INFINITY,
    maxZ: Number.NEGATIVE_INFINITY,
  }

  office.floors.forEach((floor) => {
    const halfWidth = floor.width / 2
    const halfDepth = floor.depth / 2

    expandBounds(bounds, floor.position[0] - halfWidth, floor.position[2] - halfDepth)
    expandBounds(bounds, floor.position[0] + halfWidth, floor.position[2] + halfDepth)

    floor.rooms.forEach((room) => {
      const roomHalfWidth = room.width / 2
      const roomHalfDepth = room.depth / 2

      expandBounds(bounds, room.position[0] - roomHalfWidth, room.position[2] - roomHalfDepth)
      expandBounds(bounds, room.position[0] + roomHalfWidth, room.position[2] + roomHalfDepth)

      room.walls.forEach((wall) => {
        expandBounds(bounds, wall.start[0], wall.start[1])
        expandBounds(bounds, wall.end[0], wall.end[1])
      })
    })
  })

  return bounds
}
