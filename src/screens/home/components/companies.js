import React from "react";
import { Link } from "react-router";

// Common
import Icon from "../../../components/icon";
// Assets
import VIACOM from "../../../../static/logo-viacom.svg";
import FIVETHIRTYEIGHT from "../../../../static/logo-fivethirtyeight.svg";

class Companies extends React.Component {
  render() {
    return (
      <div className="Companies">
        <h2 className="SubHeading">
          A few of our fans
        </h2>
        <ul className="Companies-List">
          <li className="Companies-logo Companies-logo--max300">
            <img src="./static/logo-airbnb.png" alt="Airbnb" className="Companies-logo-img" />
          </li>
          <li className="Companies-logo Companies-logo--max300" dangerouslySetInnerHTML={{__html: FIVETHIRTYEIGHT}} />
          <li className="Companies-logo Companies-logo--max200" dangerouslySetInnerHTML={{__html: VIACOM}} />
        </ul>
        <p className="SubHeading">
          <Link to="/about#showcase" className="isLight">
            See showcase&nbsp;<Icon glyph="internal-link"/>
          </Link>
        </p>
      </div>
    );
  }
}

Companies.propTypes = {
  style: React.PropTypes.object
};

Companies.defaultProps = {
  style: null
};

export default Companies;
