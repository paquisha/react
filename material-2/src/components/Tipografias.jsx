import React from 'react'
import Typography from '@material-ui/core/Typography'

const Tipografias = () => {
    return (
        <div>
             <Typography variant="h1" color="primary">
                titulo
            </Typography>
            <Typography variant="body1" color="secondary" align="center" paragraph>
                centrado
            </Typography>
            <Typography variant="body1" color="primary">
                normal
            </Typography>             
        </div>
    )
}

export default Tipografias
