export const PopupSearch = ({ datos }) => {
    return (
      <>
        <ul className="absolute text-left top-[10%] left-[29%] w-[30%] bg-slate-800 py-3 rounded-md">
          {datos.map((element) => {
            return <li className="ms-4 py-1 hover:bg-slate-900" key={element.id}>{element.login}</li>;
          })}
        </ul>
      </>
    );
  };