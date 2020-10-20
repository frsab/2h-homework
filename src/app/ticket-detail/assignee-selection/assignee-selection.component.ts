import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user.interface";

@Component({
    selector: 'app-assignee-selection',
    templateUrl: './assignee-selection.component.html',
    styleUrls: ['./assignee-selection.component.css']
})
export class AssigneeSelectionComponent implements OnInit {

    constructor() {
    }

    @Input()
    users: User[];

    @Input()
    assigneeId: number;

    ngOnInit(): void {
    }

}
