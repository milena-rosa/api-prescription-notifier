import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm'
import { CouncilType } from './CouncilType'
import { Address } from './Address'
import { PrescriptionType } from './PrescriptionType'

@Entity('registrations')
class Registration {
  @PrimaryColumn()
  id?: string

  @Column()
  registration_number: string

  @Column()
  registration_date: Date

  @ManyToMany(() => PrescriptionType)
  @JoinTable({
    name: 'prescription_types_registrations',
    joinColumns: [{ name: 'registration_id' }],
    inverseJoinColumns: [{ name: 'prescription_type_id' }]
  })
  prescription_types: PrescriptionType[]

  @Column()
  record_number_a: string

  @Column()
  record_number_b: string

  @Column()
  professional_or_institution_name: string

  @Column()
  technical_or_clinical_director: string

  @Column()
  professional_council_register: string

  @Column()
  council_type_id: string

  @ManyToOne(() => CouncilType)
  @JoinColumn({ name: 'council_type_id' })
  council_type: CouncilType

  @Column()
  specialty: string

  @Column()
  telephone_number: string

  @Column()
  cellphone_number: string

  @Column()
  email: string

  @Column()
  business_address_id: string

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'business_address_id' })
  business_address: Address

  @Column()
  home_address_id: string

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'home_address_id' })
  home_address: Address

  @Column()
  comments: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Registration }
