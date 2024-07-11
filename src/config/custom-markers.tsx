import type {JSX} from "react";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import NavigationIcon from '@mui/icons-material/Navigation';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

export type MarkerTypeKey =
    "AddLocationIcon"
    | "AddLocationAltIcon"
    | "EditLocationAltIcon"
    | "LocationCityIcon"
    | "MyLocationIcon"
    | "NavigationIcon"
    | "AirlineStopsIcon"
    | "ExploreIcon"
    | "PersonPinCircleIcon"

export const CustomMarkers: Record<MarkerTypeKey, JSX.Element> = {
    "AddLocationIcon": <AddLocationIcon/>,
    "AddLocationAltIcon": <AddLocationAltIcon/>,
    "EditLocationAltIcon": <EditLocationAltIcon/>,
    "LocationCityIcon": <LocationCityIcon/>,
    "MyLocationIcon": <MyLocationIcon/>,
    "NavigationIcon": <NavigationIcon/>,
    "AirlineStopsIcon": <AirlineStopsIcon/>,
    "ExploreIcon": <ExploreIcon/>,
    "PersonPinCircleIcon": <PersonPinCircleIcon/>,
}
