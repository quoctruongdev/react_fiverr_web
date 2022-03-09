import React from "react";

export default function Description({ dataUserCreated, data }) {
  return (
    <div id="description" className="description section">
      <header role="presentation">
        <h2 style={{ paddingBottom: " 25px" }} className="section-title ">
          About This Gig
        </h2>
      </header>
      <div className="description-wrapper">
        <span />
        <div className="description-content">
          <p>
            <strong>
              <u>Hello there,</u>
            </strong>
            <p>
              <br role="none" />
            </p>
            <p>
              Hi, I am{" "}
              <strong>
                {dataUserCreated?.name
                  ? dataUserCreated?.name.toUpperCase()
                  : "Hidden Name"}
              </strong>
              ,<strong> {data?.name}</strong> for your work which will help you
              stand out from the crowd with{" "}
              <strong>
                <em>UNLIMITED REVISIONS</em>
              </strong>
              .
            </p>
            <p>
              <br role="none" />
            </p>
            <p>
              <strong>Pls, contact me before placing an order </strong>
              so we can discuss your brand and I will give you a{" "}
              <strong>
                <em>GIF CARD</em>
              </strong>{" "}
              before you decide to place an order.
            </p>
          </p>

          <p>
            <br role="none" />
          </p>

          <p>
            <strong>Skill:</strong>
          </p>
          <p>
            <br role="none" />
          </p>
          {dataUserCreated?.skill?.map((item, index) => {
            return (
              <p key={`111${index}`}>
                <p>
                  <strong>
                    <u>{item ? item : "Professional skill"}</u>
                  </strong>
                </p>
                <p>
                  <br role="none" />
                </p>
              </p>
            );
          })}

          <p>
            <br role="none" />
          </p>
          <p>
            <strong>
              <p>Why Choose Me</p>
            </strong>
          </p>
          <p>
            <br role="none" />
          </p>
          <ul>
            <li role="none">&nbsp;&nbsp;&nbsp;Optimized and working well</li>
            <li role="none">
              &nbsp;&nbsp;&nbsp;
              <strong>100% Satisfaction</strong>
              &nbsp;Guaranteed
            </li>
            <li role="none">
              &nbsp;&nbsp;&nbsp;Live preview support before delivering any
              bussiness.
            </li>
          </ul>
          <p>
            <br role="none" />
          </p>
        </div>
        <div className="cover" />
      </div>

      <ul className="metadata">
        <li className="metadata-attribute" role="none">
          <p>
            <strong>Certification</strong>
          </p>
          <ul>
            {dataUserCreated?.certification?.map((item, index) => {
              return (
                <p key={`1211${index}`}>
                  <p>
                    <strong>
                      <u>{dataUserCreated ? item : "Good Certification"}</u>
                    </strong>
                  </p>
                </p>
              );
            })}
          </ul>
          <p>
            <br role="none" />
          </p>
        </li>
      </ul>
    </div>
  );
}
