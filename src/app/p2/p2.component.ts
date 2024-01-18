import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-p2',
  standalone: true,
  imports: [ CardComponent, NgFor ],
  templateUrl: './p2.component.html',
  styleUrl: './p2.component.scss'
})
export class P2Component implements OnInit {
  ngOnInit(): void {
    console.log('init');
    this.calculatePredessor(this.Processors[0]);
  }

  Processors=[
    {Id:1,name:"1",nextId:3},
    {Id:2,name:"2",nextId:2},
    {Id:3,name:"3"}
  ];

  Processors2=[
    {Id:1,name:"1",nextId:3},
    {Id:2,name:"2",nextId:3},
    {Id:3,name:"3"}
  ];

  calculatePredessor(processor:any) {
    console.log(this.Processors);
    console.log(processor);
  }
}