function Kickoff({ openModal }) {
  return (
    <div className="container text-center py-5">
      <h2>Kick off your ACCA Journey</h2>
      <button className="btn btn-success" onClick={openModal}>
        Request Call Back
      </button>
    </div>
  );
}

export default Kickoff;
