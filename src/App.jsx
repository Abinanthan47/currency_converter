import  { useState } from 'react';
import './App.css';
import sample from './assets/sample.mp4';
import { InputBox } from './components/index.js';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex items-center w-full justify-center h-screen ">
      
      <video className='videoTag bg-cover bg-no-repeat absolute top-0 left-0' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Currency Converter 💵</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className='w-full mb-1'>
            <InputBox
              label='from'
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)} 
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button 
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
            onClick={swap}>
              Swap
            </button>

          </div>
          <div className='w-full mb-1'>
            <InputBox
              label='to'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)} 
             // onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={to}
            />
          </div>
          <div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
