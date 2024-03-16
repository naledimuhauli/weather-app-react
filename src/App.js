//import logo from './logo.svg';
import './App.css';

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  intgrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
  crossorigin="anonymous"
/>;

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="openn-source">
          <div className="weather-appp">
            <h1 id="city">city</h1>
            <ul>
              <li>
                Last updated: <span id="currentDate">Thursday, 18:56</span>
              </li>
              <li id="description">clear</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <h2>
                  <div className="d-flex weather-temperature">
                    <div className="d-flex weather-temperature">
                      <strong id="temp">21°c</strong>
                      <span className="units"></span>
                    </div>
                  </div>
                </h2>
              </div>
              <div className="col-6">
                <ul>
                  <div className="description">
                    <li>
                      Humidity: <span id="humidity">14</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">18</span>km/h
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
