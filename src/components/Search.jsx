import React, { useState } from "react";
import { fireDB } from "../DB.js";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Search() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [isLoaded,setIsLoaded]=useState(false)

  const handleSubmit = async () => {
    const q = query(
      collection(fireDB, "Hostelers"),
      where("name", "==", search)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData({
        id: doc.id,
        ...doc.data(),
      });
      setIsLoaded(true)
    });
  };

  return (
    <>
      <h1 className="text-center" style={{ color: "black" }}>
        Search About Students
      </h1>
      <form
        className="Search_student"
        style={{ margin: "auto", maxWidth: "300px" }}
      >
        <input
          type="text"
          id="search-box"
          placeholder="Search.."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="button" onClick={handleSubmit}>
          <i className="fa fa-search"></i>
        </button>
      </form>
      {isLoaded && <div className="card-container" key={data.id}>
            <ul className="contact-card">
              <li>
                <img
                  src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png"
                  alt="avatar_image"
                />
                <div className="details">
                  <span className="name">{data.name}</span>
                  <span className="title">{data.Room_number}</span>
                  <a className="phone" href="tel:123-456-789">
                    {data.phone}
                  </a>
                  <a className="email" href="mailto:emilia.jacobs@email.com">
                    {data.email}
                  </a>
                </div>
              </li>
            </ul>
          </div> }
     
    </>
  );
}
