import { Link } from "react-router-dom";

export const PopupSearch = ({ datos, renderUpdate }) => {
  return (
    <>

      <ul className="absolute text-left top-[10%] left-[50.5%] w-[30%] bg-slate-800 py-3 rounded-md z-20">
        {datos.map((element) => {
          return (
            <Link
              to={'/profileSearch'}
              state={element}
              key={element.id}
            >
              <li
                className="ps-4 py-1 hover:bg-slate-900 cursor-pointer"
                key={element.id}
                onClick={renderUpdate}
              >
                {element.login}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
