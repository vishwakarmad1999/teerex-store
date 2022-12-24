import React from "react";
import { useProductInfo, useDispatch } from "@/stores";

const AlertMessage = () => {
  const { errorMessage } = useProductInfo();
  const dispatch = useDispatch();

  function handleAlertClose() {
    dispatch({
      type: "setErrorMessage",
      payload: null,
    });
  }

  if (!errorMessage) {
    return "";
  }

  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {errorMessage}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={handleAlertClose}
      ></button>
    </div>
  );
};

export default AlertMessage;
