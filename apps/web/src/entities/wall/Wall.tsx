import { EntityMaterial } from '@/engine/materials/EntityMaterials'
import type { WallProps } from '@/types/office.types'

export function Wall({ length, height, thickness, position, rotationY }: WallProps) {
  return (
    <mesh castShadow receiveShadow position={position} rotation={[0, rotationY, 0]}>
      <boxGeometry args={[length, height, thickness]} />
      <EntityMaterial variant="wallGlass" />
    </mesh>
  )
}
