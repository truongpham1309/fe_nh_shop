const BannerShopPageComponent = () => {
    return (
        <>
            <section className="banner">
                {/* <img src="https://picsum.photos/id/10/1440/500" alt="" class="banner__img" /> */}
                <div className="banner-item">
                    <div className="container">
                        <div className="banner-nav">
                            <div className="banner-item-menu">
                                <div className="banner-item-menu-icon">
                                    <span>
                                        <img src="./assets/icons/14.svg" alt="" />
                                        Filter
                                    </span>
                                    <span>
                                        <img src="./assets/icons/15.svg" alt="" />
                                    </span>
                                    <span>
                                        <img src="./assets/icons/16.svg" alt="" />
                                    </span>
                                    <span className="showing"> Showing 1–16 of 32 results </span>
                                </div>
                            </div>
                            <div className="banner-item-form">
                                <div className="form-menu">
                                    <label htmlFor="">Show</label>
                                    <input type="text" className="show-input" placeholder="16" />
                                </div>
                                <div className="form-menu">
                                    <label htmlFor="">Short by</label>
                                    <input
                                        type="text "
                                        className="shortby-input"
                                        placeholder="Default"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BannerShopPageComponent