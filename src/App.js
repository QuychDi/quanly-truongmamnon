import Main from './components/logins/login';
import IndexMain from './components/admin';
import NewAcc from './components/logins/createNewAcc';
import FromStudent from './views/adminViews/FormAddStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetialSudent from './views/adminViews/studentDetial';

// import '../src/docs/fonts/fonts/glyphicons-halflings-regular.ttf';
// import '../src/docs/fonts/fonts/glyphicons-halflings-regular.woff';
// import '../src/docs/fonts/fonts/glyphicons-halflings-regular.woff';
// import '../src/docs/fonts/fonts/glyphicons-halflings-regular.woff';


function App() {
  return (
    <Router>
      <div className="App">

        <header>

          <IndexMain></IndexMain>
        </header>

      </div>
    </Router>

  );
}

export default App;
