import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delivery } from '../../models/delivery.model'; 

const apiUrl = 'http://localhost:5000/api/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(apiUrl);
  }

  getDeliveryById(delivery_id: any): Observable<Delivery> {
    return this.http.get<Delivery>(`${apiUrl}/${delivery_id}`);
  }

  createDelivery(data: any): Observable<Delivery> {
    return this.http.post<Delivery>(apiUrl, data);
  }

  updateDelivery(delivery_id: any, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/${delivery_id}`, data);
  }

  deleteDelivery(delivery_id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/${delivery_id}`);
  }
}
