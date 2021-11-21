import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('prescription_types')
class PrescriptionType {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { PrescriptionType }
