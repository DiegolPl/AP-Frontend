import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/service/parte-privada/proyecto.service';

@Component({
  selector: 'app-proyecto-new',
  templateUrl: './proyecto-new.component.html',
  styleUrls: ['./proyecto-new.component.css']
})
export class ProyectoNewComponent implements OnInit {

  proyectoForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.proyectoForm = this.initForm();
  }

  archivo:any;
  onChange(e:any):void {
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

  agregarProyecto(): void{
    console.log(this.proyectoForm.value)
    this.proyectoService.addProyecto(this.proyectoForm.value).subscribe(data => data);
  }

  initForm():FormGroup {
    return this.fb.group({
      archivo: [''],
      titulo: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      link: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }

}
