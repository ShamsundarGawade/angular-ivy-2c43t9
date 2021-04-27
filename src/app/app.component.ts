import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Template driven forms";
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

export class Barber {
  id: string;
  name: string;
  customerName: string;

  constructor(id: string, name: string, customerName: string) {
    this.id = id;
    this.name = name;
    this.customerName = customerName;
  }
}
export class Customer {
  name: string;
  mobile: number;
  barber: number;
  isActive: boolean;
  isComplited: boolean;
  constructor(name: string, mobile: number, barber: number, isActive: boolean) {
    this.name = name;
    this.mobile = mobile;
    this.barber = barber;
    this.isActive = isActive;
  }
}
