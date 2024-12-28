import "./BusTicketReservation.css";
import React, { useState, useEffect } from "react";

const BusTicketReservation = () => {
  // State for form data
  const [formData, setFormData] = useState({
    busNumber: "",
    passangerName: [],
    phoneNumuber: "",
    departure: "",
    destination: "",
    noOfTickets: 0,
    bookingId: 0,
    bookingDate: "",
    totalPrice: 0,
  });

  // State to store the list of bookings retrieved from the server
  const [bookings, setBookings] = useState([]);

  // Handle change for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (POST request)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.departure === formData.destination) {
      alert("Departure and destination should not be the same.");
      return;
    }
    const payload = {
      ...formData,
      passangerName: passangerName, // Ensure passenger names are sent correctly
    };
    console.log("Payload:", payload);
    try {
      const response = await fetch(
        "http://localhost:8085/Booking/ticket/book",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          // Send the entire form data as JSON
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      const data = await response.json();
      alert("Booking successful! Your booking details have been submitted.");
      console.log("Response:", data);

      // Clear form after successful submission
      setFormData({
        busNumber: "",
        passangerName: [],
        phoneNumuber: "",
        departure: "",
        destination: "",
        noOfTickets: 0,
        bookingId: 0,
        bookingDate: "",
        totalPrice: 0,
      });
      // setNumTickets('');
      setPassangerName([]);
      getBookings();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  // Fetch booking data from the server (GET request)
  const getBookings = async () => {
    try {
      const response = await fetch(
        "http://localhost:8085/Booking/get/bookings"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await response.json();
      console.log("Bookings:", data);
      setBookings(data);
    } catch (error) {
      console.error("There was an error fetching the bookings!", error);
    }
  };

  // Call getBookings when the component loads
  useEffect(() => {
    getBookings();
  }, []);

  const [numTickets, setNumTickets] = useState(0);
  const [passangerName, setPassangerName] = useState([]);

  const handleTicketChange = (event) => {
    const ticketCount = parseInt(event.target.value);
    setNumTickets(ticketCount);
    setFormData({ ...formData, noOfTickets: ticketCount });
    // console.log('ticket',ticketCount)
    try {
      setPassangerName(Array(ticketCount).fill(""));
    } catch (ex) {
      alert("Select correct ticket count", ex, "is not a value");
    }
    //  console.log(passangerName) // Update array for passenger names
  };

  const handleNameChange = (index, event) => {
    const newNames = [...passangerName];
    newNames[index] = event.target.value;
    setPassangerName(newNames);
    // console.log("name", newNames);
    // console.log("passanger", passangerName);
  };

  return (
    <div className="container p-6 bg-white rounded shadow w-100 p-3">
      <form onSubmit={handleSubmit} id="form">
        <div className="mb-3 gap-3 d-lg-flex d-md-grid w-100">
          {passangerName.map((passangerName, index) => (
            <div key={index}>
              <label
                className="form-label fw-bold"
                htmlFor={`${passangerName}${index}`}
              >
                Passnger Name:{index + 1}
              </label>
              <input
                type="text"
                className="form-control d-flex pname"
                placeholder="Enter Passenger Name"
                required
                id={`${passangerName}${index}`}
                value={passangerName}
                onChange={(event) => handleNameChange(index, event)}
              />
            </div>
          ))}
        </div>

        <div className="detail gap-3 d-flex">
          <div className="mb-3" id="pdetail">
            <label className="form-label fw-bold">Bus Number</label>
            <select
              type="text"
              name="busNumber"
              className="form-control"
              placeholder="Enter Bus Number"
              required
              value={formData.busNumber}
              onChange={handleChange}
              id="txt"
            >
              <option value="">Enter Bus Number</option>
              <option value="TN02GH2093">TN02GH2093</option>
              <option value="TN02G2093">TN02G2093</option>
              <option value="TN02G2095">TN02G2095</option>
              <option value="TN02G2096">TN02G2096</option>
              <option value="TN02G2097">TN02G2097</option>
            </select>
          </div>
          <div className="mb-3" id="pdetail">
            <label className="form-label fw-bold">Booking Date</label>
            <input
              type="date"
              name="bookingDate"
              className="form-control"
              required
              value={formData.bookingDate}
              onChange={handleChange}
              id="bdate"
            />
          </div>
        </div>

        <div className="detail  gap-3 d-flex">
          <div className="mb-3" id="pdetail2">
            <label className="form-label fw-bold">Phone Number</label>
            <input
              type="tel"
              name="phoneNumuber"
              className="form-control"
              placeholder="Enter Phone Number"
              required
              value={formData.phoneNumuber}
              pattern="[0-9]{10}"
              onChange={handleChange}
              id="tel"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="numTickets" className="form-label fw-bold">
              Number of Tickets:
            </label>
            <select
              id="numTickets"
              className="form-select p-2"
              value={numTickets}
              onChange={handleTicketChange}
            >
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div className="detail gap-3 d-flex">
          <div className="mb-3" id="pdetail2">
            <label className="form-label fw-bold">Departure</label>
            <select
              name="departure"
              className="form-select p-2"
              value={formData.departure}
              onChange={handleChange}
              required
              id="sel"
            >
              <option value="">Choose Departure Place</option>
              <option value="Chennai">Chennai</option>
              <option value="Trichy">Trichy</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="KannyaKumari">Kannyakumari</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Madurai">Madurai</option>
              <option value="Thirunelveli">Thirunelveli</option>
              <option value="Tenkasi">Tenkasi</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Cochi">Cochi</option>
              <option value="Thirussur">Thirussur</option>
              <option value="Pondicherry">Pondicherry</option>
            </select>
          </div>

          <div className="mb-3" id="pdetail2">
            <label className="form-label fw-bold">Destination</label>
            <select
              name="destination"
              className="form-select p-2"
              value={formData.destination}
              onChange={handleChange}
              required
              id="sel"
            >
              <option value="">Choose Destination Place</option>
              <option value="Chennai">Chennai</option>
              <option value="Trichy">Trichy</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Kanyakumari">Kanyakumari</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Madurai">Madurai</option>
              <option value="Thirunelveli">Thirunelveli</option>
              <option value="Tenkasi">Tenkasi</option>
              <option value="Thanjavur">Thanjavur</option>
              <option value="Cochi">Cochi</option>
              <option value="Thirussur">Thirussur</option>
              <option value="Pondicherry">Pondicherry</option>
            </select>
          </div>
        </div>

        <button type="submit" id="sb" className="btn btn-primary btn-lg w-100">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default BusTicketReservation;
