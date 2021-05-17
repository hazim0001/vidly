import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviesDetails from "./components/moviesDetails";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <main className="container">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MoviesDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />

          <Redirect from="/" to="/movies" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
