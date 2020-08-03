import React from 'react';
import { Link } from 'react-router-dom';

//Nav displays the menu links on the page.
class Nav extends React.Component
{
  render ()
  {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/newsfeed">
              News Feed
            </Link>
          </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;