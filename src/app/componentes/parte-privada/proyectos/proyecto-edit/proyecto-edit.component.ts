import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudinaryService } from 'src/app/service/cloudinary.service';
import { ProyectoService } from 'src/app/service/parte-privada/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {

  proyectoForm:FormGroup;
  existeProyecto: boolean = false;
  files:File[] = [];
  
  constructor(private readonly fb:FormBuilder, private proyectoService:ProyectoService, private cloudinaryService: CloudinaryService) { }

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

  //Evento para guardar el archivo en el formulario - evento change
  // archivo:any;

  // onChange(e: any) {
  //   let extensionAllowed: any = { "png": true, "jpeg": true, "jpg": true };
  //   let file = e.target.files[0];
  //   if (file.size / 1024 / 1024 > 20) {
  //     alert("File size should be less than 20MB")
  //     return;
  //   }
  //   if (extensionAllowed) {
  //     var nam = file.name.split('.').pop();
  //     if (!extensionAllowed[nam]) {
  //       alert("Please upload " + Object.keys(extensionAllowed) + " file.")
  //       return;
  //     }
  //   }
  //   this.archivo = file;
  //   this.proyectoForm.controls["archivo"].setValue(file);
  // }
  
  //Accion a realizar el envio del formulario
  editarProyecto(){

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
        let idInput = document.getElementById('edit-proyecto-input-id') as HTMLInputElement;
        let idNumerico = Number(idInput.value);
        let datosFormulario = this.proyectoForm.value;
        datosFormulario['id_proyecto'] = idNumerico;
        this.proyectoService.editProyecto(datosFormulario).subscribe(data => data);
        Swal.fire(
          'Éxito!',
          'El elemento fue editado correctamente.',
          'success'
        )
      }
    })

    
  }

  getProyecto(){
    let id = document.getElementById('edit-proyecto-input-id') as HTMLInputElement;
    let idNumerico = Number(id.value);
    return this.proyectoService.getProyecto(idNumerico).subscribe(data => {
      
      if(data == null){
        this.existeProyecto = true;
      }else{
        this.proyectoForm.setValue({
          id:data.id,
          url_imagen: data.url_imagen,
          titulo: data.titulo,
          link: data.link,
          fecha: data.fecha,
          descripcion: data.descripcion
        })
        this.existeProyecto = false;
      }
      
    })
  }

  initForm():FormGroup {
    return this.fb.group({
      id: [''],
      url_imagen: [''],
      link: ['',[Validators.required]],
      titulo: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
