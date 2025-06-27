import { Link } from "react-router-dom";
import "./../styling/TripList.css";
import { IMAGE_PATHS } from "./constants";
import Header from "./../Header";
import Footer from "./../Footer";
import { FaTrash } from "react-icons/fa";
import { deleteTrip } from "./../services/tripService";


const TripList = ({ tripList = [], deleteFromTripList }) => {
      const handleDelete = async (tripId) => {
        try {
          deleteFromTripList(tripId);
        } catch (error) {
          console.error("Error deleting trip", error);
        }
      };

    return (
        <div className="trip-list-container">
            <Header />
            <nav className="navigation">
                <Link to="/" className="nav-link">Formular</Link>
                <span>|</span>
                <Link to="/homepage" className="nav-link">Homepage</Link>
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
                                    src={trip.imagePath || `${IMAGE_PATHS.tripList}${trip.id}.png`}
                                    alt={trip.title}
                                    className="trip-image"
                                />
                                <>
                                    <div className="trip-info">
                                        <h2>{trip.title}</h2>
                                        <p>{trip.description}</p>
                                    </div>
                                </>
                                <div className="button-group">
                                    <button className="btn-delete" onClick={() => handleDelete(trip.id)}>
                                       <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>

                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default TripList;
