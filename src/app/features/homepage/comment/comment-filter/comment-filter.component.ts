import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Filter } from '@core/interfaces';

@Component({
  selector: 'app-comment-filter',
  templateUrl: './comment-filter.component.html',
  styleUrls: ['./comment-filter.component.scss'],
})
export class CommentFilterComponent {
  @Output() filteringEvent = new EventEmitter<any>();

  filterForm: FormGroup;
  filterItems: Array<any> = [
    { name: 'Name', value: 'name' },
    { name: 'Email', value: 'email' },
    { name: 'Body', value: 'body' },
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filterType: ['name', [Validators.required]],
      filterInput: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.filterForm.valid) {
      const filterType = this.filterForm.get('filterType')?.value;
      const filterInput = this.filterForm.get('filterInput')?.value;
      const filterObj: Filter = {
        type: filterType,
        input: filterInput.trim(),
      };
      this.filteringEvent.emit(filterObj);
    }
  }

  resetForm() {
    this.filteringEvent.emit();
    this.filterForm.setValue({
      filterType: 'name',
      filterInput: '',
    });
  }

  trackByValue(index: number, item: any) {
    return item.value;
  }
}
