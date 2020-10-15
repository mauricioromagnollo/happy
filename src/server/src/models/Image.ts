import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  ManyToOne,
  JoinColumn 
} from 'typeorm';

import { ImageInterface } from '../interfaces/ImageInterface';
import { Orphanage } from './Orphanage';

@Entity('IMAGES')
export class Image implements ImageInterface {
  
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
