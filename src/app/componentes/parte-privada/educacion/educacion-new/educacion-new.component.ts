import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/service/parte-privada/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-new',
  templateUrl: './educacion-new.component.html',
  styleUrls: ['./educacion-new.component.css']
})
export class EducacionNewComponent implements OnInit {

  educacionForm:FormGroup;

  constructor(private readonly fb:FormBuilder, private eduService:EducacionService) { }

  ngOnInit(): void {
    this.educacionForm = this.initForm();
  }

  agregarEducacion(): void{
    this.eduService.addEducacion(this.educacionForm.value).subscribe(data => data);
    Swal.fire(
      'Éxito!',
      'El elemento fue agregado correctamente!',
      'success'
    )
    this.educacionForm.reset('');
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
