import SvgIcon from '../../iconComponents/SvgIcon'
import v from '../../scss/Variables.styles'
import { BrandTitle, Margin, Nav } from './navbar.styles'

function Navbar() {
    return(
        <>
            <Nav>
                <BrandTitle><label className='svg'><SvgIcon/></label><label className='text'>WazeBooks</label></BrandTitle>
            </Nav>
            <Margin/>
        </>
    )
}

export default Navbar