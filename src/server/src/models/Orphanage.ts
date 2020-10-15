import { IOrphanage } from '../interfaces/IOrphanage';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ORPHANAGES')
export class Orphanage implements IOrphanage {
  
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;
  
  @Column()
  latitude: number;
  
  @Column()
  longitude: number;
  
  @Column()
  about: string;
  
  @Column()
  instructions: string;
  
  @Column()
  opening_hours: string;
  
  @Column()
  open_on_weekends: boolean;
}
