import {Component} from '@angular/core'

@Component({
  selector: 'medium-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.component.css']
})
export class YourFeedComponent {
  apiUrl = '/articles/feed'
}
