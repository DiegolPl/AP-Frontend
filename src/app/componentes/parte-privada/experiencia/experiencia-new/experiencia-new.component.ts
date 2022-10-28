import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/parte-privada/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-new',
  templateUrl: './experiencia-new.component.html',
  styleUrls: ['./experiencia-new.component.css']
})
export class ExperienciaNewComponent implements OnInit {

  experienciaForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private expService:ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaForm = this.initForm();
  }

  agregarExperiencia(): void{
    this.expService.addExperiencia(this.experienciaForm.value).subscribe(data => data);
    Swal.fire(
      'Éxito!',
      'El elemento fue agregado correctamente!',
      'success'
    )
    this.experienciaForm.reset('');
  }

  initForm():FormGroup {
    return this.fb.group({
      lugar: ['',[Validators.required]],
      ocupacion: ['',[Validators.required]],
      fecha_inicio: ['',[Validators.required]],
      fecha_fin: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
  }
}
