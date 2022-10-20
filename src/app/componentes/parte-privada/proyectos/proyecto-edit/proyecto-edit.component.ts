import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/service/parte-privada/proyecto.service';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {

  proyectoForm:FormGroup;
  existeProyecto: boolean = false;
  
  constructor(private readonly fb:FormBuilder, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
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
    this.proyectoForm.controls["archivo"].setValue(file);
  }
  
  //Accion a realizar el envio del formulario
  editarProyecto(){
    let idInput = document.getElementById('edit-proyecto-input-id') as HTMLInputElement;
    let idNumerico = Number(idInput.value);
    let datosFormulario = this.proyectoForm.value;
    datosFormulario['id_proyecto'] = idNumerico;
    console.log(datosFormulario)
    this.proyectoService.editProyecto(datosFormulario).subscribe(data => data);
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

  initForm():FormGroup {
    return this.fb.group({
      id: [''],
      archivo: [''],
      link: ['',[Validators.required]],
      titulo: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
