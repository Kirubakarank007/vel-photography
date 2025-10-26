import NavbarComponent from "../Components/NavbarComponent";
import '../Styles/About.css';
export default function About() {
    return (
        <div style={{backgroundColor: '#222'}}>
            <NavbarComponent />
            <div className="about-us">
              <h1>About Us</h1>

              <section>
                <h2>1. Overview</h2>
                <p>
                  Velnambi Visuals & Photography welcomes you! It is a privilege that you
                  have selected us to record these invaluable moments. By using our
                  services, you agree to the following terms and conditions. Please read
                  them carefully.
                </p>
              </section>

              <section>
                <h2>2. Services Provided</h2>
                <p>
                  VELNAMBI VISUALS & PHOTOGRAPHY provides professional newborn and
                  wedding photography services in Anthiyur, Tamil Nadu, India. Among
                  the services we provide are puberty function, pre-wedding photo
                  sessions, wedding day coverage, post-wedding sessions, maternity
                  sessions and newborn photography sessions.
                </p>
              </section>

              <section>
                <h2>3. Booking Confirmation</h2>
                <p>
                  Reservations are confirmed only upon receipt of a 30% non-refundable
                  payment of the total package fees. Full payment of the remaining
                  balance is required before the completed products may be delivered.
                </p>
              </section>

              <section>
                <h2>4. Payment Methods</h2>
                <p>
                  Payments can be made with credit/debit cards, cash or bank transfers. A
                  thorough email with payment instructions will be issued at the time of
                  booking.
                </p>
              </section>

              <section>
                <h2>5. Cancellation Policy</h2>
                <p>
                  If you need to cancel your reservation, please let us know at least 30
                  days in advance. The deposit can be used against a future reservation
                  within a year of the original booking date, but it won't be returned.
                </p>
              </section>

              <section>
                <h2>6. Client Responsibilities</h2>
                <p>
                  It is the responsibility of clients to ensure that the necessary
                  authorizations and site access are acquired in advance. Clients should
                  inform us if they would like any specific images or moments to be
                  captured.
                </p>
              </section>

              <section>
                <h2>7. Studio Responsibilities</h2>
                <p>
                  VELNAMBI VISUALS & PHOTOGRAPHY will offer expert photography services,
                  complete with the required gear and qualified photographers. The
                  deliverables that were agreed upon will be delivered on schedule.
                </p>
              </section>
            </div>
    </div>
    );
}

