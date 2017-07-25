import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.http.service';

@Component({
    selector: 'app-employee-list',
    template: ` <h2> {{ titleOfEmployeeName }} </h2>
                <h3> {{ errorMsg }} </h3>
                <ul *ngFor="let country of countries">
                <li> Name : <span> {{ country.name }} </span> </li>
                <li> Domain : <span> {{ country.topLevelDomain }} </span> </li>
                <li> Code : <span> {{ country.alpha2Code }} </span> </li>
                <li> Code 3 : <span> {{ country.alpha3Code }} </span> </li>
                <li> STD Code : <span> {{ country.callingCodes }} </span> </li>
                <li> Capital : <span> {{ country.capital }} </span> </li>
                <li> Alt : <span> {{ country.altSpellings }} </span> </li>
                <li> Region : <span> {{ country.region }} </span> </li>
                <li> Subregion : <span> {{ country.subregion }} </span> </li>
                <li> Population : <span> {{ country.population }} </span> </li>
                <li> Latlng : <span> {{ country.latlng }} </span> </li>
                <li> Demonym : <span> {{ country.demonym }} </span> </li>
                <li> Gini : <span> {{ country.gini }} </span> </li>
                <li> Timezones : <span> {{ country.timezones }} </span> </li>
                <li> Borders : <span> {{ country.borders }} </span> </li>
                <li> NativeName : <span> {{ country.nativeName }} </span> </li>
                <li> NumericCode : <span> {{ country.numericCode }} </span> </li>
                <li> Currencies : <span> {{ country.currencies }} </span> </li>
                <li> Languages : <span> {{ country.languages }} </span> </li>
                <li> Translations : <span> {{ country.translations }} </span> </li>
                <li> Flag : <span> {{ country.flag }} </span> </li>
                <li> RegionalBlocs : <span> {{ country.regionalBlocs }} </span> </li>
                <li> OtherAcronyms : <span> {{ country.otherAcronyms }} </span> </li>
                </ul>`
})

export class CountriesListComponent implements OnInit {
    public titleOfEmployeeName = 'Countrie Details';
    countries = [];
    errorMsg: string;
    constructor(private _countriesService: CountriesService) {}
    ngOnInit() {
        this._countriesService.getCountries()
        .subscribe(resCountriesData => this.countries = resCountriesData,
            resCountriesError => this.errorMsg = resCountriesError);
    }

}
