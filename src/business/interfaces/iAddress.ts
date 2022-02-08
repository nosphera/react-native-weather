import {IPosition} from './iPosition';

export interface IAddress {
  forecastDate: Date;
  neighborhood: string;
  state: string;
  city: string;
  zip: IPosition;
}
