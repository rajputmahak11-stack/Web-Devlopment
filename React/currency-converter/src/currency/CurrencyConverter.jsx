// import React, { useState, useEffect } from "react";

// function CurrencyConverter() {
//   const [amount, setAmount] = useState(1);
//   const [from, setFrom] = useState("USD");
//   const [to, setTo] = useState("INR");
//   const [rate, setRate] = useState(0);

//   useEffect(() => {
//     fetch(`https://api.exchangerate.host/latest?base=${from}`)
//       .then(res => res.json())
//       .then(data => setRate(data.rates[to]));
//   }, [from, to]);

//   // Swap currencies
//   const swapCurrency = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow p-4">
//         <h3 className="text-center mb-4">Currency Converter</h3>

//         <div className="mb-3">
//           <input
//             type="number"
//             className="form-control"
//             value={amount}
//             onChange={e => setAmount(e.target.value)}
//           />
//         </div>

//         <div className="row align-items-center">
//           <div className="col">
//             <select className="form-select" value={from} onChange={e => setFrom(e.target.value)}>
//               <option>USD</option>
//               <option>INR</option>
//               <option>EUR</option>
//             </select>
//           </div>

//           <div className="col-2 text-center">
//             <button className="btn btn-warning" onClick={swapCurrency}>
//               ⇄
//             </button>
//           </div>

//           <div className="col">
//             <select className="form-select" value={to} onChange={e => setTo(e.target.value)}>
//               <option>INR</option>
//               <option>USD</option>
//               <option>EUR</option>
//             </select>
//           </div>
//         </div>

//         <h5 className="text-center mt-4">
//           {amount} {from} = {(amount * rate).toFixed(2)} {to}
//         </h5>
//       </div>
//     </div>
//   );
// }

// export default CurrencyConverter;

import React from "react";

function CurrencyConverter() {
  return (
    <div>
      <h2>Currency Converter Working ✅</h2>
    </div>
  );
}
export default CurrencyConverter;
