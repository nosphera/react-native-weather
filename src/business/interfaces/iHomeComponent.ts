import {IBaseProps} from './iBaseProps';
import {ICity} from './iCity';
import {IPosition} from './iPosition';

export interface IHomeComponent extends IBaseProps {
  position: IPosition;
  setPosition: (position: IPosition) => void;
  refresh: () => void;
  handleSearch: (query: string) => void;
  weatherData: any;
  address: any;
  cities?: ICity[];
}
