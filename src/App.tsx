import './App.css';
import FormRHF from './components/FormRHF';
import FormTraditional from './components/FormTraditional';

function App() {
  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md'>
      <FormRHF />
      {/* <FormTraditional /> */}
    </div>
  );
}

export default App;
