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

      products:any[]=[
        {"nume":"nume1", "desc":"desc1","mat":"nsj","pret":99},
        {"nume":"nume2", "desc":"desc2","mat":"mat2","pret":98},
        {"nume":"nume1", "desc":"desc1","mat":"nsj","pret":99},
        {"nume":"nume2", "desc":"desc2","mat":"mat2","pret":98},
        {"nume":"nume1", "desc":"desc1","mat":"nsj","pret":99},
        {"nume":"nume2", "desc":"desc2","mat":"mat2","pret":98},
        {"nume":"nume1", "desc":"desc1","mat":"nsj","pret":99},
        {"nume":"nume2", "desc":"desc2","mat":"mat2","pret":98}
      ];

      getNames():string[]{
        return this.names;
      }

      getProducts():any[]{
        const productProperties = this.products.map(product => {
          return {
            nume: product.nume,
            desc: product.desc,
            mat: product.mat,
            pret: product.pret
          };
        });
      
        return productProperties;
      }
  }