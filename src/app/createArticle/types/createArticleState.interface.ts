import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'

export class CreateArticleStateInterface{
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
