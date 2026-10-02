import React from "react";
export const Services = (props) => {
  // const maximizeWindow=()=>{
  //     alert("function called");
  //   }
  return (
   
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
<p>Explore the testing strategies, automation frameworks, tools, and quality practices behind my projects from manual validation and API testing to automated testing and CI/CD integration.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                    <video  width="320" height="240" id="bannerVideo" autoPlay muted loop>
                 <source src={d.icon} type="video/mp4"  />
                 </video>
                
                 {/* <video controls="true">
                <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4"/>
                </video> */}


                  <div className="service-desc">
                    <h3>{d.name}</h3>
                   <a href={d.text} target="_blank" rel="noopener noreferrer">Visit Codebase</a>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
