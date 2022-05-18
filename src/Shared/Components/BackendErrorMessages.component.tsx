import { BackendErrorsType } from "../Types/BackendErrors.type";
import React from "react";

interface BackendErrorsProps {
  errors: BackendErrorsType;
}

const BackendErrorMessagesComponent: React.FC<BackendErrorsProps> = ({
  errors,
}) => {
  return <p className="text-danger">{errors}</p>;
};
export default BackendErrorMessagesComponent;
