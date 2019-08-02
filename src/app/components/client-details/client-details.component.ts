import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Client } from '../../models/Client';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    //get url id
    this.id = this.route.snapshot.params['id'];
    //get client
    this.clientService.getClient(this.id).subscribe(client =>{
      if(client != null){
        if(client.balance > 0){
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }

}
