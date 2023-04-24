import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

 constructor(private http: HttpClient) { }
postData(data: any): Observable<HttpResponse<any>> {
  return this.http.post<any>('http://localhost:5000/api/post', data);
}
showData():Observable<HttpResponse<any>> {
  return this.http.get<any>('http://localhost:5000/api/getAll',);
}
deleteData(_id:any):Observable<HttpResponse<any>> {
  return this.http.delete<any>('http://localhost:5000/api/delete'+`/${_id}`);
}
updataData(data:any, _id:any):Observable<HttpResponse<any>> {
  return this.http.patch<any>('http://localhost:5000/api/update'+`/${_id}`, data);
}
getData(_id:any):Observable<HttpResponse<any>> {
  return this.http.get<any>('http://localhost:5000/api/getOne/'+`${_id}`,);
}
}
