import type { Vector3Tuple } from '@/types/scene.types'

export const CAMERA_CONFIG = {
  defaultFrame: {
    position: [9, 8, 11] as Vector3Tuple,
    target: [0, 0, 0] as Vector3Tuple,
  },
  fov: 44,
  near: 0.1,
  far: 140,
  minDistance: 7,
  maxDistance: 30,
  maxPolarAngle: Math.PI / 2.18,
  framePadding: 1.35,
  frameOffset: {
    x: 0.48,
    y: 0.38,
    z: 0.62,
  },
} as const

export const CANVAS_CONFIG = {
  dpr: [1, 1.8],
  gl: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  },
  performance: {
    min: 0.5,
  },
} as const

export const LIGHT_CONFIG = {
  ambientIntensity: 0.46,
  hemisphere: {
    skyColor: '#dcecff',
    groundColor: '#09111f',
    intensity: 1.8,
  },
  directional: {
    color: '#eaf4ff',
    intensity: 3.2,
    position: [8, 12, 7] as Vector3Tuple,
    shadowMapSize: [2048, 2048] as [number, number],
    shadowCameraSize: 16,
  },
  accentLights: [
    { color: '#45f3ff', intensity: 20, position: [-8, 4, -6] as Vector3Tuple, distance: 18 },
    { color: '#ff4d6d', intensity: 8, position: [7, 3, 5] as Vector3Tuple, distance: 14 },
  ],
} as const

export const HELPER_CONFIG = {
  grid: {
    size: 24,
    divisions: 24,
    cellThickness: 0.55,
    cellColor: '#2a5360',
    sectionSize: 4,
    sectionThickness: 1.1,
    sectionColor: '#41d9ff',
    fadeDistance: 28,
    fadeStrength: 1.1,
    position: [0, 0.035, 0] as Vector3Tuple,
  },
  axes: {
    size: 3.5,
    position: [-10.8, 0.08, -6.7] as Vector3Tuple,
  },
} as const

export const POSTPROCESSING_CONFIG = {
  multisampling: 4,
  bloom: {
    intensity: 0.22,
    luminanceThreshold: 0.74,
    luminanceSmoothing: 0.28,
  },
  vignette: {
    offset: 0.18,
    darkness: 0.78,
  },
} as const

export const ENTITY_CONFIG = {
  floor: {
    slabHeight: 0.08,
  },
  room: {
    labelHeight: 0.09,
    labelSize: 0.34,
    accentRingScale: 0.47,
    accentRingThickness: 0.005,
  },
  door: {
    frameExtraWidth: 0.18,
    frameExtraThickness: 0.08,
    frameHeight: 0.1,
    frameOffsetY: 0.05,
  },
} as const

export const MATERIAL_CONFIG = {
  floorSurface: {
    color: '#101822',
    roughness: 0.72,
    metalness: 0.12,
  },
  floorSlab: {
    color: '#071019',
    roughness: 0.82,
    metalness: 0.18,
  },
  roomSurface: {
    color: '#152738',
    emissive: '#10202d',
    emissiveIntensity: 0.16,
    roughness: 0.68,
    metalness: 0.1,
  },
  roomAccent: {
    color: '#2bdcff',
    opacity: 0.18,
  },
  roomLabel: {
    color: '#bdf7ff',
  },
  wallGlass: {
    color: '#7bc9df',
    emissive: '#0d3442',
    emissiveIntensity: 0.14,
    metalness: 0.04,
    roughness: 0.22,
    opacity: 0.36,
    transmission: 0.12,
  },
  doorPanel: {
    color: '#ffb86b',
    emissive: '#8a3f16',
    emissiveIntensity: 0.28,
    roughness: 0.38,
    metalness: 0.2,
    opacity: 0.62,
  },
  doorFrame: {
    color: '#f8d7a0',
    emissive: '#704214',
    emissiveIntensity: 0.25,
  },
} as const
