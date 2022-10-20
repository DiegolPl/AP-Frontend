import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/parte-privada/experiencia.service';

@Component({
  selector: 'app-experiencia-delete',
  templateUrl: './experiencia-delete.component.html',
  styleUrls: ['./experiencia-delete.component.css']
})
export class ExperienciaDeleteComponent implements OnInit {

  experienciaForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private expService:ExperienciaService) { }

  ngOnInit(): void {

    this.experienciaForm = this.initForm();

  }

  existeExperiencia: boolean = false;

  getExperiencia(){
    let id = document.getElementById('delete-experiencia-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
    console.log(idNumerico);
    this.expService.getExperiencia(idNumerico).subscribe(data => {
      if(data == null){
        this.existeExperiencia = true;
      }else{
        this.experienciaForm.setValue({
          lugar: data.lugar,
          ocupacion: data.ocupacion,
          fecha_inicio: data.fecha_inicio,
          fecha_fin: data.fecha_fin,
          descripcion: data.descripcion
        })
        this.existeExperiencia = false;
      }
    })
  }

  deleteExperiencia(){
    let idInput = document.getElementById('delete-experiencia-input-id') as HTMLInputElement;
    let idNumerico = Number(idInput.value);
    this.expService.deleteExperiencia(idNumerico).subscribe(data => data);
  }

  initForm():FormGroup {
    return this.fb.group({
      lugar: ['',[Validators.required]],
      ocupacion: ['',[Validators.required]],
      fecha_inicio: ['',[Validators.required]],
      fecha_fin: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
