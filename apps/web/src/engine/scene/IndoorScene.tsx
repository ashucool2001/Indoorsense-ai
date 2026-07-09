import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo } from 'react'
import { HELPER_CONFIG, POSTPROCESSING_CONFIG } from '@/config/scene.config'
import officeLayoutData from '@/config/offices/hq-level-03.json'
import { OfficeBuilder } from '@/engine/builders/OfficeBuilder'
import { OfficeCamera } from '@/engine/camera/OfficeCamera'
import { OrbitCameraControls } from '@/engine/controls/OrbitCameraControls'
import { ReferenceAxes } from '@/engine/helpers/ReferenceAxes'
import { ReferenceGrid } from '@/engine/helpers/ReferenceGrid'
import { OfficeLights } from '@/engine/lights/OfficeLights'
import { useCanvasQuality } from '@/hooks/useCanvasQuality'
import { useCameraStore } from '@/stores/camera.store'
import type { OfficeLayoutConfig } from '@/types/office.types'
import { getOfficeBounds } from '@/utils/officeBounds'

const officeLayout = officeLayoutData as OfficeLayoutConfig

export function IndoorScene() {
  const canvasQuality = useCanvasQuality()
  const fitToBounds = useCameraStore((state) => state.fitToBounds)
  const officeBounds = useMemo(() => getOfficeBounds(officeLayout), [])

  useEffect(() => {
    fitToBounds(officeBounds)
  }, [fitToBounds, officeBounds])

  return (
    <Canvas
      className="digital-twin-canvas"
      dpr={canvasQuality.dpr}
      gl={canvasQuality.gl}
      performance={canvasQuality.performance}
      shadows
    >
      <Suspense fallback={null}>
        <OfficeCamera />
        <OrbitCameraControls />
        <OfficeLights />
        <OfficeBuilder office={officeLayout} />
        <ReferenceGrid size={HELPER_CONFIG.grid.size} divisions={HELPER_CONFIG.grid.divisions} />
        <ReferenceAxes size={HELPER_CONFIG.axes.size} />
        <EffectComposer multisampling={POSTPROCESSING_CONFIG.multisampling}>
          <Bloom
            intensity={POSTPROCESSING_CONFIG.bloom.intensity}
            luminanceThreshold={POSTPROCESSING_CONFIG.bloom.luminanceThreshold}
            luminanceSmoothing={POSTPROCESSING_CONFIG.bloom.luminanceSmoothing}
          />
          <Vignette
            eskil={false}
            offset={POSTPROCESSING_CONFIG.vignette.offset}
            darkness={POSTPROCESSING_CONFIG.vignette.darkness}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
