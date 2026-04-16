import { useState } from "react";

function CallbackModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    interest: "",
  });

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Request Submitted ✅");
    handleClose();
  };

  return (
    <div className="modal d-block" style={{ background: "#000000aa" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-4 position-relative">

          {/* Close Button */}
          <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={handleClose}
          ></button>

          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h4 className="fw-bold">
                Kick off your ACCA Prep journey with IndigoLearn
              </h4>
              <p>
                Sign-in and get instant access to our FREE Courses
              </p>

              <button className="btn btn-danger w-50">
                SIGN UP NOW
              </button>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="col-md-6">
              <div className="border p-3 rounded">
                <h6 className="text-center mb-3">
                  Aspiring to be an ACCA? Get in touch with us!
                </h6>

                <input
                  type="text"
                  name="name"
                  placeholder="Phone Number"
                  className="form-control mb-2"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="form-control mb-2"
                  onChange={handleChange}
                />

                <select
                  name="qualification"
                  className="form-control mb-2"
                  onChange={handleChange}
                >
                  <option>Current Qualification</option>
                  <option>B.Com</option>
                  <option>BBA</option>
                </select>

                <select
                  name="interest"
                  className="form-control mb-3"
                  onChange={handleChange}
                >
                  <option>Interested In</option>
                  <option>ACCA</option>
                  <option>CA</option>
                </select>

                <button
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Request Call Back
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CallbackModal;