import { Grid, Typography } from "@mui/material"


export function AboutMe () {
    return (
        <Grid
      container 
      direction="column"
      alignItems="center"
      justify="space-around"
      spacing={3}
      
      >

    <Grid item xs>
    <Typography variant="body1" align="center"  gutterBottom="true">

    Miguel Ángel Hernández Velasco

    </Typography>
    </Grid>

    <Grid item xs>
    <Typography variant="body1" align="center"  gutterBottom="true">

    Ingeniero en Sistemas Computacionales - UTEL Universidad 

    </Typography>
    </Grid>

    <Grid item xs>
    <Typography variant="body1" align="center"  gutterBottom="true">

    Diseñador Gráfico y Digital - eduMac Centro de Artes Digitales
    </Typography>
    </Grid>

    <Grid item xs>
    <Typography variant="body1" align="center"  gutterBottom="true">

    Desarrollador Web Full Stack - UCamp UTEL Universidad
    </Typography>
    </Grid>


    </Grid>


    );

}