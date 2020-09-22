import React, { useState } from "react";
import "./styles.scss";

const Simple = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="simple-interest">
      <section className="si-func">
        <h1 className="head">Simple-Interest-Calculator</h1>
        <form className="simple-interest" onSubmit={handleFormSubmit}>
          <div>
            <label>Principal</label>
            <input type="text" name="Principal Amount" placeholder="0" />
          </div>
          <div>
            <label>Rate</label>
            <input type="text" name="rate" placeholder="0" />
          </div>
          <div>
            <label>Time(in Months)</label>
            <input type="text" name="time" placeholder="0" />
          </div>
          <button type="submit">Simple-Interest</button>
          <div>
            <label>Simple Interest</label>
            <input
              type="text"
              name="simple-interest"
              placeholder="0"
              disabled
            />
          </div>
          <p>Amount = {}</p>
        </form>
      </section>
    </div>
  );
};

export default Simple;
