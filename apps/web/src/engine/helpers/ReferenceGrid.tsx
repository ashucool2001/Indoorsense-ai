import { Grid } from '@react-three/drei'
import { HELPER_CONFIG } from '@/config/scene.config'
import type { ReferenceGridProps } from '@/types/scene.types'

export function ReferenceGrid({ size, divisions }: ReferenceGridProps) {
  return (
    <Grid
      args={[size, size]}
      cellSize={size / divisions}
      cellThickness={HELPER_CONFIG.grid.cellThickness}
      cellColor={HELPER_CONFIG.grid.cellColor}
      sectionSize={HELPER_CONFIG.grid.sectionSize}
      sectionThickness={HELPER_CONFIG.grid.sectionThickness}
      sectionColor={HELPER_CONFIG.grid.sectionColor}
      fadeDistance={HELPER_CONFIG.grid.fadeDistance}
      fadeStrength={HELPER_CONFIG.grid.fadeStrength}
      followCamera={false}
      infiniteGrid={false}
      position={HELPER_CONFIG.grid.position}
    />
  )
}
