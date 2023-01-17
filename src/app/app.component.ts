import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SimulationService } from './services/simulationService';
import { SimulationRequest } from './data/model/simulationRequest';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  wins:string;
  reactiveForm: FormGroup;

  constructor(private simulationService: SimulationService) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      simulationCount: new FormControl("10000"),
      switchdoor: new FormControl("0")
    });
  }

  onSubmit() {
    this.simulationService
      .simulate({
        SimulationCount: Number(this.reactiveForm.value.simulationCount),
        SwitchDoor: Number(this.reactiveForm.value.switchdoor)
      } as SimulationRequest)
      .subscribe((r) => {
        this.wins = String(r.wins);
      });
  }
}
