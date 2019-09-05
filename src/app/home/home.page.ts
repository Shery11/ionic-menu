import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  // menu 1
  loggedIn = false;

  constructor(private menu: MenuController) {}

  openMenu(id) {
    if (this.loggedIn) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }

    console.log(id);
    this.menu.enable(true, id);
    this.menu.open(id);
  }
}
