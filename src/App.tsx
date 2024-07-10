import "leaflet/dist/leaflet.css"
import {useState} from "react";
import Paper from "@mui/material/Paper";
import AppToolBar from "./components/AppToolBar.tsx";
import SideBar from "./components/SideBar.tsx";
import AppMap from "./components/AppMap.tsx";

function App() {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <Paper>
            <AppToolBar toggleDrawer={() => setOpenDrawer(prevState => !prevState)}>
                <SideBar open={openDrawer}/>
            </AppToolBar>
            <AppMap/>
        </Paper>
    )
}

export default App
