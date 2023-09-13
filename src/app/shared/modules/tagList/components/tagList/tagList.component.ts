import {Component, Input} from '@angular/core'
import {PopularTagType} from '../../../../types/popularTag.type'
@Component({
  selector: 'medium-tag-list',
  templateUrl: './tagList.component.html',
  styleUrls: ['./tagList.component.css']
})
export class TagListComponent {
  @Input('tags') tagsProps: PopularTagType[]
}
