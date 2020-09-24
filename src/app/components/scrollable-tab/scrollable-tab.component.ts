import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  topTabSelect:number;
  @Input() tabs:tab[]=[];
  @Output() tabSelected = new EventEmitter();
  setTopSelect(i:number):void{
    this.topTabSelect = i;
    this.tabSelected.emit(this.tabs[this.topTabSelect]);
  }
}
//在类外也能被index.ts导出？
export interface tab {
  title:string;
  linK:string;
}
