import { useRouteError } from 'react-router-dom';

const PageNotFound = () => {
  const { status, statusText, data, internal, error = { message: '', stack: '' } } = useRouteError();

  return (
    <div id="page-not-found" className="flex flex-column">
      <div className="flex">
        <div>Status:</div>
        <div>{status}</div>
      </div>

      <div className="flex">
        <div>Status Text:</div>
        <div>{statusText}</div>
      </div>

      <div className="flex">
        <div>Data:</div>
        <div>{data}</div>
      </div>

      <div className="flex">
        <div>Internal:</div>
        <div>{internal}</div>
      </div>

      <div className="flex">
        <div>Message:</div>
        <div>{error.message}</div>
      </div>

      <div className="flex">
        <div>Stack:</div>
        <div>{error.stack}</div>
      </div>
    </div>
  );
};

export const PageWithErrors = () => {
  const error = useRouteError();

  console.log(error);

  return <div>Sorry, an unexpected error is occurred.</div>;
};

export default PageNotFound;
