import { IPosition } from "./iPosition";

export interface IHomeComponent {
    position: IPosition, 
    setPosition: ()=>void,
    weatherData: any
    address: any
}