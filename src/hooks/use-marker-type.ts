import {makeVar, useReactiveVar} from "@apollo/client";
import {MarkerType} from "./use-custom-markers.ts";

export const markerTypeVar = makeVar<MarkerType>("AddLocationIcon")
export default function useMarkerType() {
    const markerType = useReactiveVar(markerTypeVar)
    const setMarkerType = (newMarkerType: MarkerType) => markerTypeVar(newMarkerType)

    return [markerType, setMarkerType]
}
