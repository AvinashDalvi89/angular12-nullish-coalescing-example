import { Component, VERSION } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular " + VERSION.major;
  form = new FormGroup({
    imageURL: new FormControl()
  });
  defaultImageURL =
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1601990703263/zNAZTpEQp.jpeg";
  imageURL;
  changeURL(e) {
    this.imageURL = e.target.value;
  }
}
