import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class Popup1 extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <form>

                    <Button style={{display: "block"}} className="center" variant="outline-success">Report Printing</Button>
                        <Button style={{display: "block"}} className="center"  variant="outline-secondary">Audit Trail</Button>
                    <Button style={{display: "block", position: "absolute",marginTop:"50px", right:"35%"}} className="centreclose" onClick={this.props.closePopup} variant="light">Close</Button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Popup1;