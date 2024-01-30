import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-tutorials',
  templateUrl: './admin-tutorials.component.html',
  styleUrls: ['./admin-tutorials.component.scss']
})
export class AdminTutorialsComponent implements OnInit {
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
