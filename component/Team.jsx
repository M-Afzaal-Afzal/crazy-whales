import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import Fade from 'react-reveal/Fade';

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    backgroundColor: "unset",
    background: "unset",
}));

function Team() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "black",
                    minHeight: "100vh",
                    position: "relative",
                    zIndex: 111,
                    py: 8,
                    pb: '10rem',
                    mt: -1,
                    overflow: 'hidden',
                }}
                maxWidth="fluid"
                className={'our-partners-top-div'}
            >
                <Image id={'teamBg'} src={"/TeamBG.png"} layout={"fill"}/>
                <Box
                    sx={{
                        display: "block",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        // mt: 8,
                    }}

                    className={'team-container'}
                >
                    <Box
                        // maxWidth="lg"
                        id="Team"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                        component="div"
                    >
                        <Fade bottom>
                            <Typography
                                id="Team-heading"
                                variant="h2"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "'Cinzel Decorative', cursive",
                                    // lineHeight: "96px",
                                    fontWeight: "900",
                                    mb: 0,
                                    textAlign: "center",
                                    lineHeight: "107.84px",
                                    fontSize: "80px",
                                }}
                                className={'team'}
                            >
                                Team
                            </Typography>
                        </Fade>
                        <Container component="div" sx={{}}>
                            <Grid
                                sx={{justifyContent: "center", alignItems: "center", flexWrap: 'wrap', mt: 5}}
                                container
                                gap={4}
                                columns={{md: 4, sm: 3, xs: 1}}
                            >
                                <Fade bottom cascade>


                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/1.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    mrtubby
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/2.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Hero
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/3.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    mrtubby
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/4.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Hero
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/5.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    mrtubby
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/6.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Hero
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/7.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    mrtubby
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <img className={'zoom'} id="whale-pic" src="/team/8.png" alt=""/>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    zIndex: 999,
                                                    mt: 2,
                                                }}
                                                component="div"
                                            >
                                                <a href="">
                                                    <TwitterIcon
                                                        sx={{
                                                            fontSize: "35px",
                                                            color: "#88E9FC",
                                                            zIndex: 999,
                                                            mr: 3,
                                                        }}
                                                    />
                                                </a>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    gutterBottom
                                                    sx={{
                                                        fontFamily: "'Cinzel Decorative', cursive",
                                                        lineHeight: "40.44px",
                                                        fontWeight: "700",
                                                        color: "#FFFFFF",
                                                        mb: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Hero
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Fade>
                            </Grid>
                        </Container>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: {
                            xs: '-3rem',
                            md: '-3rem',
                        },
                        pt: '128px',
                        mb: {
                            xs: '-4rem',
                            md: '-8rem',
                            lg: "-1rem",
                        },
                    }}>
                        <Box as={'img'} sx={{
                            width: {
                                xs: '80px',
                                md: '178px',
                                lg: "337px",
                            }
                        }} id="" src="/line2.png" alt="Corner"/>

                    </Box>

                    <Container  maxWidth="lg" sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: 'column',
                        py: 5,
                        // mt: 30,
                        position: 'relative',
                    }} className={'our-partners-container'} component="div" id="partners">
                        <Fade bottom>

                            <Typography
                                id="Team-heading"
                                variant="h2"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "'Cinzel Decorative', cursive",
                                    // lineHeight: "96px",
                                    fontWeight: "900",
                                    mb: 0,
                                    textAlign: "center",
                                    lineHeight: {
                                        xs: "43.14px",
                                    },
                                    py: "1.5rem",
                                    fontSize: {
                                        xs: '32px',
                                        md: '55px',
                                        lg: "80px",
                                    },
                                }}
                                // className={'our-partners'}
                            >
                                Our partners
                            </Typography>
                        </Fade>
                        <Box component="div" sx={{}}>
                            <Grid
                                sx={{justifyContent: "center", alignItems: "center", mt: 5}}
                                container
                                gap={4}
                                columns={{md: 5}}
                            >
                                <Fade bottom cascade>


                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/1.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/2.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/3.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/4.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/5.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/6.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/7.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/8.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/9.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#FFFFFF",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/partners/10.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>

                                    <Grid xs={1} sx={{boxShadow: "none"}}>
                                        <Item sx={{boxShadow: "none"}} className="item">
                                            <Box
                                                component="div"
                                                sx={{
                                                    width: "200px",
                                                    height: "200px",
                                                    background: "#eee",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: '30px'
                                                }}
                                            >
                                                <img src="/poweredBy2.png" alt="Partner"/>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Fade>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
                <img id="group2" src="/group2.png" alt="Corner"/>

            </Box>
        </>
    );
}

export default Team;
