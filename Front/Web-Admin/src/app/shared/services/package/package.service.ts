import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Package } from '../../models/package.model'; 
import { map } from 'rxjs/operators'; 

const apiUrl = 'http://localhost:5000/api/package';

@Injectable({
  providedIn: 'root'
})

export class PackageService {
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Package[]> {
    return this.http.get<Package[]>(apiUrl);
  }

  getPackageById(package_id: any): Observable<Package> {
    return this.http.get<Package>(`${apiUrl}/${package_id}`);
  }

  createPackage(data: any): Observable<any> {
    return this.http.post<Package>(apiUrl, data);
  }

  updatePackage(package_id: any, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/${package_id}`, data);
  }

  deletePackage(package_id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/${package_id}`);
  }

  // getAllPackageIds(): Observable<string[]> {
  //   return this.http.get<Package[]>(`${apiUrl}/packageIds`).pipe(
  //     map((packages: Package[]) => packages.map((pkg) => pkg._id || ''))
  //   );
  // }
}
