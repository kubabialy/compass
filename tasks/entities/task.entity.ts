import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    isCompleted: boolean

    markCompleted(): void {
        this.isCompleted = true
    }

    markNotCompleted(): void {
        this.isCompleted = false
    }
}
