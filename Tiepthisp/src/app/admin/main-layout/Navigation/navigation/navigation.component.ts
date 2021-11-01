import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;

  constructor() { 
    this.clicked = this.clicked === undefined ? false : true;
  }

  private _isCollapsed: boolean = true;
  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    if (this.collapseRef) {
      // temp fix for "overflow: hidden"
      // if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
      //  this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
      // }
    }
    return this._isCollapsed;
  }

  // @ViewChild(CollapseDirective, { read: ElementRef, static: false }) collapse !: CollapseDirective;

  collapseRef;

  ngOnInit(): void {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }
}
