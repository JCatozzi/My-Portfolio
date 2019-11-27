import { Component, OnInit, AfterViewInit } from "@angular/core";
// import { Email } from "../../models/email";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit, AfterViewInit {
  // email: Email;
  submitted = false;
  transporter: any;
  animate: boolean = false;

  constructor() {}

  ngOnInit() {
    // this.email = new Email("", "", "", "");
    // console.log("model: ", this.email);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animate = true;
    }, 0);
  }

  onSubmit() {
    this.submitted = true;
    // console.log("email: ", this.email);
  }
}
