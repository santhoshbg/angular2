import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    template: ` <h3> You Selected Department With Id = {{ departmentId }} </h3>
    <a (click)='goPrevious()' > Previous </a>
    <a (click)='goNext()' > Next </a>
    <button (click)='gotoDepartments()' > Back </button>
    `
})

export class DepartmentDetailComponent implements OnInit  {
    // public departmentHeader = 'You Selected Department With ID = ';
public departmentId;
constructor(private route: ActivatedRoute, private router: Router) {}
   /* ngOnInit() {
        // let id = this.route.snapshot.params['id'];
        let id = parseInt(this.route.snapshot.params['id']);
        this.departmentId = id;
    }
*/

ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        let id = parseInt(params['id']);
        this.departmentId = id;
    });
}
    goPrevious() {
        let previousId = this.departmentId - 1;
        this.router.navigate(['/departments', previousId]);
    }
    goNext() {
        let nextId = this.departmentId + 1;
        this.router.navigate(['/departments', nextId]);
    }
    gotoDepartments() {
        let selectedId = this.departmentId ? this.departmentId : null;
        // this.router.navigate(['/departments', {id: selectedId, random: 'random'}]);
        // this.router.navigate(['/departments', {id: selectedId}]);
        this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
    }
}
