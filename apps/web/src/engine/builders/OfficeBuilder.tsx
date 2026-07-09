import { FloorBuilder } from '@/engine/builders/FloorBuilder'
import type { OfficeBuilderProps } from '@/types/office.types'

export function OfficeBuilder({ office }: OfficeBuilderProps) {
  return (
    <group name={office.name}>
      {office.floors.map((floor) => (
        <FloorBuilder floor={floor} key={floor.id} />
      ))}
    </group>
  )
}
