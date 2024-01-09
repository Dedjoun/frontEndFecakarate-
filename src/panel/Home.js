import React from "react";
import "../Panel.css";
import { BsPeopleFill } from "react-icons/bs";
function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>FECAKARATE : user</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>MEMBRES</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h2 className="num">300</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ATHLTES</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>COACHS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ARBITRES</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Grade</th>
              <th>Fonction</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>John</td>
              <td>Doe</td>
              <td>john</td>
              <td>Membre</td>
              <td>Membre</td>
              <td>
               <a href=""></a>
              </td>
            </tr>
          
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Home;
