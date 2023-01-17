import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimulationRequest } from '../data/model/simulationRequest';
import { SimulationResponse } from '../data/model/simulationResponse';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor(private httpClient: HttpClient) {}

  simulate(request: SimulationRequest): Observable<SimulationResponse> {
    return this.httpClient.post<SimulationResponse>(
      `${environment.apiUrl}/api/Montyhall/Simulate`,
      request
    );
  }
}
