import { useLocation } from 'react-router-dom';

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at{location}</h1>
    </div>
  );
}
