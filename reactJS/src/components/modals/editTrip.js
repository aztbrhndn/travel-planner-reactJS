import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import EditTripForm from "../forms/trips/editTripForm";


class EditTripModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // tripData: this.props.tripData,
            // destinationId: this.props.tripData.map( list => list.destinations.map( destination => destination.id) )[0]
        }
        
    }

    componentDidMount() {
        console.log('ACC MODAL MOUNT')

        // const x = this.state.tripData.map( list => list.destinations.map( destination => destination.id) )

        // console.log("X", this.state.destinationId);

        // const [ destinationId ] = this.state.destinationId;

        // this.setState({
        //     destinationId: destinationId,
        // })

        // console.log("check", destinationId)
    }

    render() {
        return (
            <>
                <Modal 
                        isOpen={this.props.isOpen} 
                        centered={true}
                        scrollable={true}
                        backdrop={true}
                        toggle={this.props.toggle}
                >
                    <ModalHeader>Edit Trip</ModalHeader>
                    <ModalBody>
                        <EditTripForm
                            // destinationId = {this.state.destinationId}
                            tripData={this.props.tripData}
                            onUpdateTrip={this.props.handleEdit}
                        />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default EditTripModal;