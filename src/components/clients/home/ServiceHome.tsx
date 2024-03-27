import { Icon10, Icon11, Icon12, Icon13 } from "../../../assets"

const ServiceHome = () => {
    return (
        <>
            <section className="services">
                <div className="container-fluid">
                    <div className="service-list">
                        <div className="service-item">
                            <img src={Icon10} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={Icon11} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={Icon12} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                        <div className="service-item">
                            <img src={Icon13} className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">crafted from top materials</p>
                            </div>
                        </div>
                        {/*End service-item*/}
                    </div>
                </div>
            </section>


        </>
    )
}

export default ServiceHome