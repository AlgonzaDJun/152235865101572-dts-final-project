import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-centered py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center ">
          <img
            src="https://placekitten.com/1000/500"
            alt="..."
            height="300px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <form>
          <div class="mb-3">
            <label for="exampleForm" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleForm"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-outline-primary w-100 ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
