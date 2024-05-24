import React, { useEffect } from "react";
import Helmet from "react-helmet";

interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Title;
