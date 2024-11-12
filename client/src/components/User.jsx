export default function User(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Username: {props.username}</p>
      <hr />
    </div>
  );
}
