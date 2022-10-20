import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/service/parte-privada/habilidad.service';

@Component({
  selector: 'app-habilidades-delete',
  templateUrl: './habilidades-delete.component.html',
  styleUrls: ['./habilidades-delete.component.css']
})
export class HabilidadesDeleteComponent implements OnInit {

  habilidadForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private habilidadService:HabilidadService) { }

  ngOnInit(): void {

    this.habilidadForm = this.initForm();

  }

  existeHabilidad: boolean = false;

  getHabilidad(){
    let id = document.getElementById('delete-habilidades-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
    console.log(idNumerico);
    this.habilidadService.getHabilidad(idNumerico).subscribe(data => {
      if(data == null){
        this.existeHabilidad = true;
      }else{
        this.habilidadForm.setValue({
          habilidad: data.habilidad,
          porcentaje: data.porcentaje
        })
        this.existeHabilidad = false;
      }
    })
  }

  eliminarHabilidad(){
    let idInput = document.getElementById('delete-habilidades-input-id') as HTMLInputElement;
    let idNumerico = Number(idInput.value);
    this.habilidadService.deleteHabilidad(idNumerico).subscribe(data => data);
  }

  initForm():FormGroup {
    return this.fb.group({
      habilidad: ['',[Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

}