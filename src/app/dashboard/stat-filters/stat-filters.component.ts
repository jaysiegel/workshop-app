import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {
  group: FormGroup;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      region: ['all'],
      fromDate: ['2000-01-01'],
      toDate: ['2022-01-01'],
      under18: [true],
      '18to40': [true],
      '40to60': [true],
      over60: [true]
    });
  }

  ngOnInit(): void {
  }

}