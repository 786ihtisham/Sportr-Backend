import { Component, OnInit ,HostListener,Inject} from '@angular/core';
import { ViewportScroller } from '@angular/common';
declare const $: any;

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }
  // @HostListener('window:scroll')
  constructor(private scroll: ViewportScroller) {}
  // @HostListener("window:scroll", []);
  ngOnInit(): void {
  }

  // TODO: Cross browsing
  scrollToTop(){
    $('html,body').animate({ scrollTop: 0 }, 'slow', function () {
      
    });
  }
}
