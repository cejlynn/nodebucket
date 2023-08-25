/**
 * Title: security.service.ts
 * Author: Caitlynne Johnson
 * Date: 8/5/2023
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  findEmployeeById(empId: number) {
    return this.http.get('/api/employees/' + empId)
  }
}
