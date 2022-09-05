import React, { useState, useEffect } from 'react';

import './App.css';
import background from './images/bg-main-desktop.png';

const validateCardHolder = (holder: string) => {
  if (!/^[a-zA-Z\s]+$/.test(holder)) {
    // throw error
  }
};

const validateCardNumber = (number: string) => {
  if (!/^[0-9\s]+$/.test(number)) {
    // throw error
  }

  if (number.trim().length !== 16) {
    // throw error
  }
};

const validateMonth = (month: string) => {
  if (!/^[0-9]+$/.test(month)) {
    // throw error
  }

  if (month.length !== 2) {
    // throw error
  }
};

const validateYear = (year: string) => {
  if (!/^[0-9]+$/.test(year)) {
    // throw error
  }

  if (year.length !== 2) {
    // throw error
  }
};

const validateCvc = (cvc: string) => {
  if (!/^[0-9]+$/.test(cvc)) {
    // throw error
  }

  if (cvc.length !== 3) {
    // throw error
  }
};

const App: React.FunctionComponent = () => {
  const [cardHolder, setCardHolder] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expMonth, setExpMonth] = useState<string>('');
  const [expYear, setExpYear] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');

  const cardHolderChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolder(event.target.value);
  };

  const cardNumberChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardNumber(event.target.value);
  };

  const expMonthChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpMonth(event.target.value);
  };

  const expYearChangedHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpYear(event.target.value);
  };

  const cvcChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  };

  console.log(cardHolder, cardNumber, expMonth, expYear, cvc);

  const formValidaionHandler = () => {
    if (
      cardHolder.trim().length === 0 ||
      cardNumber.trim().length === 0 ||
      expMonth.trim().length === 0 ||
      expYear.trim().length === 0 ||
      cvc.trim().length === 0
    ) {
      // throw error
    }

    validateCardHolder(cardHolder);
    validateCardNumber(cardNumber);
    validateMonth(expMonth);
    validateYear(expYear);
    validateCvc(cvc);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="background">
        <img src={background} alt="background" />
      </div>
      <form className="form">
        <label htmlFor="holder">CARDHOLDER NAME</label>
        <input
          type="text"
          id="holder"
          placeholder="e.g. Jane Appleseed"
          onChange={cardHolderChangedHandler}
          required
        />
        <label htmlFor="number">CARD NUMBER</label>
        <input
          type="text"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={cardNumberChangedHandler}
          required
        />
        <div className="subform-container">
          <div className="date-container">
            <label htmlFor="number">EXP. DATE (MM/YY)</label>
            <div className="date__input-container">
              <input
                type="text"
                id="month"
                placeholder="MM"
                onChange={expMonthChangedHandler}
                required
              />
              <input
                type="text"
                id="year"
                placeholder="YY"
                onChange={expYearChangedHandler}
                required
              />
            </div>
          </div>
          <div className="cvc-container">
            <label htmlFor="number">CVC</label>
            <input
              type="text"
              id="cvc"
              placeholder="e.g. 123"
              onChange={cvcChangedHandler}
              required
            />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default App;

// 0000 0000 0000 0000
//   Jane Appleseed
//   00/00

//   000

//   Cardholder Name
//   e.g. Jane Appleseed

//   Card Number
//   e.g. 1234 5678 9123 0000

//   Exp. Date (MM/YY)
//   MM
//   YY

//   CVC
//   e.g. 123

//   Confirm

//   <!-- Completed state start -->

//   Thank you!
//   We've added your card details
//   Continue
