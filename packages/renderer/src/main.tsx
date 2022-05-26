import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './samples/electron-store'
import './samples/preload-module'
import './styles/index.css'
import background from './assets/background-3.jpg'
import {Provider} from "react-redux";
import {setupStore} from "@/store/store";

const store = setupStore();
const root = createRoot(document.getElementById('root')!)

root.render(
    <StrictMode>
        <div style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5) ),  url(${background})`,
            backgroundSize: "cover",
        }}>
            <div className="header_panel">
                <span className="name_window">Black Desert Launcher</span>
            </div>
            <div className="window">
                <Provider store={store}>
                    <App/>
                </Provider>
            </div>
        </div>
    </StrictMode>
)

window.removeLoading()
