import { Component, Input, OnInit } from "@angular/core";
import { Slide } from "./carousel.interface";
import { trigger, transition, useAnimation } from "@angular/animations";


@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {

  @Input() slides: Slide[];

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    if(previous >= 0)
      this.currentSlide = previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    if(next < this.slides.length)
      this.currentSlide = next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    this.preloadImages(); // for the demo
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
}
