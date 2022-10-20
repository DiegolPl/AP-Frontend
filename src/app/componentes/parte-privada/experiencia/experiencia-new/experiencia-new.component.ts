import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/parte-privada/experiencia.service';

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
    console.log('Anda este metodo')
    console.log(this.experienciaForm.value)
    this.expService.addExperiencia(this.experienciaForm.value).subscribe(data => data);
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
