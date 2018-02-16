import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient,
              private router: Router) { }

  location: any = false;

  getLocationStatus(): any {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.geocode(lat, lng).subscribe(
          data => {
            console.log(data['results'][0].address_components)
            let addrComps = data['results'][0].address_components;
            let flag = 0;
            // let currComp = this;
            for (let i = 0; i < addrComps.length; i++) {
              if (addrComps[i].long_name === 'Las Vegas') {
                flag = 1;
                break;
              }
            }

            if (flag) {
              this.location = true;
            }
          },
          err => {
            console.log(err);
          },
          () => {
            console.log(this.location)
            if (!this.location) {
              console.log("changing route")
              this.router.navigate(['survey','nolocation'])
            }
          }
        );
      });
    }
  }

  geocode(lat, lng) {
    // return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=36.1699,-115.1398')
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng)
  }

}
