import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit {

  constructor() {
    console.log("1.首先调用构造函数,完成自身属性的初始化，只执行一次");
  }
  ngOnChanges(){
    console.log("2.传入值时或传入值改变时进行调用，将传入值初始化");
  }
  ngOnInit(): void {
    console.log("3.组件完成自身的初始化工作，在这里可以安全调用组件属性和函数");
  }
  ngAfterContentInit(): void {
    console.log("4.组件自身完成之后，调用该组件的标签里如果有其他内容，初始化此内容并调用该函数");
  }
  ngAfterViewInit(): void {
    console.log("5.组件自身所有内容及其子组件初始化完成后被调用");
  }


  topTabSelect:number;
  @Input() tabs:tab[]=[];
  @Output() tabSelected = new EventEmitter();
  @Input() backgroundColor: string;
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
