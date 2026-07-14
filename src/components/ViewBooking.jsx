import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewBooking = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

       axios .get("http://localhost:3000/view-charging").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()

    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            

            <h2 className="text-center mb-4">View Charging Booking</h2>

            <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">
                    <tr>
                        <th>Booking ID</th>
                        <th>Owner Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Vehicle Registration No.</th>
                        <th>Vehicle Brand</th>
                        <th>Vehicle Model</th>
                        <th>Battery Capacity (kWh)</th>
                        <th>Connector Type</th>
                        <th>Charging Date</th>
                        <th>Time Slot</th>
                        <th>Estimated Units (kWh)</th>
                        <th>Charging Bay No.</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.bookingId}</td>
                                <td>{value.ownerName}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.vehicleRegistrationNumber}</td>
                                <td>{value.vehicleBrand}</td>
                                <td>{value.vehicleModel}</td>
                                <td>{value.batteryCapacity}</td>
                                <td>{value.connectorType}</td>
                                <td>{value.chargingDate}</td>
                                <td>{value.timeSlot}</td>
                                <td>{value.estimatedUnits}</td>
                                <td>{value.chargingBayNumber}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    )
}

export default ViewBooking