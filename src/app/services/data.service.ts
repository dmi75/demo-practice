import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(`${environment.baseURL}/category`)
  }

  getSubCategoryByCatId(catId: any): Observable<any>{
    return this.http.get<any>(`${environment.baseURL}/subcategory/${catId}`)
  }

  getProductByCatId(catId: any): Observable<any>{
    return this.http.get<any>(`${environment.baseURL}/products/cat/${catId}`)
  }

  getProductById(id: any): Observable<any>{
    return this.http.get<any>(`${environment.baseURL}/products/${id}`)
  }

}
