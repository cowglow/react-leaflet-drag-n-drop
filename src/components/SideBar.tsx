import type React from "react";
import {Drawer, type DrawerProps, IconButton, List, ListItem, styled} from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import NavigationIcon from '@mui/icons-material/Navigation';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

const StyledDrawer = styled(Drawer)`
  & div {
    margin-top: 64px;
    bottom: 0;
  }
`

export default function SideBar(props: DrawerProps) {
    const options = {
        draggable: true,
        onDragEnd: (e: React.DragEvent<HTMLButtonElement>) => console.log(e)
    }

    return (
        <StyledDrawer variant="persistent" {...props}>
            <List dense disablePadding>
                <ListItem>
                    <IconButton {...options}>
                        <AddLocationIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <AddLocationAltIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <EditLocationAltIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <LocationCityIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <MyLocationIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <NavigationIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <AirlineStopsIcon fontSize="large"/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <ExploreIcon/>
                    </IconButton>
                </ListItem>
                <ListItem>
                    <IconButton {...options}>
                        <PersonPinCircleIcon/>
                    </IconButton>
                </ListItem>
            </List>
        </StyledDrawer>
    )
}
