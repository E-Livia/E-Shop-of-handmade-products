import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date="Datele contului";
  date1="Adresa mea";
  date2="Adresa de facturare";

  tabel: any[] = [
    { id: 1, date: '22 mai 2023', price: 20, status:'in curs de livrare' },
    { id: 2, date: '22 mai 2023', price: 20, status:'in curs de livrare' }
  ];

  goToAboutPage(){
    this.router.navigate(['/about']);
  }

  logOut(){
    //to do
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
