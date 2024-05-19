import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'city' })
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({
    name: 'state_id',
    nullable: false,
  })
  stateId: number;

  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'created_at',
  })
  created_at: Date;

  @Column({
    name: 'updated_at',
  })
  updated_at: Date;
}
