import { Rate } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useProductQuery from "../../../hooks/useProduct";
import { TProduct } from "../../../types/products";
import Loading from "../Loading";
import ProductsRelatedComponent from "./ProductsRelatedComponent";

const ProductInfomationComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useProductQuery({ id });
    const product: TProduct = {
        ...(data as TProduct)
    }

    
    if (isLoading ) return <Loading />;
    if (isError) navigate("/products");
    return (
        <>

            <section className="deltail-product">
                <div className="container">
                    <div className="detail-product-list">
                        <div className="detail-product-img">
                            <div className="detail-product-img1">
                                {product.gallery.map((image, index) => (
                                    <div key={index}>
                                        <img className="w-[150px]" src={image} alt={`gallery ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="detail-product-img2">
                                <img src={product.image} alt="image_product" />
                            </div>
                        </div>
                        <div className="detail-product-item">
                            <div className="detail-product-heading">
                                <div className="detail-title">
                                    <h2>{product.product_name}</h2>
                                </div>
                                <div className="detail-price">
                                    <h3>$ {product.price}</h3>
                                </div>
                                <div className="detail-evaluate">
                                    <Rate disabled defaultValue={4} />
                                    <span className="custom-review">{product.countStocks} Customer Review</span>
                                </div>
                                <div className="detail-reviews">
                                    <p className="text-review">
                                       {product.description}
                                    </p>
                                </div>
                                
                                <div className="detail-color">
                                    <h4 className="text-size">Color</h4>
                                    <div className="color">
                                        <div className="color-purple">
                                            <img src="./assets/img/Rectangle 421.png" alt="" />
                                        </div>
                                        <div className="color-black">
                                            <img src="./assets/img/Rectangle 432.png" alt="" />
                                        </div>
                                        <div className="color-brown">
                                            <img src="./assets/img/Rectangle 443.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-listtocart">
                                    <button className="slots">
                                        <span className="remove">-</span>
                                        <span className="slot">1</span>
                                        <span className="add">+</span>
                                    </button>
                                    <button className="detail-addtocarts">Add To Cart</button>
                                    <button className="detail-compare">Compare</button>
                                </div>
                            </div>
                            <hr className="line-pruduct" />
                            <div className="detail-product-body">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th>SKU</th>
                                            <td>:</td>
                                            <td className="itemss">SS001</td>
                                        </tr>
                                        <tr>
                                            <th>Category</th>
                                            <td>:</td>
                                            <td className="itemss">{product.category.category_name}</td>
                                        </tr>
                                        <tr>
                                            <th>Tags</th>
                                            <td>:</td>
                                            <td className="itemss">{product.tags.map((tag, index) => (<span key={index}>{tag} </span>))}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="title-line" />
            <section className="detail-information">
                <div className="container">
                    <div className="nav-information">
                        <ul className="nav-informations">
                            <li>
                                <a href="" className="text-informations">
                                    Description
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-informations">
                                    Additional Information
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-informations">
                                    Reviews [5]
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title-information">
                        <p className="title-information1">
                            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                            portable active stereo speaker takes the unmistakable look and sound
                            of Marshall, unplugs the chords, and takes the show on the road.
                        </p>
                        <p className="title-information2">
                            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
                            vintage styled engineering. Setting the bar as one of the loudest
                            speakers in its class, the Kilburn is a compact, stout-hearted hero
                            with a well-balanced audio which boasts a clear midrange and extended
                            highs for a sound that is both articulate and pronounced. The analogue
                            knobs allow you to fine tune the controls to your personal preferences
                            while the guitar-influenced leather strap enables easy and stylish
                            travel.
                        </p>
                    </div>
                    <div className="img-information">
                        <div className="img-information1">
                            <img src="./assets/img/Group 1071.png" alt="" />
                        </div>
                        <div className="img-information2">
                            <img src="./assets/img/Group 1062.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <ProductsRelatedComponent idCate={product.category._id} />
        </>
    )
}

export default ProductInfomationComponent