import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Template driven forms";

  BarberList: Barber[] = [
    new Barber("1", "Any"),
    new Barber("2", "Joe"),
    new Barber("3", "Gary.")
  ];
  onSubmit(contactForm: { value: any }) {
    console.log(contactForm.value);
  }
}

export class Barber {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
