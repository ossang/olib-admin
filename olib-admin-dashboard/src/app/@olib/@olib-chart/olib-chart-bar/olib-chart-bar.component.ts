import { AfterViewInit, Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { OlibChartBarConfig } from './olib-chart-bar-config.model';

@Component({
  selector: 'olib-chart-bar',
  templateUrl: './olib-chart-bar.component.html',
  styleUrls: ['./olib-chart-bar.component.scss']
})
export class OlibChartBarComponent implements AfterViewInit, OnDestroy  {

  @Input("config")
  config : OlibChartBarConfig;

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      let category = [
        {
          type: 'category',
          data: this.config.$categorys,
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: echarts.axisLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: echarts.textColor,
            },
          },
        }
      ];

      let value = [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: echarts.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: echarts.splitLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: echarts.textColor,
            },
          },
        },
      ];

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: (this.config.$isVertical)?category:value,
        yAxis: (this.config.$isVertical)?value:category,
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: this.config.$values,
          }
        ],
      };

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
