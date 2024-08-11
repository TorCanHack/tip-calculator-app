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
  const [activePercentage, setActivePercentage] = useState(null);
  const [isResetActive, setIsResetActive] = useState(false);

  const handlePercentage = (percentage) => {
    setActivePercentage(percentage);
    setIsResetActive(true)

    const bill = parseInt(billValue);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(bill) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalTipAmount = (bill * percentage).toFixed(2);
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
      setActivePercentage(percentage)
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
    <main className="bg-mainCyan border-t font-spaceMono h-full">
      <img className='my-8 md:mt-44 lg:mt-20 m mx-auto' src={Logo} alt='logo'/>
      <section className='bg-white rounded-t-2xl p-8 md:w-730 md:mx-auto md:flex md:flex-row md:justify-between md:mt-16 lg:w-920 lg:h-481  lg:py-9'>
        <article className='md:w-300 lg:w-379'>
          <label className='font-bold text-blueGray'>Bill</label>
          <input type='text' value={billValue} onChange={(e) => setBillValue(e.target.value)} className='w-full h-12 bg-lightGrayishCyan mb-8 text-2xl text-veryDarkCyan font-bold text-right px-4' placeholder='0'/>
          <img src={dollarIcon} alt='' className='relative bottom-16 left-4'/>

          <p className='text-blueGray font-bold'>Select Tip %</p>
          <div className='grid grid-cols-2 gap-3 mb-8 lg:grid-cols-3'>
            <button className={`h-12 w-36 rounded-md text-2xl font-bold lg:w-117 ${activePercentage === 0.05 ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-white' }`} onClick={() => handlePercentage(0.05)}>5%</button>
            <button className={`h-12 w-36  rounded-md text-2xl font-bold lg:w-117 ${activePercentage === 0.10 ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-white' }`} onClick={() => handlePercentage(0.10)}>10%</button>
            <button className={`h-12 w-36 rounded-md text-2xl  font-bold lg:w-117 ${activePercentage === 0.15 ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-white' }`} onClick={() => handlePercentage(0.15)}>15%</button>
            <button className={`h-12 w-36 rounded-md text-2xl font-bold lg:w-117 ${activePercentage === 0.25 ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-white' }`} onClick={() => handlePercentage(0.25)}>25%</button>
            <button className={`h-12 w-36 rounded-md text-2xl font-bold lg:w-117 ${activePercentage === 0.50 ? 'bg-strongCyan text-veryDarkCyan' : 'bg-veryDarkCyan text-white' }`} onClick={() => handlePercentage(0.50)}>50%</button>
            <input  className='h-12 w-36 bg-lightGrayishCyan text-2xl text-cyantext font-bold px-8' placeholder='Custom' type='text' value={customPercentage} onChange={(e) => setCustomPercentage(e.target.value)}/>
            

          </div>

          <label className='font-bold text-blueGray'>Number of people</label>
          <input type='text' value={peopleValue} onChange={(e) => setPeopleValue(e.target.value)} className='w-full h-12 bg-lightGrayishCyan text-2xl text-veryDarkCyan font-bold text-right px-4' placeholder='0'/>
          <img src={peopleIcon} alt='' className='relative bottom-8 left-4 mb-4'/>
        </article>
        <article className='bg-veryDarkCyan p-4 rounded-2xl md:w-300 lg:w-413 lg:p-6'>
          <div className='flex flex-row justify-between my-4 lg:my-8'>
            <p className='text-white font-bold'>Tip Amount <br/> <span className='text-xs text-grayishCyan relative bottom-2'>/ person</span></p> 
            <p className='font-bold text-strongCyan text-32 lg:text-5xl'>${tipAmount}</p>
          </div>
          <div className='flex flex-row justify-between my-4'>
            <p className='text-white font-bold'>Total <br/> <span className='text-xs text-grayishCyan relative bottom-2'> / person</span></p>
            <p className='font-bold text-strongCyan text-32 lg:text-5xl'>${total}</p>
          </div>
          <button className={`h-12 w-full text-veryDarkCyan rounded-lg my-2 md:mt-48 lg:mt-32 ${activePercentage !== null ? 'bg-strongCyan': 'bg-fadeCyan'}`} onClick={handleReset}>RESET</button>
        </article>
      </section>
      
      
    </main>
  );
}

export default App;
