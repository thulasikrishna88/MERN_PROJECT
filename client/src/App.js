import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleForm}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleForm}
          placeholder="Enter transaction details"
        />
        <input
          type="date"
          name="date"
          value={form.data}
          onChange={handleForm}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
