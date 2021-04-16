import logo from './logo.svg';
import './App.css';
import SizePicker from './component/SizePicker.js'
import ColorPicker from './component/ColorPicker.js';
import Reset from './component/Reset.js';
import Result from './component/Result.js'

function App() {
  return (
    
    <div className="container mt-50">
    <div className="row">
      <ColorPicker/>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <SizePicker/>
        <Reset/>
      </div>
      <Result/>
    </div>
  </div>





    
  );
}

export default App;
