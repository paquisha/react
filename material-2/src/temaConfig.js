//import {createMuiTheme} from '@material-ui/core/styles'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
    palette: {
        secondary:{
            main: purple[500]
        }
    }
})

export default theme;