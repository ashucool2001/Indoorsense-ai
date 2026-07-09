import { ENTITY_CONFIG } from '@/config/scene.config'
import { EntityMaterial } from '@/engine/materials/EntityMaterials'
import type { DoorProps } from '@/types/office.types'

export function Door({ width, height, thickness, position, rotationY }: DoorProps) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, thickness]} />
        <EntityMaterial variant="doorPanel" />
      </mesh>
      <mesh position={[0, height + ENTITY_CONFIG.door.frameOffsetY, 0]}>
        <boxGeometry
          args={[
            width + ENTITY_CONFIG.door.frameExtraWidth,
            ENTITY_CONFIG.door.frameHeight,
            thickness + ENTITY_CONFIG.door.frameExtraThickness,
          ]}
        />
        <EntityMaterial variant="doorFrame" />
      </mesh>
    </group>
  )
}
