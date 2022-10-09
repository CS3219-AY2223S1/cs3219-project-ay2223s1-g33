/* eslint import/no-cycle: 0 */
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { User } from '../proto/types';
import PasswordResetTokenEntity from './password_reset_token_entity';

@Entity('users')
export default class UserEntity implements User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
    userId!: number;

  @Column()
    nickname!: string;

  @Index('user_username_index')
  @Column({ unique: true })
    username!: string;

  @Column()
    password!: string;

  @Column({ default: true, name: 'is_active' })
    isActive!: boolean;

  @OneToMany(() => PasswordResetTokenEntity, (passwordResetToken) => passwordResetToken.user)
    passwordResetTokens?: PasswordResetTokenEntity[];

  @CreateDateColumn({ name: 'create_timestamp' })
    createDateTime!: Date;

  @UpdateDateColumn({ name: 'update_timestamp' })
    updateDateTime!: Date;
}