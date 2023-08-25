/** 
 * Title: employee.interface.ts
 * Author: Caitlynne Johnson
 * Date: 8/24/2023
*/



import { Item } from './item.interface';

export interface Employee {
    empId: number
    todo: Item[]
    done: Item[]
}