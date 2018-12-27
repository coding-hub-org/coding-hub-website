import React from "react";
import "./SideDrawer.css";
import ButtonGoto from "./ButtonGoto/ButtonGoto";

const contactUsLink = () => {};

const sideDrawer = props => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        {props.navItems.map(item => (
          <li key={item.id}>
            {" "}
            <a href={item.link} id={"drawer_" + item.id}>
              {item.value}
            </a>
          </li>
        ))}

        <li>
          {props.buttonText !== "" && (
            <div className="hireMeButtonSideDrawer">
              <ButtonGoto
                text={props.buttonText}
                onClick={contactUsLink}
                href="#ContactUs"
              />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
