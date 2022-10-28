import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from 'src/app/service/parte-privada/perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {

  datos:any;
  perfilForm:FormGroup

  constructor(private readonly fb:FormBuilder, private perfilService:PerfilService) { }

  ngOnInit(): void {
    this.datos = this.getPerfil(1)
    this.perfilForm = this.initForm();
  }

  //Evento para guardar el archivo en el formulario - evento change
  archivo:any;

  onChange(e: any) {
    let extensionAllowed: any = { "png": true, "jpeg": true, "jpg": true };
    let file = e.target.files[0];
    if (file.size / 1024 / 1024 > 20) {
      alert("File size should be less than 20MB")
      return;
    }
    if (extensionAllowed) {
      var nam = file.name.split('.').pop();
      if (!extensionAllowed[nam]) {
        alert("Please upload " + Object.keys(extensionAllowed) + " file.")
        return;
      }
    }
    this.archivo = file;
    this.perfilForm.controls["archivo"].setValue(file);
  }

  //Accion a realizar el envio del formulario
  onEditPerfil(){

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
        let datosFormulario = this.perfilForm.value;
        datosFormulario['id'] = "1";
        this.perfilService.editPerfil(datosFormulario).subscribe(data => data);
        Swal.fire(
          'Éxito!',
          'El elemento fue editado correctamente.',
          'success'
        )
      }
    })

    
  }

  getPerfil(id:number){
    return this.perfilService.getPerfil(id).subscribe(data => {
      
      this.perfilForm.setValue({
        id: "1",
        archivo: "",
        nombre: data.nombre,
        titulo: data.titulo,
        sobreMi: data.sobreMi
      })
      
    })
  }

  initForm():FormGroup {
    return this.fb.group({
      id: [''],
      archivo: [''],
      nombre: ['',[Validators.required]],
      titulo: ['',[Validators.required]],
      sobreMi: ['',[Validators.required]]
    })
  }

}
