function WhyChoose() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Why Choose Us?</h2>

      <div className="row">
        {["Expert Faculty", "Success Package", "Placements"].map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-4 text-center">
              <h5>{item}</h5>
              <p>Some description text here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoose;
