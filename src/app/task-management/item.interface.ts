/** 
 * Title: item.interface.ts
 * Author: Caitlynne Johnson
 * Date: 8/24/2023
*/



export interface Category {
    categoryName: string
    backgroundColor: string

}

export interface Item {
    _id?: string // optional property
    text: string
    category: Category

}