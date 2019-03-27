import React, {Component} from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


class Submit2 extends Component{

    constructor() {
		super();
		this.state = {
			Prix: ''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }


    render(){
        return(
            confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='custom-ui '>
                        <form >
                            <input type="Text" name="popup2" value={this.state.value} onChange={this.onChange}></input>
                              <br/>
                              <button onClick={()=>{
                                this.props.edit(this.props.sub,this.state.value)
                                 ;onClose()} 
                              }>
                              
                                OK
                              </button>
                              <span>     </span>
                              <button onClick={() => {
                                  onClose()
                              }}>Annuler</button>
                        </form>
                      
                    </div>
                  )
                }
              })
        )
    }
}

  export default Submit2; 