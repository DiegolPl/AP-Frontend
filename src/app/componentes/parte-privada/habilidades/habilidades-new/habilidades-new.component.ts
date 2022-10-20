import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/service/parte-privada/habilidad.service';

@Component({
  selector: 'app-habilidades-new',
  templateUrl: './habilidades-new.component.html',
  styleUrls: ['./habilidades-new.component.css']
})
export class HabilidadesNewComponent implements OnInit {

  habilidadForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private habilidadService: HabilidadService) { }

  ngOnInit(): void {
    this.habilidadForm = this.initForm();
  }

  agregarHabilidad(): void{
    this.habilidadService.addHabilidad(this.habilidadForm.value).subscribe(data => data);
  }

  initForm():FormGroup {
    return this.fb.group({
      habilidad: ['',[Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

}
