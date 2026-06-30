import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Pet } from '../../pets/entities/pet.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ name: 'full_name', type: 'varchar', length: 100 })
    fullName!: string;

    @Column({ type: 'varchar', unique: true, length: 150 })
    email!: string;

    @Column({ type: 'integer' })
    age!: number;

    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive!: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt!: Date;

    @OneToMany(() => Pet, (pet) => pet.user)
    pets!: Pet[];
}
