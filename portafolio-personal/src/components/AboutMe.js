import { Grid, /* makeStyles, */ Typography } from "@mui/material"

/* const useStyles = makeStyles ((theme) => ({
  container: {
    background: '#f5f7f9',
    padding: '30px',
  }
})) */


export function AboutMe () {

/* const classes = makeStyles();  
 */
    return (
        <Grid
    /*  className={classes.container} */
      container 
      direction="column"
      alignItems="center"
      justify="space-around"
      spacing={3}
      
      >

    <Grid item xs>
    <Typography  align="center"  gutterBottom="true">

    Miguel Ángel Hernández Velasco

    </Typography>
    </Grid>

    <Grid item xs>
    <Typography  align="center"  gutterBottom="true">

    Ingeniero en Sistemas Computacionales - UTEL Universidad 

    </Typography>
    </Grid>

    <Grid item xs>
    <Typography  align="center"  gutterBottom="true">

    Master en Diseño Gráfico y Digital - eduMac Centro de Artes Digitales
    </Typography>
    </Grid>

    <Grid item xs>
    <Typography  align="center"  gutterBottom="true">

    Desarrollador Web Full Stack - UCamp UTEL Universidad
    </Typography>
    </Grid>


    </Grid>


    );

}