// PostInfo takes in user: string, and message: string, to make PostInfo dynamic for any user and any post
// user and message parameters should be changed later to useContext value
export default function PostInfo ({ user, message }) {
  return (
  // style added was purely for testing purposes
    <div style={{ border: '1px solid black' }}>
      <h3>@{user}</h3>
      <p>{message}</p>
    </div>
  )
}
