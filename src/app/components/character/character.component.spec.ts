import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { CharacterComponent } from './character.component';

@Component({
    template: ` <div>
        <app-character [character]="character">
        </app-character>
    </div>`,
})

export class TestWrapperComponent {
    public character = {
        'name': 'Luke Skywalker',
        'height': '172',
        'mass': '77',
        'hair_color': 'blond',
        'skin_color': 'fair',
        'eye_color': 'blue',
        'birth_year': '19BBY',
        'gender': 'male',
        'homeworld': 'http://swapi.dev/api/planets/1/',
        'films': [
            'http://swapi.dev/api/films/1/',
            'http://swapi.dev/api/films/2/',
            'http://swapi.dev/api/films/3/',
            'http://swapi.dev/api/films/6/'
        ],
        'species': [],
        'vehicles': [
            'http://swapi.dev/api/vehicles/14/',
            'http://swapi.dev/api/vehicles/30/'
        ],
        'starships': [
            'http://swapi.dev/api/starships/12/',
            'http://swapi.dev/api/starships/22/'
        ],
        'created': '2014-12-09T13:50:51.644000Z',
        'edited': '2014-12-20T21:17:56.891000Z',
        'url': 'http://swapi.dev/api/people/1/'
    };
}

describe('Tests for the Character Component', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    let element: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CharacterComponent,
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
        expect(element.querySelector('[data-testid=character-name]').textContent.trim()).to.equal('Luke Skywalker');
        expect(element.querySelector('[data-testid=gender-value]').textContent.trim()).to.equal('male');
        expect(element.querySelector('[data-testid=birth-year-value]').textContent.trim()).to.equal('19BBY');
        expect(element.querySelector('[data-testid=eye-color-value]').textContent.trim()).to.equal('blue');
        expect(element.querySelector('[data-testid=skin-color-value]').textContent.trim()).to.equal('fair');
    });
});
