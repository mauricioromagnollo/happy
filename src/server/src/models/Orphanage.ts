import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToMany,
  JoinColumn 
} from 'typeorm';

import { OrphanageInterface } from '../interfaces/OrphanageInterface';
import { Image } from './Image';

@Entity('ORPHANAGES')
export class Orphanage implements OrphanageInterface {
  
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

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}
