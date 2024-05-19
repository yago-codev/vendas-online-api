import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({
    name: 'user_id',
    nullable: false,
  })
  userId: number;

  @Column({
    name: 'complement',
  })
  complement: string;

  @Column({
    name: 'number',
    nullable: false,
  })
  numberAddress: number;

  @Column({
    name: 'cep',
    nullable: false,
  })
  cep: string;

  @Column({
    name: 'city_id',
    nullable: false,
  })
  cityId: number;

  @Column({
    name: 'created_at',
  })
  created_at: Date;

  @Column({
    name: 'updated_at',
  })
  updated_at: Date;
}
