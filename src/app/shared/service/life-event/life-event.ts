import { Human } from '../family/human';

export interface LifeEvent {
  uuid: string;
  year: number;
  familyPerson: Human;
  eventName: string;
  /* 単位は万円 */
  money: number;
  timestamp: Date;
}
