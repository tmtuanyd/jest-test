import React, {Component} from 'react';
import PropType from 'prop-types'

class ShareButton extends Component {

    submitEvent=()=>{
        if(this.props.emitEvent){
            this.props.emitEvent()
        }
    }
    render() {
        const {buttonText} = this.props
        return (
            <button onClick={()=>this.submitEvent()} data-test={'buttonComponent'}>
                {buttonText}
            </button>
        );
    }
}

ShareButton.propTypes = {
    buttonText: PropType.string,
    emitEvent: PropType.func
}

export default ShareButton;