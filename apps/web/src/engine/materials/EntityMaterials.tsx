import { MATERIAL_CONFIG } from '@/config/scene.config'

type EntityMaterialProps = {
  variant:
    | 'doorFrame'
    | 'doorPanel'
    | 'floorSlab'
    | 'floorSurface'
    | 'roomAccent'
    | 'roomSurface'
    | 'wallGlass'
}

export function EntityMaterial({ variant }: EntityMaterialProps) {
  switch (variant) {
    case 'floorSurface':
      return <meshStandardMaterial {...MATERIAL_CONFIG.floorSurface} />
    case 'floorSlab':
      return <meshStandardMaterial {...MATERIAL_CONFIG.floorSlab} />
    case 'roomSurface':
      return <meshStandardMaterial {...MATERIAL_CONFIG.roomSurface} />
    case 'roomAccent':
      return (
        <meshBasicMaterial
          color={MATERIAL_CONFIG.roomAccent.color}
          transparent
          opacity={MATERIAL_CONFIG.roomAccent.opacity}
        />
      )
    case 'wallGlass':
      return <meshPhysicalMaterial {...MATERIAL_CONFIG.wallGlass} transparent />
    case 'doorPanel':
      return <meshStandardMaterial {...MATERIAL_CONFIG.doorPanel} transparent />
    case 'doorFrame':
      return <meshStandardMaterial {...MATERIAL_CONFIG.doorFrame} />
  }
}
