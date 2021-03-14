import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { expect } from 'chai';

describe('API Service Tests', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ApiService
            ]
        });

        apiService = TestBed.get(ApiService);
        httpTestingController = TestBed.get(HttpTestingController);
    })
    it('should call the correct endpoint with correct data', (done) => {
        const searchType = 'people';
        const query = 'Luke';
        const expectedResponse = {
            "count": 1,
            "next": null,
            "previous": null,
            "results": [
                {
                    "name": "Luke Skywalker",
                    "height": "172",
                    "mass": "77",
                    "hair_color": "blond",
                    "skin_color": "fair",
                    "eye_color": "blue",
                    "birth_year": "19BBY",
                    "gender": "male",
                    "homeworld": "http://swapi.dev/api/planets/1/",
                    "films": [
                        "http://swapi.dev/api/films/1/",
                        "http://swapi.dev/api/films/2/",
                        "http://swapi.dev/api/films/3/",
                        "http://swapi.dev/api/films/6/"
                    ],
                    "species": [],
                    "vehicles": [
                        "http://swapi.dev/api/vehicles/14/",
                        "http://swapi.dev/api/vehicles/30/"
                    ],
                    "starships": [
                        "http://swapi.dev/api/starships/12/",
                        "http://swapi.dev/api/starships/22/"
                    ],
                    "created": "2014-12-09T13:50:51.644000Z",
                    "edited": "2014-12-20T21:17:56.891000Z",
                    "url": "http://swapi.dev/api/people/1/"
                }
            ]
        };
        apiService.search(searchType, query)
            .subscribe((res: any) => {
                expect(res).to.deep.equal(expectedResponse);
                done();
            });
        let request = httpTestingController.expectOne(`https://swapi.dev/api/${searchType}/?search=${query}`);
        request.flush({
            "count": 1, 
            "next": null, 
            "previous": null, 
            "results": [
                {
                    "name": "Luke Skywalker", 
                    "height": "172", 
                    "mass": "77", 
                    "hair_color": "blond", 
                    "skin_color": "fair", 
                    "eye_color": "blue", 
                    "birth_year": "19BBY", 
                    "gender": "male", 
                    "homeworld": "http://swapi.dev/api/planets/1/", 
                    "films": [
                        "http://swapi.dev/api/films/1/", 
                        "http://swapi.dev/api/films/2/", 
                        "http://swapi.dev/api/films/3/", 
                        "http://swapi.dev/api/films/6/"
                    ], 
                    "species": [], 
                    "vehicles": [
                        "http://swapi.dev/api/vehicles/14/", 
                        "http://swapi.dev/api/vehicles/30/"
                    ], 
                    "starships": [
                        "http://swapi.dev/api/starships/12/", 
                        "http://swapi.dev/api/starships/22/"
                    ], 
                    "created": "2014-12-09T13:50:51.644000Z", 
                    "edited": "2014-12-20T21:17:56.891000Z", 
                    "url": "http://swapi.dev/api/people/1/"
                }
            ]
        }); 
        httpTestingController.verify();
    })
});