import {Marker, Popup, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction"

export default function DropLayer() {
    const [markers, setMarkers] = useState<L.LatLng[]>([])
    const map = useMapEvents({})

    useEffect(() => {
        const handleDrop = (event: DragEvent) => {
            event.preventDefault();
            const rect = map.getContainer().getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const latLng = map.containerPointToLatLng([x, y]);
            setMarkers((prevState) => [...prevState, latLng]);
        };

        const mapContainer = map.getContainer();
        mapContainer.addEventListener('dragover', (event) => event.preventDefault());
        mapContainer.addEventListener('drop', handleDrop);

        return () => {
            mapContainer.removeEventListener('dragover', (event) => event.preventDefault());
            mapContainer.removeEventListener('drop', handleDrop);
        };
    }, [map]);

    if (!map) return null
        
    const customIcon = L.divIcon({
        html: renderToString(<AddReactionIcon />),
        iconSize: new L.Point(25, 25),
        iconAnchor: [13, 46]
    })

    return markers.map((marker, index) => (
            <Marker key={`marker-${index}}`} position={marker}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        )
    )

}
