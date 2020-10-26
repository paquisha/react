import React from 'react'
import {Button} from '@material-ui/core'

const Botones = () => {
    return (
        <div>
            <Button color="primary" variant="contained">
                boton
            </Button>
            <p>lorem</p>
            <Button color="secondary" variant="contained" href="https://www.google.com.ec/" target="_blank">
                boton
            </Button>
            <p>lorem</p>
            <Button color="primary" variant="contained" fullWidth>
                fullWidth
            </Button>
            <p>lorem</p>
            <Button color="secondary" variant="contained" size="small">
                small
            </Button>
            <p>lorem</p>
            <Button color="primary" variant="contained" size="medium">
                medium
            </Button>
            <p>lorem</p>
            <Button color="secondary" variant="contained" size="large">
                large
            </Button>           
        </div>
    )
}

export default Botones
