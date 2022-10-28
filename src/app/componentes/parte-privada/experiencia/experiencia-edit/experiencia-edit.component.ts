import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/parte-privada/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {

  experienciaForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private expService:ExperienciaService) { }

  ngOnInit(): void {

    this.experienciaForm = this.initForm();

  }

  existeExperiencia: boolean = false;

  getExperiencia(){
    let id = document.getElementById('edit-experiencia-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
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

  editarExperiencia(){

    Swal.fire({
      title: 'Estás seguro?',
      text: "Por favor, confirma los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        let idInput = document.getElementById('edit-experiencia-input-id') as HTMLInputElement;
        let idNumerico = Number(idInput.value);
        let datosFormulario = this.experienciaForm.value;
        datosFormulario['id'] = idNumerico;
        this.expService.editExperiencia(datosFormulario).subscribe(data => data);
        Swal.fire(
          'Éxito!',
          'El elemento fue editado correctamente.',
          'success'
        )
      }
    })
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
