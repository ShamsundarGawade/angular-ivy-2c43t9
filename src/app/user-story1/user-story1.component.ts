import { Component, OnInit } from "@angular/core";
import { Barber } from "../barber";
import { Customer } from "../customer";
import { SharedserviceService } from "../sharedservice.service";

@Component({
  selector: "app-user-story1",
  templateUrl: "./user-story1.component.html",
  styleUrls: ["./user-story1.component.css"]
})
export class UserStory1Component implements OnInit {
  constructor(private userService: SharedserviceService) {}
  customerList: Array<Customer> = [];
  filterCustomerList: Array<Customer> = [];

  BarberList: Barber[] = [
    new Barber("1", "Joe", ""),
    new Barber("2", "Gary", "")
  ];
  ngOnInit() {}
  onSubmit(contactForm: { value: Customer }) {
    debugger;
    contactForm.value.isActive = false;
    this.customerList.push(contactForm.value);
    this.filterCustomerList = this.customerList;
    console.log(this.customerList);
    this.userService.editUser(this.customerList);
  }
  onChange(val: any) {
    debugger;
    console.log(val.target.value);
    this.filterCustomerList = this.customerList.filter(
      (c: Customer) => c.barber == val.target.value
    );
  }
  click(mobile: number, barberId: string) {
    debugger;
    this.customerList.find(item => item.mobile == mobile).isActive = true;
    let name = this.customerList.find(item => item.mobile == mobile).name;
    this.BarberList.find(item => item.id == barberId).customerName = name;
    console.log(mobile + "," + barberId);
  }
  selectCustomer(event: any, val: any) {
    console.log("dfdfdfsdfds");
    console.log(event);
    console.log(val);
  }
}
