import { Component, OnInit } from '@angular/core';
import { PostProfileService } from './post-profile.service';


@Component({
    selector: 'app-postprofile-list',
    template: ` <h2> {{ postProfileServiceHeader }} </h2>
                <h3> {{ errorMsg }} </h3>

                <ul *ngFor="let san of profileObj">
                <li> Page : <span> {{ san.page }} </span> </li>

                </ul>
                <button (click)="saveUserProfile()"> Save User Profile</button>
                `
})

export class PostProfileServiceComponent implements OnInit {
    public postProfileServiceHeader = 'Post Profile Page';
    public titleOfEmployeeName = 'Countrie Details';
    public profileObj = {name: '', pass: '', city: ''};
    countries = [];
    errorMsg: string;
    constructor(private _countriesService: PostProfileService) {}
    ngOnInit() {
        this._countriesService.saveProfile()
        .subscribe(resCountriesData => this.countries = resCountriesData,
            resCountriesError => this.errorMsg = resCountriesError);
    }

    public saveUserProfile(): void {
        this._countriesService.saveProfile().subscribe(resCountriesData => this.countries = resCountriesData);
    }
}




