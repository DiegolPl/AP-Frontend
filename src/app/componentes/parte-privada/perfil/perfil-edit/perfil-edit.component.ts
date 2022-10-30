import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudinaryService } from 'src/app/service/cloudinary.service';
import { PerfilService } from 'src/app/service/parte-privada/perfil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {

  datos:any;
  files:File[] = [];
  perfilForm:FormGroup

  constructor(private readonly fb:FormBuilder, private perfilService:PerfilService, private cloudinaryService: CloudinaryService) { }

  ngOnInit(): void {
    this.datos = this.getPerfil(1)
    this.perfilForm = this.initForm();
  }

  onChange(event: any){
    this.files.push(event.target.files[0]);
    
    if(!this.files[0]){
      Swal.fire({
        target:'#modal-login',
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes subir una imagen'
      })
    }else{
      this.uploadPhoto();
    }
  }

  uploadPhoto(){
    
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file',file_data);
      data.append('upload_preset', 'perfil');
      data.append('cloud_name', 'apalmacen');

      this.cloudinaryService.uploadImage(data).subscribe(response => {
        if(response){
          console.log(response.secure_url)
          this.perfilForm.controls["urlImg"].setValue(response.secure_url);
        }
      })

  }

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
        urlImg: data.urlImg,
        nombre: data.nombre,
        titulo: data.titulo,
        sobreMi: data.sobreMi
      })
      
    })
  }

  initForm():FormGroup {
    return this.fb.group({
      id: [''],
      urlImg:['',[Validators.required]],
      nombre: ['',[Validators.required]],
      titulo: ['',[Validators.required]],
      sobreMi: ['',[Validators.required]]
    })
  }

}
