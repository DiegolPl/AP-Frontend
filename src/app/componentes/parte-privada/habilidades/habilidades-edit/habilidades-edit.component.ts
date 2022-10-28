import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/service/parte-privada/habilidad.service';
import Swal from 'sweetalert2';

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
        let idInput = document.getElementById('edit-habilidades-input-id') as HTMLInputElement;
        let idNumerico = Number(idInput.value);
        let datosFormulario = this.habilidadForm.value;
        datosFormulario['id'] = idNumerico;
        this.habilidadService.editHabilidad(datosFormulario).subscribe(data => data);
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
      habilidad: ['',[Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

}
