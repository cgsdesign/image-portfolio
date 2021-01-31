import { capitalizeFirstLetter } from "../../utils/helpers";
import React, { useEffect } from 'react';
//below the categories array is made THEN it is called with .map to generate all the li items
//NOTE: className = class in normal html
      //Whenever we use .map we MUST use a key
      //we use a function declaration when calling categorySelect so it does not "auto click on componant load"
  //{currentCategory.name === category.name && 'navActive'}
      /* above line in class is the same as adding an if statement if the current category page = this category make it bold*/

  function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
      contactSelected,
      setContactSelected
    } = props;

      //if currentCategory changes => rerender so document.title will change
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);

//MAIN ELEMENT SUDO HTML JSX ELEMENT START HERE

  return (
<header>
  <h2>
    <a data-testid="link" href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
          About me
        </a>
      </li>
      <li className={`mx-2 ${contactSelected && 'navActive'}`}>
        <span onClick={() => setContactSelected(true)}>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className={`mx-1 ${
            currentCategory.name === category.name && !contactSelected && `navActive`
            }`}
          key={category.name}
        >
          <span 
            onClick={() => 
              {
                setCurrentCategory(category)
                setContactSelected(false);
            }} 
          >
            {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
  );
}

export default Nav;