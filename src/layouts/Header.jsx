function Header() {
  return (
    <header className='app-header'>
      <nav>
        <div className='nav-wrapper app-header-container'>
          <a href='./' className='app-logo'>
            <img src="./logo.svg" alt="logo" />
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='?' target='_blank' rel='noreferrer'>
                REPO
              </a>
            </li>
            <li>
              <a href='https://fortniteapi.io/' target='_blank' rel='noreferrer'>
                FortniteApi.io
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };

