import React from 'react'
import DropDown from './dropdown'
import { NavLink } from 'react-router-dom';

class HeaderTop extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUserId: this.props.currentUserId 
        }
    }


    render () {
        const {currentUserId, logout} = this.props

        let display = (currentUserId) ? (
            <div><DropDown logout={logout} /></div>
        )
            :
            (
                <div>
                    <NavLink exact to="/signup">Sign Up</NavLink>
                    <span className="pipe">|</span>
                    <NavLink className="login"exact to="/login">Login>></NavLink>
                </div>
            )


        return (
            <div>{display}</div>
        )
    }


}

export default HeaderTop;

// export default ({logout, currentUser}) => {
//     let display = (currentUser) ? (
//         <div><DropDown logout={logout} /></div>
//     )
//     :
//     (
//         <div>
//             <Link to="/signup">Sign Up</Link>
//             <Link to="/login">Login>></Link>
//         </div>     
//     )


//     return display

// }

