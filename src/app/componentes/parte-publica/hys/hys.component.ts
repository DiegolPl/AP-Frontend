import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataPublicaService } from 'src/app/service/parte-publica/data-publica.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  miHabilidad:any = [];
  porcentaje: string;
  faTimes = faTimes;

  constructor(private dataPublicaService:DataPublicaService) { }

  ngOnInit(): void {
    this.dataPublicaService.getHabilidades().subscribe(data => this.miHabilidad = data);
  }

}
