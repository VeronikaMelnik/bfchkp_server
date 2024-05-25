import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ChampionshipDiscipline } from './championshipDiscipline.entity';
import { ChampionshipJudge } from './championshipJudge.entity';
import { Result } from './result.entity';

@Entity('championships')
export class Championship extends BaseEntity {
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  date: Date;

  @OneToMany(() => ChampionshipDiscipline, (el) => el.championship)
  championShipDisciplines: Array<ChampionshipDiscipline>;

  @OneToMany(() => ChampionshipJudge, (el) => el.championship)
  championShipJudges: Array<ChampionshipJudge>;

  @OneToMany(() => Result, (el) => el.championship)
  results: Array<Result>;
}
