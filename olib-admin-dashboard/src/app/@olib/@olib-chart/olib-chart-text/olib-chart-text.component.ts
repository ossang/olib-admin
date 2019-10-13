import { Component, OnInit, Input } from '@angular/core';
import { OlibChartTextConfig } from './olib-chart-text-config.model';

@Component({
  selector: 'olib-chart-text',
  templateUrl: './olib-chart-text.component.html',
  styleUrls: ['./olib-chart-text.component.scss']
})
export class OlibChartTextComponent implements OnInit {

  @Input("config")
  config : OlibChartTextConfig;

  constructor() { }

  ngOnInit() {
  }

}
