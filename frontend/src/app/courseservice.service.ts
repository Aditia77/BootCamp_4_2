import { Injectable } from '@angular/core';

@Injectable()
export class CourseServiceService {

  constructor() { }

  Id : number  ;
  Name : string;


  public courselist: Object[] = [
    {'Id' : '1', 'Name' : 'matematika'},
    {'Id' : '2', 'Name' : 'bahasa Indonesia'},
    {'Id' : '3', 'Name' : 'Sejarah'},
    {'Id' : '4', 'Name' : 'Programming'},
    {'Id' : '5', 'Name' : 'Bahasa Jepang'}];
    

    add() : void {
      
    this.courselist.push({ 
    "Id" : this.Id,
    "Name" : this.Name,
                
    });
        
              
      
      
      
    }
  




}