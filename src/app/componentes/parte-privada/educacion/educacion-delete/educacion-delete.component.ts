import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/service/parte-privada/educacion.service';

@Component({
  selector: 'app-educacion-delete',
  templateUrl: './educacion-delete.component.html',
  styleUrls: ['./educacion-delete.component.css']
})
export class EducacionDeleteComponent implements OnInit {

  educacionForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private eduService:EducacionService) { }

  ngOnInit(): void {

    this.educacionForm = this.initForm();

  }

  existeEducacion: boolean = false;

  getEducacion(){
    let id = document.getElementById('delete-educacion-input-id') as HTMLInputElement;
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

  eliminarEducacion(){
    let idInput = document.getElementById('delete-educacion-input-id') as HTMLInputElement;
    let idNumerico = Number(idInput.value);
    this.eduService.deleteEducacion(idNumerico).subscribe(data => data);
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
