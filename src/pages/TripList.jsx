import {Link} from "react-router-dom";
import "./../styling/TripList.css";
import {IMAGE_PATHS} from "./constants";
import Header from "./../Header";
import Footer from "./../Footer";
import {FaEdit, FaSave, FaTrash} from "react-icons/fa";
import React, {useState} from "react";
import {updateTrip} from "../services/tripService";

const TripList = ({tripList = [], deleteFromTripList, updateTripList}) => {
    const [editTripId, setEditTripId] = useState(null);

    const handleDelete = async (tripId) => {
        try {
            deleteFromTripList(tripId);
        } catch (error) {
            console.error("Error deleting trip", error);
        }
    };

    const handleEdit = async (e, trip) => {
        e.preventDefault();
        const form = e.target;

        const updatedTitle = form.title.value;
        const updatedDescription = form.description.value;

        try {
            const updatedTrip = await updateTrip(trip.id, {
                title: updatedTitle,
                description: updatedDescription,
            });
            updateTripList(updatedTrip)
            setEditTripId(null);
        } catch (err) {
            console.error("Error while editing trip", err);
            setEditTripId(null);
        }
    }

    return (
        <div className="trip-list-container">
            <Header/>
            <nav className="navigation">
                <Link to="/" className="nav-link">
                    Formular
                </Link>
                <span>|</span>
                <Link to="/homepage" className="nav-link">
                    Homepage
                </Link>
            </nav>
            <main className="content">
                <h1>Trip List</h1>
                {tripList.length === 0 ? (
                    <p>No trips added to the list.</p>
                ) : (
                    <div className="trip-list">
                        {tripList.map((trip) => (
                            <div key={trip.id} className="trip-item">
                                <img
                                    src={
                                        trip.imagePath || `${IMAGE_PATHS.tripList}${trip.id}.png`
                                    }
                                    alt={trip.title}
                                    className="trip-image"
                                />
                                <>
                                    <div className="trip-info">
                                        {editTripId !== trip.id ? (
                                            <>
                                                <h2>{trip.title}</h2>
                                                <p>{trip.description}</p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="formular">
                                                    <form onSubmit={(e) => handleEdit(e, trip)}>
                                                        <input name="title" type="text" placeholder="Titel"
                                                               defaultValue={trip.title}/>
                                                        <input name="description" type="text" placeholder="Beschreibung"
                                                               defaultValue={trip.description}/>
                                                        <button
                                                            className="btn-save"
                                                            type="submit"
                                                        >
                                                            <FaSave/> Save
                                                        </button>
                                                    </form>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                                <div className="button-group">
                                    {editTripId !== trip.id ? (
                                        <>
                                            <button
                                                className="btn-edit"
                                                onClick={() => setEditTripId(trip.id)}
                                            >
                                                <FaEdit/> Edit
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() => handleDelete(trip.id)}
                                            >
                                                <FaTrash/> Delete
                                            </button>
                                        </>
                                    ) : (
                                        <></>
                                    )
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer/>
        </div>
    );
};

export default TripList;
