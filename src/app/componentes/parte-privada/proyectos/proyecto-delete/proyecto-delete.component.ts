import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/service/parte-privada/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-delete',
  templateUrl: './proyecto-delete.component.html',
  styleUrls: ['./proyecto-delete.component.css']
})
export class ProyectoDeleteComponent implements OnInit {

  proyectoForm:FormGroup;
  existeProyecto: boolean = false;

  constructor(private readonly fb:FormBuilder, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
  }

  getProyecto(){
    let id = document.getElementById('delete-proyecto-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
    console.log(idNumerico);
    this.proyectoService.getProyecto(idNumerico).subscribe(data => {
      if(data == null){
        this.existeProyecto = true;
      }else{
        this.proyectoForm.setValue({
          id:data.id,
          archivo: '',
          titulo: data.titulo,
          link: data.link,
          fecha: data.fecha,
          descripcion: data.descripcion
        })
        this.existeProyecto = false;
      }
    })
  }

  eliminarProyecto(){

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
        let idInput = document.getElementById('delete-proyecto-input-id') as HTMLInputElement;
        let idNumerico = Number(idInput.value);
        this.proyectoService.deleteProyecto(idNumerico).subscribe(data => data);
        Swal.fire(
          'Éxito!',
          'El elemento fue eliminado correctamente.',
          'success'
        )
        this.proyectoForm.reset('');
      }
    })

    
  }

  initForm():FormGroup {
    return this.fb.group({
      id: [''],
      archivo: [''],
      link: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      titulo: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
