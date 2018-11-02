import React from "react";
import "./SideDrawer.css";
import Button2 from "../../Button2/Button2";

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
              <Button2 text={props.buttonText} />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
