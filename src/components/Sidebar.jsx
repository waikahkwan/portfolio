import { useState } from 'react';
import { Drawer, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ROUTES as pages } from '../constants/route';

const useStyles = makeStyles({
    sidebarRoot: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiDrawer-paper": {
            color: "#ffffff",
            width: "300px",
            boxSizing: "border-box",
            background: "#011627",
            height: "100%"

        },
    },
    wrapper: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100%"
    },
    pageButton: {
        "&.MuiButton-root": {
            margin: "8px",
            width: "100%",
            padding: "16px",
            color:"#ffffff"
        }
    },
    pageButtonSelected: {
        "&.MuiButton-root": {
            borderLeft: "3px solid",
            borderColor: "#e71d36",
            color:"#e71d36"
        } 
    }
});

function Sidebar() {
    const classes = useStyles();

    const [selected, setSelected] = useState(0);

    const handleSelected = (index) => {
        setSelected(index)
    }

    return <>
        <Drawer className={classes.sidebarRoot} variant={"permanent"}>
            <div className={classes.wrapper}>
                {pages.map((p, index) => {
                    return <Button className={`${classes.pageButton} ${selected === index ? classes.pageButtonSelected: ""}`}
                         key={index} 
                         onClick={() => handleSelected(index)}>
                        {p.name}
                    </Button>
                })}
            </div>
        </Drawer>
    </>
}

export default Sidebar;

