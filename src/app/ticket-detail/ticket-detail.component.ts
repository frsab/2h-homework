import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ticket} from "../../interfaces/ticket.interface";
import {BackendService} from "../backend.service";
import {Observable} from "rxjs";
import {User} from "../../interfaces/user.interface";

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

    id: number;
    private sub: any;
    public ticket: Ticket;
    public readonly users$: Observable<User[]> = this.backendService.users();
    public users: User[] = [];

    constructor(
        private readonly backendService: BackendService,
        private route: ActivatedRoute
    ) {
        this.sub = this.route.params.subscribe(params => {
            console.log("params : ", params);
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.backendService.ticket(this.id).subscribe(readyTicket => {
                this.ticket = readyTicket;
            }, error => {
                console.log("backendService ticket error ", error);
            });
            // In a real app: dispatch action to load the details here.
        }, error => {
            console.log("params route error ", error);
        });
    }


    ngOnInit() {
        this.users$.subscribe(users => {
            this.users = users;

        }, error => {
            console.log("users$  error ", error);
        });

    }


}
