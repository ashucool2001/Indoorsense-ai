import { Text } from '@react-three/drei'
import { ENTITY_CONFIG, MATERIAL_CONFIG } from '@/config/scene.config'
import { EntityMaterial } from '@/engine/materials/EntityMaterials'
import type { RoomProps } from '@/types/office.types'

export function Room({ name, width, depth, position }: RoomProps) {
  const ringRadius = Math.min(width, depth) * ENTITY_CONFIG.room.accentRingScale

  return (
    <group position={position}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, depth]} />
        <EntityMaterial variant="roomSurface" />
      </mesh>
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[ringRadius, ringRadius + ENTITY_CONFIG.room.accentRingThickness, 4]} />
        <EntityMaterial variant="roomAccent" />
      </mesh>
      <Text
        anchorX="center"
        anchorY="middle"
        color={MATERIAL_CONFIG.roomLabel.color}
        fontSize={ENTITY_CONFIG.room.labelSize}
        maxWidth={width * 0.7}
        position={[0, ENTITY_CONFIG.room.labelHeight, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {name}
      </Text>
    </group>
  )
}
