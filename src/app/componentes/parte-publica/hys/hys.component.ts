import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataTemporalService } from 'src/app/service/parte-publica/data-temporal.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  myPorfolio:any = [];
  faTimes = faTimes;

  constructor(private dataTemporalService:DataTemporalService) { }

  ngOnInit(): void {
    this.dataTemporalService.getData().subscribe(data => {
      this.myPorfolio = data;
    })
  }

}
