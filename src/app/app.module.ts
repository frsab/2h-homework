import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BackendService} from './backend.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import {MaterialModule} from "./material.module/material.module";
import {TicketsListComponent} from './tickets-list/tickets-list.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import {AssigneeSelectionComponent} from './ticket-detail/assignee-selection/assignee-selection.component';


@NgModule({
    declarations: [AppComponent, TicketsListComponent, TicketDetailComponent, AssigneeSelectionComponent],
    imports: [BrowserModule, NoopAnimationsModule,
        AppRoutingModule,
        MaterialModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
