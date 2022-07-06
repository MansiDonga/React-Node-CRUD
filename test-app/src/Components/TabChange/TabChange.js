import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../actions/tabAction";
import { NEXT_TAB } from "../../constants/tabConstant";
import store from "../../store/store";

function TabChange(props) {
  const dispatch = useDispatch();

  const tabValue = useSelector(state => state.tabName);
  console.log("----tab change store----", store.getState());
  return (
    <div className="container">
      <h3 className="text-center">Tab Change</h3>
      <h1>{tabValue}</h1>
      <ul className="nav justify-content-start">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            onClick={() => dispatch(changeTab({ type: NEXT_TAB, tabName: 1 }))}
          >
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Link</a>
        </li>
      </ul>
    </div>
  );
}

export default TabChange;
