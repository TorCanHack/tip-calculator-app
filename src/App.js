import React, {useEffect, useState} from 'react';
import './App.css';
import Logo from '../src/images/logo.svg';
import dollarIcon from '../src/images/icon-dollar.svg';
import peopleIcon from '../src/images/icon-person.svg';


function App() {
  const [billValue, setBillValue] = useState('')
  const [total, setTotal] = useState('0.00');
  const [customPercentage, setCustomPercentage] = useState('');
  const [peopleValue, setPeopleValue] = useState('')
  const [tipAmount, setTipAmount] = useState('0.00');

  const handle5 = () => {

    const bill = parseInt(billValue);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * 0.05).toFixed(2);
      setTotal(totalTipAmount)
      setTipAmount((totalTipAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')
    }


  }
  const handle10 = () => {

    const bill = parseInt(billValue);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * 0.10).toFixed(2);
      setTotal(totalTipAmount)
      setTipAmount((totalTipAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')
    }


  }
  const handle15 = () => {

    const bill = parseInt(billValue);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * 0.15).toFixed(2);
      setTotal(totalTipAmount)
      setTipAmount((totalTipAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')

    }


  }

  const handle25 = () => {

    const bill = parseInt(billValue);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * 0.25).toFixed(2);
      setTotal(totalTipAmount)
      setTipAmount((totalTipAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')
    }


  }

  const handle50 = () => {

    const bill = parseInt(billValue);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * 0.50).toFixed(2);
      setTotal(totalTipAmount)
      setTipAmount((totalTipAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')
    }


  }

  useEffect(() => {
    const bill = parseFloat(billValue);
    const percentage = parseFloat(customPercentage);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(percentage) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * (percentage/100)).toFixed(2)
      setTotal(totalTipAmount);
      setTipAmount((totalTipAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')
    }
      
    
  }, [customPercentage, billValue, peopleValue])

  const handleReset = () => {

    setBillValue('')
    setTotal('0.00')
    setTipAmount('0.00')
    setPeopleValue('')
    setCustomPercentage('')
  }

  return (
    <main className="bg-mainCyan border font-spaceMono h-full">
      <img className='my-8 m mx-auto' src={Logo} alt='logo'/>
      <section className='bg-white rounded-t-2xl p-8'>
        <article className=''>
          <label className='font-bold text-blueGray'>Bill</label>
          <input type='text' value={billValue} onChange={(e) => setBillValue(e.target.value)} className='w-full h-12 bg-lightGrayishCyan mb-8 text-2xl text-veryDarkCyan font-bold text-right px-4'/>
          <img src={dollarIcon} alt='' className='relative bottom-16 left-4'/>

          <p className='text-blueGray font-bold'>Select Tip %</p>
          <div className='grid grid-cols-2 gap-3 mb-8'>
            <button className='h-12 w-36 bg-veryDarkCyan rounded-md text-2xl text-white font-bold' onClick={handle5}>5%</button>
            <button className='h-12 w-36 bg-veryDarkCyan rounded-md text-2xl text-white font-bold' onClick={handle10}>10%</button>
            <button className='h-12 w-36 bg-veryDarkCyan rounded-md text-2xl text-white font-bold' onClick={handle15}>15%</button>
            <button className='h-12 w-36 bg-veryDarkCyan rounded-md text-2xl text-white font-bold' onClick={handle25}>25%</button>
            <button className='h-12 w-36 bg-veryDarkCyan rounded-md text-2xl text-white font-bold' onClick={handle50}>50%</button>
            <input  className='h-12 w-36 bg-lightGrayishCyan text-2xl text-cyantext font-bold px-8' placeholder='Custom' type='text' value={customPercentage} onChange={(e) => setCustomPercentage(e.target.value)}/>
            

          </div>

          <label className='font-bold text-blueGray'>Number of people</label>
          <input type='text' value={peopleValue} onChange={(e) => setPeopleValue(e.target.value)} className='w-full h-12 bg-lightGrayishCyan text-2xl text-veryDarkCyan font-bold text-right px-4'/>
          <img src={peopleIcon} alt='' className='relative bottom-8 left-4 mb-4'/>
        </article>
        <article className='bg-veryDarkCyan p-4 rounded-2xl'>
          <div className='flex flex-row justify-between my-4'>
            <p className='text-white font-bold'>Tip Amount <br/> <span className='text-xs text-grayishCyan relative bottom-2'>/ person</span></p> 
            <p className='font-bold text-strongCyan text-32'>${tipAmount}</p>
          </div>
          <div className='flex flex-row justify-between my-4'>
            <p className='text-white font-bold'>Total <br/> <span className='text-xs text-grayishCyan relative bottom-2'> / person</span></p>
            <p className='font-bold text-strongCyan text-32'>${total}</p>
          </div>
          <button className='bg-strongCyan text-veryDarkCyan h-12 w-full rounded-lg my-2' onClick={handleReset}>RESET</button>
        </article>
      </section>
      
      
    </main>
  );
}

export default App;
