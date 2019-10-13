import { AfterViewInit, Component, OnDestroy, Input }   from '@angular/core';
import { NbThemeService }                               from '@nebular/theme';
import { OlibChartBarConfig }                           from './olib-chart-bar-config.model';

@Component({
  selector: 'olib-chart-bar',
  templateUrl: './olib-chart-bar.component.html',
  styleUrls: ['./olib-chart-bar.component.scss']
})
export class OlibChartBarComponent implements AfterViewInit, OnDestroy  {

  @Input("config")
  config : OlibChartBarConfig;

  options: any = {};
  updateOptions : any = {};
  category : any;
  value : any;
  echarts : any;

  private themeSubscription: any;
  private timer: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
   this.initializeOptions(); 
  }

  initializeOptions(){
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      this.echarts = config.variables.echarts;

      this.initializeCategory();
      this.initializeValueOptions();

      this.options = {
        backgroundColor: this.echarts.bg,
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
        xAxis: (this.config.$isVertical)?this.category:this.value,
        yAxis: (this.config.$isVertical)?this.value:this.category,
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '60%',
            data: this.config.$values,
          }
        ],
      };

      this.refreshData();

    });
  }

  initializeValueOptions(){
    this.value = [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: this.echarts.axisLineColor,
          },
        },
        splitLine: {
          lineStyle: {
            color: this.echarts.splitLineColor,
          },
        },
        axisLabel: {
          textStyle: {
            color: this.echarts.textColor,
          },
        },
      },
    ];
  }

  initializeCategory(){
    this.category = [
      {
        type: 'category',
        data: this.config.$categorys,
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          lineStyle: {
            color: this.echarts.axisLineColor,
          },
        },
        axisLabel: {
          textStyle: {
            color: this.echarts.textColor,
          },
        },
      }
    ];
  }

  updateData(){
    this.updateOptions = {
      series: [{
        data: this.config.$values
      }]
    };
  }

  refreshData(){
    if(this.config.$isDynamicData){
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
