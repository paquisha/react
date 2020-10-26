import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import {Button, Icon, IconButton} from '@material-ui/core'

const Iconos = () => {
    return (
        <div>
            <DeleteIcon color="primary" />
            <Icon>
                room
            </Icon>
            <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" color="primary" endIcon={
                <Icon>
                    room
                </Icon>
            }>
                direccion
            </Button>
            <IconButton aria-label="delete">
                <DeleteIcon color="secondary" />
            </IconButton>
        </div>
    )
}

export default Iconos
