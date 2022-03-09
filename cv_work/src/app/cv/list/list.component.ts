import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   @Input() cvs: Cv[] = [];
   @Output()selectedCv =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'Sellaouti', 'Aymen', 'Teacher', 'as.jpg', '1234', 39),
      new Cv(2, 'Yaakoubi', 'Sara', 'Teacher', 'rotating_card_profile.png', '12345', 20),
      new Cv(3, 'Mekni', 'Mohamed', 'Ingénieur', 'rotating_card_profile3.png', '123456', 22),
      new Cv(4, 'Benali', 'Hamdi', 'Ingénieur', 'rotating_card_profile3.png', '123456', 22),
    ];
  }
  selectCv(cv:Cv){
    console.log(cv);
    this.selectedCv.emit(cv);

  }

}
