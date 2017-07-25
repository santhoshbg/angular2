import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-department-list',
    template: ` <h2> {{ DepartmentListHeader }} </h2>
                <ul class="items">
                <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                        <span class="badge"> {{ department.id }}</span> {{ department.name }}
                    </li>
                </ul>`
})

export class DepartmentListComponent implements OnInit {
    public DepartmentListHeader = 'Pages Header';
    public selectedId;
    constructor(private router: Router, private route: ActivatedRoute) {}
     departments = [
         { 'id': 1, 'name': 'Angular' },
         { 'id': 2, 'name': 'Node' },
         { 'id': 3, 'name': 'MongoDB' },
         { 'id': 4, 'name': 'Ruby' },
         { 'id': 5, 'name': 'Bootstrap' }
     ];

     ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.selectedId = id;
        });
    }

     onSelect(department) {
         // reletive path
        // this.router.navigate(['/departments', department.id]);

        // absolute path
            this.router.navigate([department.id], {relativeTo: this.route});
     }

     isSelected(department) {
        return department.id === this.selectedId;
     }

}
