import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Customer } from "./customer";

@Injectable(
  
)
export class SharedserviceService {
  constructor() {}
  data: Array<Customer> = [];
  private user = new BehaviorSubject<Array<Customer>>(this.data);
  castUser = this.user.asObservable();

  editUser(newUser: Array<Customer>) {
    this.user.next(newUser);
  }
}
