function Learn() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">What will you Learn in ACCA?</h2>

      <div className="row">
        {["Knowledge", "Skill", "Professional"].map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3">
              <h5>{item} Level</h5>
              <ul>
                <li>Subject 1</li>
                <li>Subject 2</li>
                <li>Subject 3</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;
