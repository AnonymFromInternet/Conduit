import React from "react";

interface ErrorMessageComponentProps {
  error: string;
}

const ErrorMessageComponent: React.FC<ErrorMessageComponentProps> = ({
  error = "Something went wrong",
}) => {
  return <p>{error}</p>;
};
export default ErrorMessageComponent;
