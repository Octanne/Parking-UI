import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from '../parkingInfo';
import { ParkingService } from '../parking.service'

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  parkings: ParkingInfo[] = [];
  isLoaded: boolean = false;

  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
    this.parkingService.getParkings().subscribe(
      response => {
        this.parkings = response;
        this.isLoaded = true;
      }
    );
  }

  calculStyleStatut(parking: ParkingInfo) {
    if(parking.statut === "Ouvert") return { color:'green'}
    else if (parking.statut === "Abonnés") return { color:'orange'}
    else if (parking.statut === "Fermé") return { color:'red'}
    else return { color:'gray'}
  }

}
