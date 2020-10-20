import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketDetailComponent} from "./ticket-detail/ticket-detail.component";
import {TicketsListComponent} from "./tickets-list/tickets-list.component";

const routes: Routes = [

    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'detail/:id', component: TicketDetailComponent},
    {path: 'list', component: TicketsListComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}