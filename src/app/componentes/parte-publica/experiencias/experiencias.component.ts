import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataTemporalService } from 'src/app/service/parte-publica/data-temporal.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  miPorfolio:any = [];
  faTimes = faTimes;
  experienciasOrdenadas:any = [];

  constructor(private dataTemporalService:DataTemporalService) { }

  ngOnInit(): void {
    this.dataTemporalService.getData().subscribe(data => {
      this.miPorfolio = data;
    })
  }

}
