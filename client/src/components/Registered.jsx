export default function Registered(props) {
  return (
    <div>
      <hr></hr>
      <h1>Registered User</h1>
      <p>Full Name: {props.fullName}</p>
      <p>Email: {props.email}</p>
      <hr></hr>
    </div>
  );
}
