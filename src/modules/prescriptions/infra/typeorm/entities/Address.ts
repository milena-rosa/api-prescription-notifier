import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('addresses')
class Address {
  @PrimaryColumn()
  id?: string

  @Column()
  street: string

  @Column()
  number: string

  @Column()
  complement?: string

  @Column()
  district: string

  @Column()
  cep: string

  @Column()
  city: string

  @Column()
  uf: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Address }
