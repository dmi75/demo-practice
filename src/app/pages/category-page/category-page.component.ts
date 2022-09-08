import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import DataSource from 'devextreme/data/data_source';
import { Category } from 'src/app/models/category.model';
import { subCategory } from 'src/app/models/subCategory.model';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  dataSource!: DataSource;
  currentCategory = new Category();
  subCategories!: DataSource;


  constructor(private dataService: DataService) {
    this.dataService.getCategory().subscribe(response => {
      this.dataSource = response.data;
      this.currentCategory = new Category();
    })
  }

  listSelectionChanged = (e: any) => {
    this.currentCategory = e.addedItems[0];
    console.log("this.currentCategory", this.currentCategory)
    if (this.currentCategory) {
      this.dataService.getSubCategoryByCatId(e.addedItems[0].catId).subscribe(response => {
        this.subCategories = response.data
      })
    }

  };

  ngOnInit(): void {
  }

  onButtonClick(category: any) {
    console.log("category", category)
  }

}
