import './App.css';
import { connect } from 'react-redux';
import Controls from './Controls';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
          <div>
          appVersion: {props.appVersion}
          <hr />
          Count: {props.myCount} 
          <hr />
          <Controls/>
          </div>  
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
myCount: state.count,
appVersion: state.appVersion
});

export default connect(mapStateToProps)(App);
