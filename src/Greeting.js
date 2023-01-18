export function Greeting({ number }) {
  console.log({ number });
  return <h1>Este es el h1 #{number}</h1>;
}

export function UserCard({ name, lastname, age, married, address, greet }) {
  console.log(name, lastname, age, married, address, greet);
  return (
    <div>
      <h1>
        {name} {lastname}
      </h1>
      <p>Age: {age}</p>
      <p>Married: {married ? "true" : "false"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </div>
  );
}
