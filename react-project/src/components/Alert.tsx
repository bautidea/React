import React from 'react';

interface Props {
  children: string;
  status: boolean;
  onClick: () => void;
}

function Alert({ children, status, onClick }: Props) {
  return (
    <>
      {status && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onClick}
          ></button>
        </div>
      )}
    </>
  );
}

export default Alert;
