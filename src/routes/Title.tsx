import React from "react";
import Helmet from "react-helmet";

interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Title;
