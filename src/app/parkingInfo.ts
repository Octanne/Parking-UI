export interface ParkingInfo {
    id: number;
    nom: string;
    nbPlaceDispo: number;
    nbPlaceTotal: number;
    statut: string;
    heureMaj: string;
    location: number[];
}