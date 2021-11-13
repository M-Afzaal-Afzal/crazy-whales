import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Fade from 'react-reveal/Fade';

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    backgroundColor: "unset",
    background: "unset",
}));

function Collection() {
    return (
        <>
            <Container
                sx={{
                    backgroundColor: "black", minHeight: "80vh", py: 1, pb: {
                        xs: '8rem',
                        sm: '10rem',
                    }, mt: -1, position: 'relative', zIndex: 111
                }}
                maxWidth="fluid"
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: 'column',
                        mt: {
                            xs: 0,
                            sm: 8,
                        }
                    }}
                    maxWidth="lg"
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            flexWrap: 'wrap'
                            //   mx:3
                        }}
                        id="coll-up"
                        component="div"
                    >
                        <Fade cascade bottom>


                            <Typography
                                id="collection-heading"
                                variant="h2"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "'Cinzel Decorative', cursive",
                                    lineHeight: "96px",
                                    fontWeight: "900",
                                    mb: 0,
                                    textAlign: 'center'
                                }}
                                className={'collection'}
                            >
                                The Collection
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "188px",
                                    height: "60px",
                                    background: "#88E9FC",
                                    borderRadius: "10px",
                                    fontFamily: "lato",
                                    fontSize: "18px",
                                    lineHeight: "30px",
                                    color: "#041518",
                                    "&:hover": {
                                        background: "#88E9FC",
                                    },
                                }}
                                className={'check-it-out'}
                            >
                                Check it out!
                            </Button>
                        </Fade>
                    </Box>
                    <Box component="div" sx={{}}>



                        <Grid
                            sx={{justifyContent: "center", alignItems: "center", mt: 5}}
                            container
                            gap={0}
                            columns={{md: 3, sm: 2}}
                        >
                            <Fade cascade={true} delay={1} bottom>
                            <Grid  sx={{boxShadow: "none"}}>
                                <Item  sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/whale4.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/whale5.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/whale6.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/whale6.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/whale7.png" alt=""/>
                                </Item>
                            </Grid>
                            <Grid sx={{boxShadow: "none"}}>
                                <Item sx={{boxShadow: "none"}} className="item">
                                    <img className={'shake'} id="whale-pic" src="/whale8.png" alt=""/>
                                </Item>
                            </Grid>
                            </Fade>
                        </Grid>
                    </Box>
                </Container>
                <img id="group1" src="/Group1.png" alt="Corner"/>
                <img id="line1" src="/line1.png" alt="Corner"/>
            </Container>
        </>
    );
}

export default Collection;
