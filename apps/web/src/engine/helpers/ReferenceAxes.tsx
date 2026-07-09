import { HELPER_CONFIG } from '@/config/scene.config'
import type { ReferenceAxesProps } from '@/types/scene.types'

export function ReferenceAxes({ size }: ReferenceAxesProps) {
  return <axesHelper args={[size]} position={HELPER_CONFIG.axes.position} />
}
