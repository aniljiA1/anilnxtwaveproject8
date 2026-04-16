function Hero({ openModal }) {
  return (
    <div className="container text-center py-5">
      <h1>Become ACCA in 18 months</h1>
      <p>Learn from experts and get placed</p>

      <button className="btn btn-primary m-2">Download Brochure</button>

      <button className="btn btn-danger" onClick={openModal}>
        Request Call Back
      </button>
    </div>
  );
}

export default Hero;
