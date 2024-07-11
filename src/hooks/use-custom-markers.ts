import L from "leaflet";
import {makeVar, useReactiveVar} from "@apollo/client";
import {MarkerTypeKey} from "../config/custom-markers.tsx";

export interface MarkerObject {
    type: MarkerTypeKey
    position: L.LatLng
}

export const markersVar = makeVar<MarkerObject[]>([])
export default function useCustomMarkers() {
    const markers = useReactiveVar(markersVar)
    const setMarkers = (newMarkers: MarkerObject[]) => markersVar(newMarkers)

    return {markers, setMarkers}
}
