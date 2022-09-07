import { useState } from "react";
import getBoolean from "../services/getBoolean";
import Button from "./Button";

export default function Submit() {
  //constant declaration
  const [successOrError, setSuccessOrError] = useState();
  const [loading, setLoading] = useState(false);

  // Handler declaration
  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setSuccessOrError(getBoolean());
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      {!loading && successOrError === undefined && (
        <Button title="submit" clickHandler={clickHandler} />
      )}
      {loading && <Button title="loading" clickHandler={clickHandler} />}
      {!loading &&
        successOrError !== undefined &&
        (successOrError ? (
          <Button title="success" clickHandler={clickHandler} />
        ) : (
          <Button title="error" clickHandler={clickHandler} />
        ))}
    </div>
  );
}
