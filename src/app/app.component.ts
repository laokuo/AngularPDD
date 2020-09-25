import {AfterContentInit, AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {tab} from './components/scrollable-tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit,OnChanges,AfterContentInit{
  title = 'AngularPDD';
  tabs:tab[]=[{
  title: '热门',
  linK:""
},
{
  title: '男装',
    linK:""
},
{
  title: '女装',
    linK:""
},
{
  title: '蔬菜',
    linK:""
},
{
  title: '水果',
    linK:""
},
{
  title: '手机',
    linK:""
},
{
  title: '电脑',
    linK:""
},
{
  title: '鞋袜',
    linK:""
},
{
  title: '运动',
    linK:""
},
{
  title: '车',
    linK:""
},
{
  title: '房',
    linK:""
},
{
  title: '外卖',
    linK:""
},
{
  title: '零食',
    linK:""
},
{
  title: '老干妈',
    linK:""
},
  ]

  handleTabSelect(tab:tab) {
    console.log(tab);
  }
  constructor() {
    console.log("父组件的constructor");
  }
  ngOnChanges(){
    console.log("父组件的ngOnChanges");
  }
  ngOnInit(): void {
    console.log("父组件的ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("父组件的ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log("父组件的ngAfterViewInit");
  }
}

