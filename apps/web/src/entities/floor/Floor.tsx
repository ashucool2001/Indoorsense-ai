import { ENTITY_CONFIG } from '@/config/scene.config'
import { EntityMaterial } from '@/engine/materials/EntityMaterials'
import type { FloorProps } from '@/types/scene.types'

export function Floor({ width, depth, position }: FloorProps) {
  return (
    <group position={position}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, depth]} />
        <EntityMaterial variant="floorSurface" />
      </mesh>
      <mesh
        receiveShadow
        position={[0, -ENTITY_CONFIG.floor.slabHeight / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <boxGeometry args={[width, depth, ENTITY_CONFIG.floor.slabHeight]} />
        <EntityMaterial variant="floorSlab" />
      </mesh>
    </group>
  )
}
