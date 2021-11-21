import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('council_types')
class CouncilType {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  acronym: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { CouncilType }
