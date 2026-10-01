function WhyChooseUs() {

    const services = [
        "Fast delivery Service",
        "Very affordable",
        "Guaranteed Delivery",
        "Best Customer Service"
    ];

    return (
        <section className="why-sec">

            <div className="why-content">

                <p className="why-label">
                    Why choose Bayoride
                </p>
                <ul className="why-list">
                    {services.map((service) => (
                        <li key={service}>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="why-ring">

                <div className="logistics-circle">

                    <p>Bayoride !</p>

                    <h3>
                        logistics at
                        <br />
                        Your doorstep
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;