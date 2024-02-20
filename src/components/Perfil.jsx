import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { user } = useAuth();
  return (
    <>
      {/* Perfil */}
      <div className="flex flex-col p-5">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png"></img>
        <h2 className="text-4xl p-3"></h2>
        <h3 className="text-2xl px-3 opacity-[0.5] mb-5">{user.username}</h3>
        <button className="bg-gray-700 p-3 font-bold rounded-md">
          Edit profile
        </button>
        <div className="my-5 flex gap-5">
          <svg
            text="muted"
            aria-hidden="true"
            height="26"
            viewBox="0 0 16 16"
            version="1.1"
            width="26"
            data-view-component="true"
            className="octicon octicon-people fill-gray-500"
          >
            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
          </svg>
          {/* Seguidores  */}
          <div className="flex gap-3 text-lg">
            <span>0</span>
            <p>followers</p>
          </div>
          <div className="flex gap-3 text-lg">
            <span>2</span>
            <p>followers</p>
          </div>
        </div>
      </div>
    </>
  );
}
