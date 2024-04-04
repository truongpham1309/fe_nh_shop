import Loading from "../../../components/clients/Loading";
import { useCategoryQuery } from "../../../hooks/useCategoryQuery"
import { useProductMutation } from "../../../hooks/useProduct";

const ProductsCreateAdmin = () => {

    const { data: categories, isLoading, isError } = useCategoryQuery();
    const { onSubmit, handleSubmit, errors, register } = useProductMutation({ type: "ADD" });

    if (isLoading) return <Loading />
    if (isError) return <>Product ADD error</>
    return (
        <>
            <h2 className='font-bold text-center text-3xl text-[#333] py-4'>PRODUCT CREATE</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                    <div className="col text-left">
                        <label className='text-left m-0'>Name</label>
                        <input type="text" {...register("product_name", { required: true })} className="form-control" placeholder="Product Name" />
                        {errors.product_name && <span className="text-red-500 fs-6">Product name is required!</span>}
                    </div>
                    <div className="col text-left">
                        <label className='text-left m-0'>Price</label>
                        <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Price" />
                        {errors.price && <span className="text-red-500 fs-6">Price is required!</span>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col text-left">
                        <label className='text-left m-0'>Image</label>
                        <input type="text" {...register("image", { required: true })} className="form-control" placeholder="Image" />
                        {errors.image && <span className="text-red-500 fs-6">Image is required!</span>}
                    </div>
                    <div className="col text-left">
                        <label className='text-left m-0'>Tags</label>
                        <select className="form-control" {...register("tags", { required: true })}>
                            <option className="form-control" value="">Select tag</option>
                            <option className="form-control" value="Sofa">Sofa</option>
                            <option className="form-control" value="Home">Home</option>
                            <option className="form-control" value="Chair">Chair</option>
                            <option className="form-control" value="Bed">Bed</option>
                        </select>
                        {errors.tags && <span className="text-red-500 fs-6">Tags is required!</span>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col text-left">
                        <label className='text-left m-0'>Category</label>
                        <select className="form-control" {...register("category", { required: true })}>
                            <option className="form-control" value="">Select category</option>
                            {categories?.map((cate: any, index: number) => (
                                <option className="form-control" key={index} value={cate._id}>{cate.category_name}</option>
                            ))}
                        </select>
                        {errors.category && <span className="text-red-500 fs-6">Category is required!</span>}
                    </div>
                    <div className="col text-left">
                        <label className='text-left m-0'>Quantity</label>
                        <input type="number" {...register("countStocks", { required: true })} className="form-control" placeholder="Quantity" />
                        {errors.countStocks && <span className="text-red-500 fs-6">Quantity is required!</span>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="text-left">
                        <label className='text-left m-0'>Description</label>
                        <textarea className='form-control' placeholder="Description" id="" cols={30} rows={8} {...register("description", { required: true })}></textarea>
                        {errors.description && <span className="text-red-500 fs-6">Description is required!</span>}
                    </div>
                </div>

                <div className="text-left">
                    <button className='btn btn-primary h-10 px-10 mt-4 text-left'>Submit</button>
                </div>

            </form>

        </>
    )
}

export default ProductsCreateAdmin