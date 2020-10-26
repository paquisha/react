import React from 'react'
import {Box, Grid} from '@material-ui/core'

const Cajita = () => {
    return (
        <div>
            <Box color="primary.main">
                primario
            </Box>
            <Box 
                color="primary.contrastText"
                bgcolor="primary.main"
            >
                primario con fondo
            </Box>
            <Box 
                color="primary.contrastText"
                bgcolor="primary.main"
                mt={2}
                px={5}                
            >
                segundo con fondo
            </Box>
            <Box
                m={2}
                p={5}
                border={2}
                borderColor="error.main"                                
            >
                con bordes
            </Box>
            <hr/>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={2}>
                        xs
                    </Box>
                    <Grid item xs={8} sm={3} md={9}>
                    <Box border={2}>
                        xs
                    </Box>
                </Grid>
                </Grid>
            </Grid>              
        </div>
    )
}

export default Cajita
