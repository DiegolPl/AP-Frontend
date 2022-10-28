import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/parte-privada/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-delete',
  templateUrl: './educacion-delete.component.html',
  styleUrls: ['./educacion-delete.component.css']
})
export class EducacionDeleteComponent implements OnInit {

  educacionForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private eduService:EducacionService, private router:Router) { }

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

    Swal.fire({
      title: 'Estás seguro?',
      text: "Por favor, confirma los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        let idInput = document.getElementById('delete-educacion-input-id') as HTMLInputElement;
        let idNumerico = Number(idInput.value);
        this.eduService.deleteEducacion(idNumerico).subscribe(data => data);
        Swal.fire(
          'Éxito!',
          'El elemento fue eliminado correctamente.',
          'success'
        )
        this.educacionForm.reset('');
      }
    })

    
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
