import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <h1>Contador de Clicks</h1>
      <p>
        Clicks: {count} | Fecha: {date.getDate()}/{date.getMonth() + 1}/
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}:
        {date.getMilliseconds()}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
          setDate(new Date());
        }}
      >
        Click
      </button>
    </div>
  );
}