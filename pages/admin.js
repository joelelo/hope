import React, { useState } from "react";

const admin = () => {
  const [list, setList] = useState();
  return (
    <div>
      {list.map((cont) => {
        return;
      })}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/content");

  return {
    props: {},
  };
};
export default admin;
