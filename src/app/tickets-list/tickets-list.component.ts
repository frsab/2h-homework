import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../interfaces/user.interface";
import {Ticket} from "../../interfaces/ticket.interface";
import {BackendService} from "../backend.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tickets-list',
    templateUrl: './tickets-list.component.html',
    styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {


    ngOnInit(): void {
        this.tickets$.subscribe(tickets => {
            this.dataSource = new MatTableDataSource(tickets);
        }, error => {
            console.log("tickets error ", error);
        });
        this.users$.subscribe(users => {
            this.users = users;

        }, error => {
            console.log("users error ", error);
        });
    }

    public readonly users$: Observable<User[]> = this.backendService.users();
    public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
    public users: User[] = [];
//    public ticketsData: Ticket[] = [];
    public dataSource = new MatTableDataSource();

    public newTicketObservable: Observable<Ticket>;//Observable<Ticket[]> = this.backendService.tickets();
    displayedColumns: string[] = ['id', 'completed', 'assigneeId', 'description', 'update'];
    columnsToDisplay: string[] = this.displayedColumns.slice();
    selected2: any = 111;


    constructor(private readonly backendService: BackendService, private router: Router) {

    }

    addColumn() {
        this.newTicketObservable = this.backendService.newTicket({description: "new ticket"})
        this.newTicketObservable.subscribe(readyNewTicket => {
            const data = this.dataSource.data;
            this.dataSource.data = data;
        }, error => {
            console.log("readyNewTicket error ", error);
        });
    }

    upldate(id) {
        this.router.navigateByUrl("/detail/" + id);
    }


}
