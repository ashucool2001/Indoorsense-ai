import { useMemo } from 'react'
import { CANVAS_CONFIG } from '@/config/scene.config'
import type { CanvasQuality } from '@/types/scene.types'

export function useCanvasQuality(): CanvasQuality {
  return useMemo(
    () => ({
      dpr: [...CANVAS_CONFIG.dpr],
      gl: CANVAS_CONFIG.gl,
      performance: CANVAS_CONFIG.performance,
    }),
    [],
  )
}
