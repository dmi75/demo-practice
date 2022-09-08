import { Component, OnInit,ViewChild} from '@angular/core';
import { List, Service } from 'src/app/services/app.service';
import { DxDrawerComponent } from 'devextreme-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent implements OnInit  {
  @ViewChild(DxDrawerComponent, { static: false }) drawer!: DxDrawerComponent;
  selectedOpenMode = 'shrink';
  selectedPosition = 'left';
  selectedRevealMode = 'slide';
  isDrawerOpen = true;
  navigation: List[];

  constructor(service: Service) { 
    this.navigation = service.getNavigationList();
  }
  
  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];

  ngOnInit(): void {
  }
}
