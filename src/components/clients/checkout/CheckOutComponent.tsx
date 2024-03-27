import ServiceHome from "../home/ServiceHome"
import "./../../../sass/checkout.scss"

const CheckOutComponent = () => {
    return (
        <>
            <section className="banner">
                <img
                    src="https://picsum.photos/id/10/1440/500"
                    alt=""
                    className="banner__img"
                />
            </section>
            {/*Start _ Billing  */}
            <section className="container">
                <div className="Billing_Details">
                    {/*Start _ Billing-Detail */}
                    <div className="section-heading">
                        <h2 className="section-heading__title">Billing details</h2>
                        <div className="Billing_name">
                            <div className="first_name">
                                <label htmlFor="" className="label_name">
                                    First name
                                </label>
                                <input type="text" className="input_first_name" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="" className="label_name">
                                    Last name
                                </label>
                                <input type="text" className="input_last_name" />
                            </div>
                            {/* <label for="" class="label_name">Last name</label>
      <input type="text" class="input_last_name" /> */}
                        </div>
                        <label htmlFor="" className="label_name">
                            Company Name (Optional)
                        </label>
                        <input type="text" className="input_company_name" />
                        <label htmlFor="" className="label_name">
                            Country / Region
                        </label>
                        <select name="Country" className="select_country">
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Viet Nam">Viet Nam</option>
                        </select>
                        <label htmlFor="" className="label_name">
                            Street address
                        </label>
                        <input type="text" className="input_address" />
                        <label htmlFor="" className="label_name">
                            Town / City
                        </label>
                        <input type="text" className="input_city" />
                        <label htmlFor="" className="label_name">
                            Province
                        </label>
                        <select name="Province" className="input_province">
                            <option value="Western Province">Western Province</option>
                            <option value="Nord Province">Western Province</option>
                        </select>
                        <label htmlFor="" className="label_name">
                            ZIP code
                        </label>
                        <input type="text" className="input_code" />
                        <label htmlFor="" className="label_phone">
                            Phone
                        </label>
                        <input type="text" className="input_phone" />
                        <label htmlFor="" className="label_name">
                            Email address
                        </label>
                        <input type="text" className="input_email" />
                        <input
                            type="text"
                            placeholder="Additional information"
                            className="input_infor"
                        />
                    </div>
                    {/*End _ Billing-Heading */}
                    {/*Start _ Billing-Submit */}
                    <div className="Billing-Submit">
                        <div className="Billing-Submit-infor">
                            {/*  */}
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th className="product_title">
                                            <h3>Product</h3>
                                        </th>
                                        <th className="subtotal_title">
                                            <h3>Subtotal</h3>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td className="product_title_detail">
                                            <p className="product_title_detail_sofa">
                                                Asgaard sofa<span className="quantity"> x 1</span>
                                            </p>
                                        </td>
                                        <td className="subtotal_title_detail">
                                            <p>25.000.000đ</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product_title_detail">
                                            <p>Subtotal</p>
                                        </td>
                                        <td className="subtotal_title_detail">
                                            <p>25.000.000đ</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product_title_detail">
                                            <p>Total</p>
                                        </td>
                                        <td className="subtotal_title_detail">
                                            <p className="subtotal_title_detail_total">250.00.000đ</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div className="select-item1">
                            <input type="radio" name="Direct Bank Transfer" />
                            <span className="service-item1-radio-first">
                                Direct Bank Transfer
                            </span>
                        </div>
                        <div className="select-item1-box">
                            <span className="select-item1-text">
                                Make your payment directly into our bank account. Please use your
                                Order ID as the payment reference. Your order will not be shipped
                                until the funds have cleared in our account.
                            </span>
                        </div>
                        <div className="select-item1">
                            <input type="radio" name="Direct Bank Transfer" />
                            <span className="Direct_Bank_Transfer">Direct Bank Transfer</span>
                        </div>
                        <div className="select-item1">
                            <input type="radio" name="Direct Bank Transfer" />
                            <span className="Direct_Bank_Transfer">Cash On Delivery</span>
                        </div>
                        <div className="select-item1-box2">
                            <p>
                                Your personal data will be used to support your experience
                                throughout this website, to manage access to your account, and for
                                other purposes described in our <strong>privacy policy.</strong>
                            </p>
                        </div>
                        <div className="flex_button">
                            <button className="button">
                                <p>Place order</p>
                            </button>
                        </div>
                    </div>
                    {/*End _ Billing-Submit */}
                </div>
            </section>
            <ServiceHome />
        </>
    )
}

export default CheckOutComponent