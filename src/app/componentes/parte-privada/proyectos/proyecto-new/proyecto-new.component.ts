import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudinaryService } from 'src/app/service/cloudinary.service';
import { ProyectoService } from 'src/app/service/parte-privada/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-new',
  templateUrl: './proyecto-new.component.html',
  styleUrls: ['./proyecto-new.component.css']
})
export class ProyectoNewComponent implements OnInit {

  proyectoForm: FormGroup;
  files:File[] = [];

  constructor(private readonly fb:FormBuilder, private proyectoService:ProyectoService, private cloudinaryService:CloudinaryService) { }

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
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
      data.append('upload_preset', 'proyectos');
      data.append('cloud_name', 'apalmacen');

      this.cloudinaryService.uploadImage(data).subscribe(response => {
        if(response){
          console.log(response.secure_url)
          this.proyectoForm.controls["url_imagen"].setValue(response.secure_url);
        }
      })

  }

  agregarProyecto(): void{

    if(!this.files[0]){
      Swal.fire({
        target:'#modal-login',
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes subir una imagen'
      })
    }else{
      this.proyectoService.addProyecto(this.proyectoForm.value).subscribe(data => data);
      Swal.fire(
        'Éxito!',
        'El elemento fue agregado correctamente!',
        'success'
      )
      this.proyectoForm.reset('');
    }
  }

  initForm():FormGroup {
    return this.fb.group({
      url_imagen: [''],
      titulo: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      link: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
