import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'
import {Observable} from 'rxjs'
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors'
import {AuthService} from '../../services/auth.service'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'

@Component({
  selector: 'medium-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  form: FormGroup;
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void{
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    });

    console.log(this.form.valid);
  }

  initializeValues() : void{
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void{
    console.log(this.form.value)
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}));
  }

}
