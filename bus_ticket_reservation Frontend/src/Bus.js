import BusList from "./BusList";
import "./Bus.css";
import { React, useState } from "react";

function Bus() {
  const [bus] = useState([
    {
      busNumber: "TN02G2093",
      busType: "AC",
      seatCapacity: 50,
      departure: "Chennai",
      arrival: "Bangalore",
      departureTime: "04:30 PM",
      arrivalTime: "09:30 PM",
      pricePerTicket: 800,
    },
    {
      busNumber: "TN02G2094",
      busType: "Seater",
      seatCapacity: 60,
      departure: "Bangalore",
      arrival: "Chennai",
      departureTime: "01:00 PM",
      arrivalTime: "06:30 PM",
      pricePerTicket: 300,
    },
    {
      busNumber: "TN02G2095",
      busType: "Semi Sleeper",
      seatCapacity: 45,
      departure: "Bangalore",
      arrival: "Cochi",
      departureTime: "09:30 PM",
      arrivalTime: "12:30 AM",
      pricePerTicket: 550,
    },
    {
      busNumber: "TN02G2096",
      busType: "AC-Sleeper",
      seatCapacity: 30,
      departure: "Cochi",
      arrival: "Coimbatore",
      departureTime: "09:40 PM",
      arrivalTime: "05:30 AM",
      pricePerTicket: 1000,
    },
    {
      busNumber: "TN02G2097",
      busType: "AC",
      seatCapacity: 50,
      departure: "Thirussur",
      arrival: "Coimbatore",
      departureTime: "04:30 PM",
      arrivalTime: "09:30 PM",
      pricePerTicket: 800,
    },
    {
      busNumber: "TN02G2098",
      busType: "Seater",
      seatCapacity: 60,
      departure: "Thirunelveli",
      arrival: "Madurai",
      departureTime: "01:00 PM",
      arrivalTime: "06:30 PM",
      pricePerTicket: 300,
    },
    {
      busNumber: "TN02G2099",
      busType: "Semi Sleeper",
      seatCapacity: 45,
      departure: "Thirunelveli",
      arrival: "Chennai",
      departureTime: "09:30 PM",
      arrivalTime: "12:30 AM",
      pricePerTicket: 550,
    },
    {
      busNumber: "TN02G2100",
      busType: "AC-Sleeper",
      seatCapacity: 30,
      departure: "Madurai",
      arrival: "Pondicherry",
      departureTime: "09:40 PM",
      arrivalTime: "05:30 AM",
      pricePerTicket: 1000,
    },
    {
      busNumber: "TN02G2101",
      busType: "AC",
      seatCapacity: 50,
      departure: "Madurai",
      arrival: "Thanjavur",
      departureTime: "04:30 PM",
      arrivalTime: "09:30 PM",
      pricePerTicket: 800,
    },
    {
      busNumber: "TN02G2102",
      busType: "Seater",
      seatCapacity: 60,
      departure: "Madurai",
      arrival: "Tenkasi",
      departureTime: "01:00 PM",
      arrivalTime: "06:30 PM",
      pricePerTicket: 300,
    },
    {
      busNumber: "TN02G2103",
      busType: "Semi Sleeper",
      seatCapacity: 45,
      departure: "Tenkasi",
      arrival: "Kanyakumari",
      departureTime: "09:30 PM",
      arrivalTime: "12:30 AM",
      pricePerTicket: 550,
    },
    {
      busNumber: "TN02G2104",
      busType: "AC-Sleeper",
      seatCapacity: 30,
      departure: "Kanyakumari",
      arrival: "Trichy",
      departureTime: "09:40 PM",
      arrivalTime: "05:30 AM",
      pricePerTicket: 1000,
    },
  ]);
  return (
    <>
      <div className="container-fluid  w-100" id="buspage">
        <BusList busList={bus} />
      </div>
    </>
  );
}

export default Bus;
