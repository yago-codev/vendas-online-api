import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'state' })
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

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
    name: 'created_at',
  })
  updated_at: Date;

  @Column({
    name: 'uf',
    nullable: false,
  })
  uf: string;
}
