import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { PlanetComponent } from "./planet.component";

@Component({
    template: ` <div>
        <app-planet [planet]="planet">
        </app-planet>
    </div>`,
})

export class TestWrapperComponent{
    public planet = {
        "name": "Utapau",
        "rotation_period": "27",
        "orbital_period": "351",
        "diameter": "12900",
        "climate": "temperate, arid, windy",
        "gravity": "1 standard",
        "terrain": "scrublands, savanna, canyons, sinkholes",
        "surface_water": "0.9",
        "population": "95000000",
        "residents": [
            "http://swapi.dev/api/people/83/"
        ],
        "films": [
            "http://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T12:49:01.491000Z",
        "edited": "2014-12-20T20:58:18.439000Z",
        "url": "http://swapi.dev/api/planets/12/"
    }; 
}

describe('Tests for the Character Component', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    let element: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PlanetComponent,
                TestWrapperComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
        element = fixture.debugElement.nativeElement;
    });

    it(`should render the correct character information.`, () => {
        fixture.detectChanges();
        expect(element.querySelector('[data-testid=planet-name]').textContent.trim()).to.equal('Utapau');
        expect(element.querySelector('[data-testid=population-value]').textContent.trim()).to.equal('95000000');
        expect(element.querySelector('[data-testid=climate-value]').textContent.trim()).to.equal('temperate, arid, windy');
        expect(element.querySelector('[data-testid=gravity-value]').textContent.trim()).to.equal('1 standard');
    });
});