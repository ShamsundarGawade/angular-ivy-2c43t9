import { Time } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";
import { SharedserviceService } from "../sharedservice.service";

@Component({
  selector: "app-user-story2",
  templateUrl: "./user-story2.component.html",
  styleUrls: ["./user-story2.component.css"]
})
export class UserStory2Component implements OnInit {
  constructor(private userService: SharedserviceService) {}
  currentTime: Date = new Date();
  customerList: Array<Customer> = [];
  counter: number = 15;
  ngOnInit() {
    this.userService.castUser.subscribe(user => {
      this.customerList = user;
      this.customerList.forEach(x => {
        let date = new Date();
        x.WaitingTime = date
          .setMinutes(date.getMinutes() + this.counter)
          .toString();
        //this.counter += this.counter;
      });
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    });
  }
  click(mobile: number, barberId: string) {
    debugger;
    this.customerList.find(item => item.mobile == mobile).isActive = true;

    console.log(mobile + "," + barberId);
  }
}
