import { Component, OnInit } from '@angular/core';
import { CommunesService } from '../services/communes.service';
import { Commune } from '../models/commune.model';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-communes-list',
  standalone: true,
  imports: [NgFor, NgStyle, HttpClientModule],
  templateUrl: './communes-list.component.html',
  styleUrls: ['./communes-list.component.css']
})
export class CommunesListComponent implements OnInit {

  getColor(Province: string) {
    switch(Province) {
      case 'Nord': return 'blue';
      case 'Sud': return 'red';
      case 'Iles': return 'green';
      default: return 'black';
    }
  }
  
  getFontSize(Population: number) {
    if (Population > 10000) {
      return 24;
    } else if (Population > 5000) {
      return 20;
    } else {
      return 16;
    }
  }
  
  communes: Commune[] = [];

  constructor(private communesService: CommunesService) { }

  ngOnInit(): void {
    this.communesService.getCommunes().subscribe(data => {
      this.communes = data;
    });
  }

}
