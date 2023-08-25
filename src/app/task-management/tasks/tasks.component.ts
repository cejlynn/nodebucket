/**
 * Title: tasks.component.ts
 * Author: Caitlynne Johnson
 * Date: 8/5/2023
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskService } from '../task.service';
import { Employee } from '../employee.interface';
import { FormGroup, Validators } from '@angular/forms';
import { Item } from '../item.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // variables
  employee: Employee;
  empId: number;
  todo: Item[];
  done: Item[];
  errorMessage: string;
  successMessage: string;

  newTaskForm: FormGroup = this.fb.group({
    text: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
    category: [null]
  })

  constructor(private cookieService: CookieService, private taskService: TaskService, private fb: FormBuilder) { 
    this.employee = {} as Employee
    this.todo = []
    this.done = []
    this.errorMessage = ''
    this.successMessage = ''

    this.empId = parseInt(this.cookieService.get('session_user'), 10)

    this.taskService.getTask(this.empId).subscribe({
      next: (emp: any) => {
        console.log('emp', emp)
        this.employee = emp

      },
      error: (err) => {
        console.log('error', err)
        this.errorMessage = err.message
        this.hideAlert()

      },
      complete: () => {
        console.log('complete')
        
        this.todo = this.employee.todo ? this.employee.todo : []
        this.done = this.employee.done ? this.employee.done : []

          console.log('todo', this.todo)
          console.log('done', this.done)
      }
    });
  }

  addTask() {
    const text = this.newTaskForm.controls['text'].value;
    const category = this.newTaskForm.controls['category'].value;

    if (!category) {
      this.errorMessage = 'Please provide a category'
      this.hideAlert()
      return
    }

    let newTask = this.getTask(text, category)

    this.taskService.addTask(this.empId, newTask).subscribe({
      next: (task: any) => {
        console.log('Task added with id', task.id)

        newTask._id = task.id // set the new task._id to the task.id

        this.todo.push(newTask)
        this.newTaskForm.reset()

        this.successMessage = 'Task added successfully'

        this.hideAlert()
      },
      error: (err) => {
        this.errorMessage = err.message
        this.hideAlert()
      }

    })
  }

  hideAlert() {
    setTimeout(() => {
      this.errorMessage = ''
      this.successMessage = ''
    }, 3000)
  }

  getTask(text: string, categoryName: string) {
    let task: Item = {} as Item 

    const white = '#FFFFFF'
    const green = '#1A472A'
    const grey = '#5D5D5D'
    const black = '#00000'

    switch (categoryName) {
      case 'testing':
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: green
          },
        }
        return task
      case 'meetings':
        task = {
          text: text,
          category: {
            categoryName: categoryName,
            backgroundColor: grey
          },
        }
        return task
      case 'projects':
      task = {
        text: text,
        category: {
          categoryName: categoryName,
          backgroundColor: black
        },
      }
      return task
      default:
      task = {
        text: text,
        category: {
          categoryName: categoryName,
          backgroundColor: white
        },
      }
      return task
    }

  }
}
