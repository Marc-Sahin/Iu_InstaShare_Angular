import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
  private baseUrl = 'https://localhost:4200/api/';
  protected abstract name: string;

  constructor(protected client: HttpClient) { }

  public getAll(): Observable<T[]> {
    return this.client.get<T[]>(this.baseUrl + this.name + '/getAll');
  }

  public getById(id: number): Observable<T> {
    return this.client.get<T>(this.baseUrl + this.name + '/getById?id=' + id);
  }

  public create(entity: T): Observable<T> {
    return this.client.post<T>(this.baseUrl + this.name + '/create', entity);
  }

  public update(entity: T): Observable<T> {
    return this.client.post<T>(this.baseUrl + this.name + '/update', entity)
  }

  public deleteById(id: number): Observable<T> {
    return this.client.delete<T>(this.baseUrl + this.name + '/deleteById?id=' + id)
  }
}
