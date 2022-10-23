import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataPublicaService } from 'src/app/service/parte-publica/data-publica.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {

  miEducacion:any = [];
  faTimes = faTimes;

  constructor(private dataPublicaService:DataPublicaService) { }

  ngOnInit(): void {
    this.dataPublicaService.getEducacion().subscribe(data => this.miEducacion = data.reverse());
  }

}
