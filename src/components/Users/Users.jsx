import styles from "./Users.module.css";
const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl:
          "https://img.freepik.com/premium-vector/cute-fox-kitsune-holding-handheld-fan-cartoon-vector-icon-illustration-animal-holiday-isolated-flat_138676-9824.jpg",
        followed: false,
        fullname: "Dmitry K",
        status: "I am looking for a job right now...",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {
        id: 2,
        avatarUrl:
          "https://img.freepik.com/premium-vector/cute-fox-kitsune-holding-handheld-fan-cartoon-vector-icon-illustration-animal-holiday-isolated-flat_138676-9824.jpg",
        followed: true,
        fullname: "Julia T",
        status: "I'm reading the book 'The Dark Rise'",
        location: {
          city: "Orel",
          country: "Russia",
        },
      },
      {
        id: 3,
        avatarUrl:
          "https://img.freepik.com/premium-vector/cute-fox-kitsune-holding-handheld-fan-cartoon-vector-icon-illustration-animal-holiday-isolated-flat_138676-9824.jpg",
        followed: true,
        fullname: "Artur B",
        status: "I play in Metro Exodus",
        location: {
          city: "Belgrade",
          country: "Serbia",
        },
      },
      {
        id: 4,
        avatarUrl:
          "https://img.freepik.com/premium-vector/cute-fox-kitsune-holding-handheld-fan-cartoon-vector-icon-illustration-animal-holiday-isolated-flat_138676-9824.jpg",
        followed: true,
        fullname: "Nastya P",
        status: "I love my cat Hollie",
        location: {
          city: "Saint-Petersburg",
          country: "Russia",
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.avatarUrl}
                className={styles.usersAvatar}
                alt="avatar"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
