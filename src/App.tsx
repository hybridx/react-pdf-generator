import { useState } from 'react';
import './App.css';
import { usePDF } from 'react-to-pdf';

function App() {
  const [name, setName] = useState(null);
  const [amount, setAmount] = useState(null);
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any) => {
    if (event.target.id === 'name') {
      setName(event.target.value);
    }
    if (event.target.id === 'amount') {
      setAmount(event.target.value);
    }
  };

  return (
    <div className="grid place-items-center">
      <div className='mt-5'>Add your input</div>
      <form
        className="border rounded-md m-5 p-5 bg-gray-100"
        onSubmit={(event) => {
          event.preventDefault();
          toPDF();
        }}
      >
        <div className="m-2 p-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="name"
          >
            Please enter name:{' '}
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={onChange}
          />
        </div>
        <div className="m-2 p-2">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="amount"
          >
            Please enter amount:{' '}
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            pattern="\d{5}"
            name="amount"
            id="amount"
            placeholder="100"
            onChange={onChange}
          />
        </div>
        <div className="m-2 p-2">
          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Created PDF
          </button>
        </div>
      </form>
      <div className="m-4 p-4 border" ref={targetRef}>
        <h1>
          This will be converted to pdf {name} with amount {amount}
        </h1>
      </div>
    </div>
  );
}

export default App;
