// src/components/Profile.jsx
function Profile({ user }) {
    if (!user) return null;
  
    return (
      <div>
        <h2>Your Profile</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        {user.image && (
          <div>
            <p>Profile Picture:</p>
            <img src={user.image} alt="Profile" style={{ maxWidth: '200px' }} />
          </div>
        )}
      </div>
    );
  }
  
  export default Profile;