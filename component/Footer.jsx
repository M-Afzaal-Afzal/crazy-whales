import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <>
            <Container
                sx={{
                    backgroundColor: "black",
                    // minHeight: "60vh",
                    py: 16,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: 'relative',
                    mt: -1
                }}
                maxWidth="fluid"
            >
                <Fade bottom cascade>

                    <Box component="div">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            component="div"
                        >
                            <a id="icons" href="">
                                <Box
                                    component="div"
                                    sx={{
                                        width: "70px",
                                        height: "70px",
                                        background: "#DFFAFF",
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <TwitterIcon
                                        sx={{
                                            fontSize: "35px",
                                            color: "black",
                                        }}
                                    />
                                </Box>
                            </a>
                            <a id="icons" href="">
                                <Box
                                    component="div"
                                    sx={{
                                        width: "70px",
                                        height: "70px",
                                        background: "#DFFAFF",
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <TelegramIcon
                                        sx={{
                                            fontSize: "35px",
                                            color: "black",
                                        }}
                                    />
                                </Box>
                            </a>
                        </Box>
                    </Box>
                    <Button
                        sx={{
                            width: "222px",
                            height: "60px",
                            border: "2px solid #88E9FC",
                            borderRadius: "10px",
                            fontFamily: 'lato',
                            fontWeight: 600,
                            lineHeight: '30px',
                            mt: 3,
                            color: "#88E9FC",
                            "&:hover": {
                                border: "2px solid #88E9FC",
                            },
                        }}
                        variant="outlined"
                    >
                        smart contract
                    </Button>
                    <Box sx={{color: 'white',mt: '1rem'}}>
                        Audited by Hacken
                    </Box>
                    <Box sx={{color: 'white',mt: '1rem'}}>
                        business@crazywhales.com
                    </Box>


                    <img id="bottom" src="/bottom.png" alt="Corner"/>
                </Fade>
            </Container>
        </>
    );
}

export default Footer;
