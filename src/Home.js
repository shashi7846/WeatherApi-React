import axios from "axios";
import React, { useState, useEffect } from "react";
import { LoopCircleLoading } from "react-loadingg";
import { Getdetail } from "./axios";

function Home() {
  let [data, setData] = useState([]);
  let [load, setLoad] = useState(false);

  useEffect(async () => {
    let res = await Getdetail();
    setData(res.data);
    setLoad(true);
  }, [setData]);

  

  return (
    <>
      <div className="row">
        {load ? (
          data.map((user, index) => {
            return (
              <div class="col-md-4 col-sm-12 col-lg-4 mt-5">
                <div class="card">
                  <img
                    class="card-img-top"
                    style={{ height: "14rem" }}
                    src={`${user.flag}`}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{user.name}</h5>
                    <h6 class="card-text">Region: {user.region}</h6>

                    <p class="card-text">Numeric Code: {user.numericCode}</p>

                    <a
                      class="btn btn-warning"
                      onClick={(e) => { 
                        alert(
                          `Population: ${user.population} \n Latitude:${user.latlng[0]} \n Longitude:${user.latlng[1]}\n Native-Name${user.nativeName}`
                        );e.preventDefault()
                      }}
                      href={`${user.population}`} 
                    >
                      Get Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <LoopCircleLoading />
        )}
      </div>
    </>
  );
}

export default Home;
