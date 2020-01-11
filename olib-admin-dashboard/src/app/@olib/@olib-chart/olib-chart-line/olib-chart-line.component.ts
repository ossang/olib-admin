import { AfterViewInit, Component, OnDestroy, Input }  from '@angular/core';
import { NbThemeService }                       from '@nebular/theme';
import { OlibChartLineConfig }                  from './olib-chart-line-config.model';

@Component({
  selector: 'olib-chart-line',
  templateUrl: './olib-chart-line.component.html',
  styleUrls: ['./olib-chart-line.component.scss']
})
export class OlibChartLineComponent  implements AfterViewInit, OnDestroy {
  
  @Input("config")
  config : OlibChartLineConfig;

  options: any = {};
  updateOptions : any = {};

  private themeSubscription: any;
  private timer: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.initializeOptions();
  }

  initializeOptions(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.success, colors.warning, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} = {c}',
        },
        legend: {
          left: 'left',
          data: (this.config)?this.config.$legend:[],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: (this.config)?this.config.$categorys:[],
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
          },
        ],
        yAxis: [
          {
            type: 'value',
            scale:true,
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
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: (this.config)?this.config.$datas:[]
      };

      setTimeout(() => {
        this.updateData();
      }, 5000);
      this.refreshData();

    });
  }

  updateData(){
    this.updateOptions = {
      xAxis: [
        {
          data: (this.config)?this.config.$categorys:[]
        }
      ],
      series: (this.config)?this.config.$datas:[]
    };
  }

  refreshData(){
    if(this.config && this.config.$isDynamicData){
      this.timer = setInterval(() => {
        this.updateData();
      }, this.config.$updateTime);
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    if(this.config.$isDynamicData){
      clearInterval(this.timer);
    }
  }
}
