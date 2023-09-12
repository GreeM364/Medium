import {Component, Input, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getFeedAction} from '../../store/actions/getFeed.action'
import {Observable} from 'rxjs'
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface'
import {errorSelector, feedSelector, isLoadingSelector} from '../../store/selectors'

// @ts-ignore
@Component({
  selector: 'medium-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  @Input('apiUrl') apiUrlProps: string

  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void{
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void{
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
