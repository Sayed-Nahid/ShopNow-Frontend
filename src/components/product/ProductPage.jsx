import React from 'react'

const ProductPage = () => {
  return (
    <div>
        <ProductPagePlaceHolder />
        <section className="py-3">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img
                            className="card-img-top mb-5 mb-md-0"
                            src=""
                            alt="...."
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: BST-498</div>
                        <h1 className="display-5 fw-bolder">Shop item template</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$45.00</span>
                            <span>$40.00</span>
                        </div>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui eos delectus magni veniam vel tenetur alias velit rerum quo soluta! Tempora laborum minus excepturi doloremque amet error molestiae inventore commodi.
                        </p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ maxWidth: "3rem" }} />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-card-fill me-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductPage