import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/store";
import {TStateModel} from "./redux/types/storeModel";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const rerenderTree = (state : TStateModel) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );

}
rerenderTree(store.getState())
store.subscribe(rerenderTree)

