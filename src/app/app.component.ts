import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPDD';
  tabs:tab[]=[
    {
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
      title: '户外运动',
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
}
interface tab {
  title:string;
  linK:string;
}
