import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    names:string[]=[
        "nume1",
        "nume2",
        "nume3",
        "nume4",
        "nume5",
        "nume6",
        "nume7",
        "nume8",
        "9",
        "10",
        "11",
        "11",
        "11",
        "11",
        "11",
        "11"
      ]

      getNames():string[]{
        return this.names;
      }
  }