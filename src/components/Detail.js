import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  return <div>Detail nya adalah {id}</div>;
};

export default Detail;
