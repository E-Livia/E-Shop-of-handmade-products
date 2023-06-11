import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  tutorialsContent:any[] = [
    {
      name: 'Martisor buburuza FIMO',
      credits:'Victory HandmadeVictory - youtube',
      link: 'https://www.youtube.com/watch?v=EiaxqN6YMSw&ab_channel=VictoryHandmadeVictory'
    },
    {
      name: 'Martisor buburuza FIMO',
      credits:'Victory HandmadeVictory - youtube',
      link: 'https://www.youtube.com/watch?v=EiaxqN6YMSw&ab_channel=VictoryHandmadeVictory'
    },
    {
      name: 'Martisor buburuza FIMO',
      credits:'Victory HandmadeVictory - youtube',
      link: 'https://www.youtube.com/watch?v=EiaxqN6YMSw&ab_channel=VictoryHandmadeVictory'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
