
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './tasks/item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask(empId: number) { // get task from employeeID
    return this.http.get('/api/employees/' + empId + '/tasks')

  }

  addTask(empId: number, task: Item) {  // adds task to an employeeID
    return this.http.post('api/employees/' + empId + '/tasks', { task })
  }

  updateTask(empId: number, todo: Item[], done: Item[]) { // updates a task 
    return this.http.put('/api/employees/' + empId + '/tasks', {
      todo,
      done
    })
  }
  deleteTask(empId: number, taskId: string) { // deletes task
    return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId)
  }
}