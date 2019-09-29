import { Component, OnInit, TemplateRef,ViewChild } from '@angular/core';
import { FilterService} from '@syncfusion/ej2-angular-grids';
import { ModuleService } from '../module.service';
import * as dataset from "../../../assets/JSON/dataset.json";
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FilterSettingsModel, IFilter } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  public data: object[];
  public pageSettings: PageSettingsModel;
  public filterOptions: FilterSettingsModel;
  public filter: IFilter;
  
  constructor() { }

  ngOnInit() {
    //console.log(dataset['default']['dataset']);
    this.data = dataset['default']['dataset']; 
    this.pageSettings = { pageSize: 10 };
    this.filterOptions = {
      type: 'Menu'
   };
  }
}
