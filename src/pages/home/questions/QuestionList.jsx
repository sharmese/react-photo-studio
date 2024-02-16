import React, { Fragment, useEffect, useMemo, useState } from 'react';

const QuestionList = (props) => {
  //Стейт для збереження відкритого розділу в секції Q&A
  const [openedItem, setOpenedItem] = useState(undefined);

  const handleItem = () => {
    if (!openedItem) setOpenedItem(true);
    if (openedItem) setOpenedItem(false);
  };

  return (
    <Fragment>
      <div onClick={handleItem} className={props.className}>
        {props.children}
        <div
          className={`${props.dotStyle} ${openedItem && props.dotOpened}`}
        ></div>
      </div>
      <div className={`${openedItem && props.animateDropdown}`}>
        {openedItem && props.item}
      </div>
      <hr className={`${openedItem && props.animateDropdown}`} />
    </Fragment>
  );
};

export default QuestionList;
