import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/service/parte-publica/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private readonly fb:FormBuilder, private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  myPorfolio: any;

  faTimes = faTimes;

  // Cerrar ventana modal de login
  cerrarLogin(){
    // Cierro la ventana sacandole la clase
    document.getElementById('modal-login')?.classList.remove('modal-ventana-active');
    // Vacio los inputs
    let userInput = document.getElementById('user-input') as HTMLInputElement;
    let passInput = document.getElementById('pass-input') as HTMLInputElement;
    userInput.value = '';
    passInput.value = '';
    // Vuelvo a bajar los labels (cambio estetico para que no queden flotando)
    document.getElementById('label-login-user')?.classList.remove('label-top');
    document.getElementById('label-login-pass')?.classList.remove('label-top');

  }

  // Subo los labels cuando detectan una tecla presionada para que no se superpongan (estetico)
  subirLabelUser(){
    let userInput = document.getElementById('user-input') as HTMLInputElement;
    if( userInput.value.length > 0){
      document.getElementById('label-login-user')?.classList.add('label-top');
    }else{
      document.getElementById('label-login-user')?.classList.remove('label-top');
    }
  }

  subirLabelPass(){
    let passInput = document.getElementById('pass-input') as HTMLInputElement;
    if( passInput.value.length > 0){
      document.getElementById('label-login-pass')?.classList.add('label-top');
    }else{
      document.getElementById('label-login-pass')?.classList.remove('label-top');
    }
  }

  // Sistema de login
  login(){
    console.log(this.loginForm.value)
    
    this.loginService.consultarUsuario(this.loginForm.value).subscribe(data => {
      let validamosLogin:boolean = data;
      if(validamosLogin){

        let tokenFake = "Tenemos un token";
        sessionStorage.setItem("access-token",tokenFake);

        let userInput = document.getElementById('user-input') as HTMLInputElement;
        let passInput = document.getElementById('pass-input') as HTMLInputElement;
        let userValue = userInput.value;
        let passValue = passInput.value;

        // Cierro la ventana de login
        document.getElementById('modal-login')?.classList.toggle('modal-ventana-active');
        // Elimino los valores de dicha ventana
        userValue = "";
        passValue = "";
        // Remuevo el efecto de subir el label
        document.getElementById('label-login-user')?.classList.remove('label-top');
        document.getElementById('label-login-pass')?.classList.remove('label-top');
        
        this.router.navigate(["/dashboard"]);

      }else{
        Swal.fire({
          target:'#modal-login',
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario y/o contraseña inválida'
        })
      }
    })
  }

  initForm():FormGroup {
    return this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

}
