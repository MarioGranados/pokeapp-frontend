
const Profile = () => {
    const cardStyle = {
        width: '10rem',
        padding: '5px',
    }
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="d-flex justify-content-around">
            <div className="card" style={cardStyle}>
              <img src="..." className="card-img-top" alt="..." />
              <h5 className="text-center">Pokemon Name</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, veniam.</p>
            </div>
            <div className="card" style={cardStyle}>
              <img src="..." className="card-img-top" alt="..." />
              <h5 className="text-center">Pokemon Name</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, veniam.</p>

            </div>
            <div className="card" style={cardStyle}>
              <img src="..." className="card-img-top" alt="..." />
              <h5 className="text-center">Pokemon Name</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, veniam.</p>

            </div>
            <div className="card" style={cardStyle}>
              <img src="..." className="card-img-top" alt="..." />
              <h5 className="text-center">Pokemon Name</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, veniam.</p>

            </div>
            <div className="card" style={cardStyle}>
              <img src="..." className="card-img-top" alt="..." />
              <h5 className="text-center">Pokemon Name</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, veniam.</p>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="h-100 bg-light card">
              <div className="card-body">
                <h3 className="card-title">Trainer Fname</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, cum maiores numquam aspernatur explicabo provident,
                  ducimus nisi hic illo autem eos iusto dolor accusantium
                  suscipit quis voluptates. Error, ab impedit. Ea laborum et
                  asperiores quis hic vero odit consequatur possimus obcaecati
                  facilis illo atque, iusto exercitationem aperiam saepe placeat
                  quos doloribus beatae magnam minus assumenda eum? Non velit
                  facere assumenda!
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="container">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur maxime amet ullam quaerat? Sapiente minus optio
                  vel debitis laudantium quas, adipisci veritatis similique
                  blanditiis, maiores officiis tempora distinctio rerum. Maxime?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
