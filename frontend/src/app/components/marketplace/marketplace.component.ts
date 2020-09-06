import { HelpService } from './../../services/help.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  cols: number = 5 
  constructor(public help: HelpService) { }

  ngOnInit(): void {

  }

  list: any[] = [1 , 2, 34, 5, 65, 235 ,654 ,43]
  tasks = []

  getTasks() {
    this.help.getTasks().then((res: []) => {
      this.tasks = res
    })
  }
}
