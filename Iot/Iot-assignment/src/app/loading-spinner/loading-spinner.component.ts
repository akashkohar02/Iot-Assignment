import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  animations: [
    trigger('fade', [
      state('inactive', style({right: '90%'})),
      state('active', style({right: 0})),
      transition('* <=> *', [animate(1000)]),
    ]),
  ],
})
export class LoadingSpinnerComponent implements OnInit {
  public state = 'inactive';

  cpLogoLoadingIcon = './assets/loading/cp-logo-loading.svg';
  loaderIcon = './assets/loading/loader.gif';

  constructor() {}

  ngOnInit() {}
}
