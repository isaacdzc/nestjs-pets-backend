import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Pet } from '../../pets/entities/pet.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ name: 'first_name', type: 'varchar', length: 50 })
    firstName!: string;

    @Column({ name: 'last_name', type: 'varchar', length: 50 })
    lastName!: string;

    @Column({ type: 'varchar', unique: true, length: 150 })
    email!: string;

    @Column({ type: 'integer' })
    age!: number;

    @Column({ type: 'varchar', length: 255 })
    password!: string;

    @Column({ name: 'is_active', type: 'boolean', default: true })
    isActive!: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt!: Date;

    @OneToMany(() => Pet, (pet) => pet.user)
    pets!: Pet[];
}
