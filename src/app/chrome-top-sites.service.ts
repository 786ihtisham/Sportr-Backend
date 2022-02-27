import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChromeTopSitesService {

  baseUrl: string = "https://www.cloudflaresportr.com/api";
  // baseUrl:string ="api";
  constructor(private http: HttpClient) { }
  addChromeTopSites(url, user_Id) {
    return this.http.post(this.baseUrl + "/auth/addChromeSites", { userId: user_Id, url: url });
  }
  addNewSource(url, user_Id) {
    return this.http.post(this.baseUrl + "/auth/addNewSource", { userId: user_Id, url: url });
  }

  getChromeTopSites(id): Observable<any> {
    return this.http.get<[]>(this.baseUrl + "/auth/getChromeSites/" + id);
  }
  getNewSource(id): Observable<any> {
    return this.http.get<[]>(this.baseUrl + "/auth/getAllNewSource/" + id);
  }

  removeChromeTopSites(id) {
    return this.http.delete(this.baseUrl + "/auth/deleteChromeSites/" + id);
  }
  removeSource(id) {
    return this.http.delete(this.baseUrl + "/auth/deleteSource/" + id);
  }

}
