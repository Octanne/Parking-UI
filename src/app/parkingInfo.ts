export interface ParkingInfo {
    id: string;
    nom: string;
    nbPlacesDispo: number;
    nbPlacesTotal: number;
    statut: string;
    heureMaj: string;
    loc: number[];
}