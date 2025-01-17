import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { defineCustomElements } from '@arcgis/map-components/dist/loader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'map-testing';

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    arcgisViewReadyChange(event: any) {
        console.log("MapView ready", event);
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
        }
    }
}
