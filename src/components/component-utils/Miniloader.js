import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

export default function Miniloader({loading}) {
  return (
     <MoonLoader
        color={`#000`}
        loading={loading}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}
