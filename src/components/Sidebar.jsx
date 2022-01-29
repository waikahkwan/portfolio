import { Drawer, Button, Box } from '@mui/material';
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
            width: "240px",
            boxSizing: "border-box",
            background: "#110d16",
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
            margin: "8px"
        }
    }
});

function Sidebar() {
    const classes = useStyles();

    return <>
        <Drawer className={classes.sidebarRoot} variant={"permanent"}>
            <div className={classes.wrapper}>
                {pages.map(p => {
                    return <Button className={classes.pageButton}>
                        {p.name}
                    </Button>
                })}
            </div>
        </Drawer>
    </>
}

export default Sidebar;

