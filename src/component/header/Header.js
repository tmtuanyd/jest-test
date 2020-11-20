import React, {Component} from 'react';
import './header.scss';
import logo from '../../assets/img/logo.jpg';

class Header extends Component {
    render() {
        return (
            <div>
                <header data-test={"headerComponent"}>
                    <div className={"wrap"}>
                        <div className={"logo"}>
                            <img data-test={"logoImg"} src={logo} alt={"logo"}/>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;