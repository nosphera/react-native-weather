import {IPosition} from './iPosition';

export interface ICity {
  date?: Date;
  name: string;
  country: string;
  icon: string;
  position: IPosition;
}
