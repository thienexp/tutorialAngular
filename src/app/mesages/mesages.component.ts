import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-mesages',
  templateUrl: './mesages.component.html',
  styleUrls: ['./mesages.component.css']
})
export class MesagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
