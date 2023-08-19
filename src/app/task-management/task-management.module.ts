/**
 * Title: task-management.module.ts
 * Author: Caitlynne Johnson
 * Date: 8/5/2023
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskManagementComponent } from './task-management.component';


@NgModule({
  declarations: [TasksComponent, TaskManagementComponent],
  imports: [
    CommonModule,
    TaskManagementRoutingModule
  ]
})
export class TaskManagementModule { }
