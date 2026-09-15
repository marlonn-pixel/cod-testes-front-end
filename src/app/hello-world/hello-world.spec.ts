import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";
import { HelloWorld } from './hello-world';
import { describe, it, expect, beforeEach } from "vitest";

describe('HelloWorld', () =>{
    let fixture: ComponentFixture<HelloWorld>; //Representar o componente
    let de: DebugElement; //Representa o elemento Angular
    let el: HTMLElement; //Representa o elemento HTML
    let component: HelloWorld;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [HelloWorld]
        }).compileComponents();
        fixture = TestBed.createComponent(HelloWorld);
        de = fixture.debugElement;
        el = de.nativeElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create the component', () =>{
        expect(fixture.componentInstance).toBeDefined();
    })

    it('should display the message', () =>{
        const h1 = el.querySelector("h1");
        expect(h1).toBeDefined();
        expect(h1?.textContent).toEqual(component.message);
    })

})