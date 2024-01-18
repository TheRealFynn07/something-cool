import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { count } from 'console';

@Component({
  selector: 'app-p1',
  standalone: true,
  imports: [ CardComponent, NgFor ],
  templateUrl: './p1.component.html',
  styleUrl: './p1.component.scss'
})
export class P1Component implements OnInit {
  ngOnInit(): void {
    console.log('init');
    this.calculatePredessor(this.Processors[0]);
  }

  Processors=[
    {Id:1,name:"1",nextId:2},
    {Id:2,name:"2",nextId:3},
    {Id:3,name:"3",nextId:4},
    {Id:4,name:"4", nextId: 5},
    {Id:5,name:"5"},
  ];

  Processors2=[
    {Id:1,name:"1",nextId:3},
    {Id:2,name:"2",nextId:3},
    {Id:3,name:"3"}
  ];

  //zähle die Anzahl der eingehenden "Verbindungen" zu Parameter "processor"
  calculatePredessor(processor:any) {
    console.log(this.Processors);
    console.log(processor);
    let count = 0;
    this.Processors.forEach(proc => {
      if (proc.nextId === processor.id) {
        count++;
      }
    });
    console.log(count);
  }

  //zähle die Anzahl der ausgehenden "Verbindungen" von Parameter "processor"
  calculateSuccessor(processor: any) {

  }
}
