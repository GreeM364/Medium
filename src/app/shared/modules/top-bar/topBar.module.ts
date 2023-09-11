import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TopBarComponent} from './components/topBar/topBar.component'
import {RouterLink} from '@angular/router'

@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule {}
