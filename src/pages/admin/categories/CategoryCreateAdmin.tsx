import { useCategoryMutation } from "../../../hooks/useCategoryQuery"

const CategoryCreateAdmin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    onHandleSubmitForm
  } = useCategoryMutation({ type: "CREATE" });


  return (
    <>
      <form onSubmit={handleSubmit(onHandleSubmitForm)}>
        <h2 className="font-[700] text-center py-5 uppercase fs-3 text-[#333]">Create New Category</h2>
        <div className="row mb-5">
          <div className="col px-5">
            <input className="form-control" type="text" {...register("category_name", { required: true })} placeholder="Name ategory" />
            {errors.category_name && <span className="text-red-500 fs-6">Category name is required!</span>}
          </div>
        </div>

        <div className="row mb-5">
          <div className="col px-5">
            <input className="form-control" type="file" {...register("image", { required: true })} placeholder="Name category" />
            {errors.image && <span className="text-red-500 fs-6">Image is required!</span>}
          </div>
        </div>

        <div className="row">
          <div className="col px-5">
            <button className="btn btn-success px-5">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default CategoryCreateAdmin