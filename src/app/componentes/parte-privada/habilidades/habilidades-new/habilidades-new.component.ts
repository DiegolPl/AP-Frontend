import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/service/parte-privada/habilidad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-habilidades-new',
  templateUrl: './habilidades-new.component.html',
  styleUrls: ['./habilidades-new.component.css']
})
export class HabilidadesNewComponent implements OnInit {

  habilidadForm: FormGroup;

  constructor(private readonly fb:FormBuilder, private habilidadService: HabilidadService) { }

  ngOnInit(): void {
    this.habilidadForm = this.initForm();
  }

  agregarHabilidad(): void{
    this.habilidadService.addHabilidad(this.habilidadForm.value).subscribe(data => data);
    Swal.fire(
      'Éxito!',
      'El elemento fue agregado correctamente!',
      'success'
    )
    this.habilidadForm.reset('');
  }

  initForm():FormGroup {
    return this.fb.group({
      habilidad: ['',[Validators.required]],
      porcentaje: ['',[Validators.required]]
    })
  }

}
