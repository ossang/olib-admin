import { ChangeDetectorRef, Component, OnDestroy, OnInit }  from '@angular/core';
import { MediaMatcher }                                     from '@angular/cdk/layout';
import { JsonService }                                      from '../services/json/json.service';

@Component({
  selector: 'olib-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnDestroy,OnInit {

  headerList : any;
  sidebarList : any;

  mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private media: MediaMatcher,
    private jsonService : JsonService
    ) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  initialize(){
    this.initializeMobileQuery();
    this.initializeMenu();
  }

  initializeMobileQuery(){
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  initializeMenu(){
    this.jsonService.getMenu().subscribe(res=>{
      this.headerList = res.menu;
    });
  }

  selectedHeader(submenu){
    this.sidebarList = submenu;
  }
}
