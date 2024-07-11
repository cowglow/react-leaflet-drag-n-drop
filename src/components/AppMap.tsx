import L from "leaflet";
import {MapContainer, TileLayer} from "react-leaflet";
import {styled} from "@mui/material";
import DropLayer from "./DropLayer.tsx";

const StyledMapContainer = styled(MapContainer)`
  height: calc(100vh - 64px);
  width: 100%;
`
export default function AppMap() {
    const position: L.LatLngTuple = [51.505, -0.09]
    return (
        <StyledMapContainer center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DropLayer/>
        </StyledMapContainer>
    )
}
