export class Customer {
  name: string;
  mobile: number;
  barber: number;
  isActive: boolean;
  WaitingTime: string;
  constructor(
    name: string,
    mobile: number,
    barber: number,
    isActive: boolean,
    WaitingTime: string
  ) {
    this.name = name;
    this.mobile = mobile;
    this.barber = barber;
    this.isActive = isActive;
    this.WaitingTime = WaitingTime;
  }
}
