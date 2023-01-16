import Styles from '../app/Nav.module.css'

export default function Nav(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand" href="#">
    <div className={Styles.image_test}><img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" width="50" height="30" class="d-inline-block align-top " alt=""/>
    <span className='text-light'>workflow</span></div>
  </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Projects</a>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center">
      <a className="link-grayish me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>

      <div className="dropdown">
        <a
          className="link-grayish me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>


        </div>
        )
    }