import Bank from './bank logo.jpg'
import './App.css'

 const bankName ="DK BANK"
function Home() {

  return (
    <div className="mainpage">
      <h1 className='bank-name'> {bankName}</h1>
      <img src={Bank} alt="Bank" width="300" />
    </div>
  );
}

export default Home;
