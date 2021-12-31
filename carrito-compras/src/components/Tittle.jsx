import  { Component } from 'react'

const styles = {
    titulo: {
        marginBottom: '30px',
    }
}

class Tittle extends Component {
    render () {
        return(
            <h1 style={styles.titulo}>Tienda</h1>
        )
    }
}

export default Tittle