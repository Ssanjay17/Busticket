import { Button, Card, Modal } from "react-bootstrap";
import "./Bus.css";
import { useEffect, useState } from "react";
import BusTicketReservation from "./BusTicketReservation";

function BusList({ busList }) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div id="busList" className="row p-5 justify-content-center row-gap-3">
      {busList.map((bus, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 ps-5" key={index}>
          <Card style={{ width: "20rem", backgroundColor: "lightgrey" }}>
            <Card.Body>
              <Card.Title>{bus.busNumber}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {bus.busType}
              </Card.Subtitle>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="w-50">
                  <Card.Title>{bus.departureTime}</Card.Title>
                  <Card.Text>{bus.departure}</Card.Text>
                </div>
                {/* <div id="line"></div>
                <p style={{ fontSize: "10px" }}>5:30</p>
                <div id="line"></div> */}
                <div className="w-50 text-end">
                  <Card.Title>{bus.arrivalTime}</Card.Title>
                  <Card.Text>{bus.arrival}</Card.Text>
                </div>
              </div>
              <Card.Text>Seats Available: {bus.seatCapacity}</Card.Text>
              <div className="d-flex justify-content-between">
                <Card.Text>Price: &#8377;{bus.pricePerTicket}</Card.Text>
                <Button
                  className="rounded-pill"
                  onClick={() => setLgShow(true)}
                  id="button"
                >
                  <b>Book</b>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}

      <>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BusTicketReservation />
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default BusList;
