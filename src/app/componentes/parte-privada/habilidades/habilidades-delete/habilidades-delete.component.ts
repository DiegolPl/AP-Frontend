import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/service/parte-privada/habilidad.service';
import Swal from 'sweetalert2';

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
        let idInput = document.getElementById('delete-habilidades-input-id') as HTMLInputElement;
        let idNumerico = Number(idInput.value);
        this.habilidadService.deleteHabilidad(idNumerico).subscribe(data => data);
        Swal.fire(
          'Éxito!',
          'El elemento fue eliminado correctamente.',
          'success'
        )
        this.habilidadForm.reset('');
      }
    })

    
  }

  initForm():FormGroup {
    return this.fb.group({
      habilidad: ['',[Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

}
