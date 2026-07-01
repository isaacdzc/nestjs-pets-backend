import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Species } from '../enums/species.enum';
import { Gender } from '../enums/genre.enum';

@Entity('pets')
export class Pet {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 50 })
    name!: string;

    @Column({ type: 'enum', enum: Species })
    species!: Species;

    @Column({ name: 'birth_date', type: 'date' })
    birthDate!: Date;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    weight?: number;

    @Column({ type: 'enum', enum: Gender })
    gender!: Gender;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt!: Date;

    @ManyToOne(() => User, (user) => user.pets, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;
}
