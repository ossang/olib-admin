import { AfterViewInit, Component, OnDestroy, Input }   from '@angular/core';
import { NbThemeService }                               from '@nebular/theme';
import { OlibChartPieConfig }                           from './olib-chart-pie-config.model';

@Component({
  selector: 'olib-chart-pie',
  templateUrl: './olib-chart-pie.component.html',
  styleUrls: ['./olib-chart-pie.component.scss']
})
export class OlibChartPieComponent implements AfterViewInit, OnDestroy {

  @Input("config")
  config : OlibChartPieConfig;

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.config.$names,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: this.config.$title,
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.config.$data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
