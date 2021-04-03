import './App.css';
import React from 'react';
import {
    Route,
    Router,
    Switch,
} from 'react-router-dom';
import ReactModal from 'react-modal';
import Menu from './subpages/Menu';
import Main from "./pages/Main";
import {createBrowserHistory} from 'history';
import cv from './documents/cv_adrien_bouyssou.pdf';

ReactModal.setAppElement('#root');

class App extends React.Component {
    state = {
        isCVModalOpened: false,
    };

    history = createBrowserHistory();

    closeCVModal = (event) => {
        this.setState({isCVModalOpened: false});
    }

    render() {
        return (
            <Router history={this.history}>
                <Menu openCVModal={(event) => this.setState({isCVModalOpened: true})}/>
                <div className="App">
                    <Switch>
                        <Route path='/'>
                            <Main/>
                        </Route>
                    </Switch>
                    <ReactModal isOpen={this.state.isCVModalOpened}
                                shouldCloseOnOverlayClick={true}
                                onRequestClose={this.closeCVModal}
                                className='cvModal'
                    >
                        <iframe className='cv' title='Adrien Bouyssou CV' src={cv} allowFullScreen/>
                    </ReactModal>
                </div>
            </Router>
        );
    };
}

export default App;
