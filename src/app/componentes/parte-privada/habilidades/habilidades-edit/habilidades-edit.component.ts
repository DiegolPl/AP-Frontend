import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/service/parte-privada/habilidad.service';

@Component({
  selector: 'app-habilidades-edit',
  templateUrl: './habilidades-edit.component.html',
  styleUrls: ['./habilidades-edit.component.css']
})
export class HabilidadesEditComponent implements OnInit {

  habilidadForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private habilidadService:HabilidadService) { }

  ngOnInit(): void {

    this.habilidadForm = this.initForm();

  }

  existeHabilidad: boolean = false;

  getHabilidad(){
    let id = document.getElementById('edit-habilidades-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
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

  editarHabilidad(){
    let idInput = document.getElementById('edit-habilidades-input-id') as HTMLInputElement;
    let idNumerico = Number(idInput.value);
    let datosFormulario = this.habilidadForm.value;
    datosFormulario['id'] = idNumerico;
    this.habilidadService.editHabilidad(datosFormulario).subscribe(data => data);
  }

  initForm():FormGroup {
    return this.fb.group({
      habilidad: ['',[Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

}
