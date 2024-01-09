import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function RegisterFromClub() {
  const [regions, setRegions] = useState([]);
  const [departements, setDepartements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseRegion = await axios.get(
          "http://localhost:9075/api-public/listRegion",
          {
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:3000",
            },
          }
        );
        setRegions(responseRegion.data);

        const responseDepartement = await axios.get(
          "http://localhost:9075/api-public/listDepartement",
          {
            headers: {
              "Access-Control-Allow-Origin": "http://localhost:3000",
            },
          }
        );
        setDepartements(responseDepartement.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    console.log(e.target.closest("form"));
    const form = e.target.closest("form"); // Obtenir le formulaire
    const formData = new FormData(form); // Créer un objet FormData
    const values = formData.entries(); // Obtenir les valeurs du formulaire

    const json = {}; // Créer un objet JSON vide

    for (const [key, value] of values) {
      // Parcourir les valeurs
      json[key] = value; // Ajouter la valeur à l'objet JSON
    }
    try {
      const response = await axios.post(
        "http://localhost:9075/api-public/auth/registryOrg",
        json,
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      );

      if (response.status === 200) {
        console.log("Inscription réussie!");
        alert("Inscription réussie!");
        form.reset();
      } else {
        console.error(response.data);
        alert("Une erreur est survenue. Veuillez réessayer.");
      }

      console.log(response.data); // Afficher la réponse de l'API

      // Réinitialiser le formulaire
      form.reset();
    } catch (error) {
      console.error(error); // Afficher les erreurs

      // Gérer les erreurs d'envoi
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <Fragment>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h1>FECAKARATE</h1>
          <p>
            <span>INSCRIPTION CLUB ou ORGANISATION</span>
          </p>
        </div>

        <div className="row g-0">
          <div
            className="col-lg-4 reservation-img"
            style={{ backgroundImage: "url(assets/img/icon.png)" }}
            data-aos="zoom-out"
            data-aos-delay="200"
          ></div>

          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    name="nom"
                    className="form-control"
                    id="nom"
                    placeholder="organisation ou club"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="responsable"
                    id="responsable"
                    placeholder="Nom du responsable"
                    data-rule="text"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    id="phone"
                    placeholder="Numero de telephone"
                    data-rule="minlen:9"
                    data-msg="Entrer un numero de 9 chiffres"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    data-rule="text"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <select
                    name="region"
                    className="form-control"
                    id="region"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {regions.map((region) => (
                      <option value={region}>{region}</option>
                    ))}
                  </select>
                  <div className="validate"></div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <select
                    name="departement"
                    className="form-control"
                    id="departement"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {departements.map((departements) => (
                      <option value={departements}>{departements}</option>
                    ))}
                  </select>
                  <div className="validate"></div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="arrondissement"
                    id="arrondissement"
                    placeholder="Arrondissement"
                  />
                  <div className="validate"></div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="ville"
                    id="people"
                    placeholder="Ville"
                  />
                  <div className="validate"></div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="quartier"
                    id="quartier"
                    placeholder="Quartier"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <br />
              <div className="text-center">
                <button type="submit" onClick={handleSubmit}>
                  Inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterFromClub;
