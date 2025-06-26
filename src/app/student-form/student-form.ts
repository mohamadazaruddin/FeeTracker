import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'student-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.scss',
})
export class StudentForm {
  @Output() closeModal = new EventEmitter<void>();
  @Output() submitStudent = new EventEmitter<any>();

  student = {
    name: '',
    rollNumber: '',
    class: '',
    totalFee: '',
  };

  close() {
    this.closeModal.emit();
  }

  submitForm() {
    this.submitStudent.emit(this.student);
    this.close();
  }
}
