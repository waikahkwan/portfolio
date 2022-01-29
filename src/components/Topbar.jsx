import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfilePicture from "../assets/resume.jpg";
import LocationIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles({
    topbarContainer: {
        background: "#ffffff",
        height: "40vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        marginLeft: "64px",
        height: "100%",
        justifyContent: "space-between",
    },
    infoRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "8px"
    }, 
    socialMediaContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
});

function TopBar() {
    const classes =  useStyles();

    const detail = [
        { icon: <LocationIcon sx={{width: "18px"}}/>, value: "Kuala Lumpur, Malaysia"},
        { icon: <EmailIcon sx={{width: "18px"}}/>, value: "waikahkwan0903@gmail.com"},
    ];

    const socialMedia = [
        { icon: <GitHubIcon sx={{width: "24px", fill: "#000000"}}/>, value: "https://github.com/waikahkwan"},
        { icon: <LinkedInIcon sx={{width: "24px" , fill: "#000000"}}/>, value: "https://www.linkedin.com/in/waikahkwan"},
    ];

    return <>
        <div className={classes.topbarContainer}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch", margin: "0px 32px", }}>
                <img src={ProfilePicture} alt="profile"/>

                <div className={classes.infoContainer}>
                    <Typography variant={"h4"} sx={{fontSize: "2.5rem", fontWeight: 900}}>
                        WAI KAH KWAN
                    </Typography>

                    <div style={{margin: "24px 0px"}}>
                        {detail.map(d => {
                            return <div className={classes.infoRow}>
                                {d.icon}
                                <Typography sx={{fontSize: "14px", marginLeft: "8px"}}>
                                    {d.value}
                                </Typography>
                            </div>
                        })}
                    </div>

                    <div className={classes.socialMediaContainer}>
                        {socialMedia.map(s => {
                            return <a href={s.value} target="_blank" rel="noreferrer" style={{marginRight: "8px"}}>{s.icon}</a>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TopBar;