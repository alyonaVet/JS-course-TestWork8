import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <NavLink to="/" className="navbar-brand fw-semibold">Quotes Central</NavLink>
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link fw-medium">Quotes</NavLink>
            <NavLink to="/add-quote" className="nav-link fw-medium">Submit new quote</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;