import './App.css';
import {
    Route,
    Router,
    Switch,
} from 'react-router-dom';
import Menu from './subpages/Menu';
import Main from "./pages/Main";
import {createBrowserHistory} from 'history';

function App() {
    return (
        <Router history={createBrowserHistory()}>
            <Menu/>
            <div className="App">
                <Switch>
                    <Route path='/'>
                        <Main/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
