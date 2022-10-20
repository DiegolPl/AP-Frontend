import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/service/parte-privada/educacion.service';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {

  educacionForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private eduService:EducacionService) { }

  ngOnInit(): void {

    this.educacionForm = this.initForm();

  }

  existeEducacion: boolean = false;

  getEducacion(){
    let id = document.getElementById('edit-educacion-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
    this.eduService.getEducacion(idNumerico).subscribe(data => {
      if(data == null){
        this.existeEducacion = true;
      }else{
        this.educacionForm.setValue({
          instituto: data.instituto,
          titulo: data.titulo,
          fecha_inicio: data.fecha_inicio,
          fecha_fin: data.fecha_fin,
          descripcion: data.descripcion
        })
        this.existeEducacion = false;
      }
    })
  }

  editarEducacion(){
    let idInput = document.getElementById('edit-educacion-input-id') as HTMLInputElement;
    let idNumerico = Number(idInput.value);
    let datosFormulario = this.educacionForm.value;
    datosFormulario['id'] = idNumerico;
    this.eduService.editEducacion(datosFormulario).subscribe(data => data);
  }

  initForm():FormGroup {
    return this.fb.group({
      instituto: ['',[Validators.required]],
      titulo: ['',[Validators.required]],
      fecha_inicio: ['',[Validators.required]],
      fecha_fin: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
