import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Customer } from "./customer";

@Injectable()
export class SharedserviceService {
  constructor() {}
  data: Array<Customer> = [];
  private user = new BehaviorSubject<Array<Customer>>(this.data);
  getCuctomer = this.user.asObservable();

  updateData(NewCustomer: Array<Customer>) {
    this.user.next(NewCustomer);
  }
}
