import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { defineCustomElements } from '@arcgis/map-components/dist/loader';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
    title = "map-components-angular-template";

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    arcgisViewReadyChange(event: any) {
        console.log("MapView ready", event);
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
        }
    }
}
