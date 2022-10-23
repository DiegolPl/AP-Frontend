import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataPublicaService } from 'src/app/service/parte-publica/data-publica.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  miExperiencia:any = [];
  faTimes = faTimes;

  constructor(private dataPublicaService:DataPublicaService) { }

  ngOnInit(): void {
    this.dataPublicaService.getExperiencias().subscribe(data => {
      this.miExperiencia = data.reverse();
    })
  }

}
