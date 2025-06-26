import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Sidebar } from '../components/sidebar/sidebar';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentForm } from '../student-form/student-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgIf, FormsModule, Sidebar, HttpClientModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  @ViewChild('addStudentModal') studentModal!: ElementRef;
  @ViewChild('addPaymentModal') paymentModal!: ElementRef;
  @ViewChild('deletestudentModal') deleteModal!: ElementRef;
  viewPage = 'home';
  // showModal = false;
  student = {
    name: '',
    rollNumber: '',
    class: '',
    totalFee: '',
  };
  payment = {
    amount: '',
    remarks: '',
    method: '',
  };
  students: any[] = [];
  constructor(private http: HttpClient) {}

  studentDetail: any;
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.http
      .get<any[]>('https://feetracker-be.onrender.com/api/students')
      .subscribe(
        (data) => {
          this.students = data;
        },
        (error) => {
          console.error('Error fetching heroes:', error);
        }
      );
  }

  getPayments(id: any) {
    this.http
      .get<any[]>(
        `https://feetracker-be.onrender.com/api/payments/student/${id}`
      )
      .subscribe(
        (data) => {
          this.studentDetail = data;
          this.viewPage = 'payment';
        },
        (error) => {
          console.error('Error fetching heroes:', error);
        }
      );
  }
  // http.get<Config>('/api/config').subscribe(config => {
  //   // process the configuration.
  // });
  // @Input() viewCurrentPage: String | undefined;
  showStudentList() {
    this.viewPage = 'student';
  }

  submitForm() {
    this.http
      .post<any>(
        'https://feetracker-be.onrender.com/api/students',
        this.student
      )
      .subscribe(
        (response) => {
          console.log('Student added successfully:', response);
          // Optionally update UI or state here
          this.getStudents();
          this.closeModal();
        },
        (error) => {
          console.error('Error adding student:', error);
        }
      );
  }

  closeModal() {
    // Reset form fields
    this.studentModal.nativeElement.click();
    this.student = {
      name: '',
      rollNumber: '',
      class: '',
      totalFee: '',
    };
  }

  closePaymentModal() {
    this.paymentModal.nativeElement.click();
    this.payment = {
      amount: '',
      remarks: '',
      method: '',
    };
  }
  closeDeleteModal() {
    this.deleteModal.nativeElement.click();
  }

  addPayementForm(studentId: any) {
    console.log('called', this.payment, studentId);

    this.http
      .post<any>('https://feetracker-be.onrender.com/api/payments', {
        studentId: studentId,
        amount: this.payment.amount,
        method: this.payment.method,
        remarks: this.payment.remarks,
      })
      .subscribe(
        (response) => {
          console.log('Student added successfully:', response);
          // Optionally update UI or state here
          this.getPayments(studentId);
          this.closePaymentModal();
        },
        (error) => {
          console.error('Error adding student:', error);
        }
      );
  }

  confirmDelete(id: any) {
    console.log(id);
    this.http
      .delete(`https://feetracker-be.onrender.com/api/students/${id}`)
      .subscribe(
        () => {
          console.log('Student deleted');
          this.closeDeleteModal();
          this.viewPage = 'student';
          this.getStudents();
        },
        (error) => {
          console.error('Error deleting student:', error);
        }
      );
  }

  ChangePageType(page: any) {
    this.viewPage = page;
  }
}
