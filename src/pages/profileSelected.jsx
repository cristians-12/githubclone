import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useState } from "react";

export const ProfileSelected = () => {
  const [repos, setRepos] = useState(null);

  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(`${state.repos_url}`);
      // console.log(response)
      const data = await response.json();
      console.log(data);
      setRepos(data);
    };
    fetching();
  }, []);

  console.log(location.state);
  return (
    <>
    <NavBar/>
      <main className="bg-[#0f0e1b] flex px-52 pt-10">
        <div className="w-[20%]">
          <img src={state.avatar_url} className="rounded-full w-100" alt="" />
          <h1 className="font-bold mt-5">{state.login}</h1>
        </div>
        <div className="w-[80%]">
          <div className=" w-[90%] flex justify-between">
          <h1 className="text-white">Popular Repositories</h1>
          <h1 className="text-blue-600">Customize your pins</h1>
          </div>
          <ul className="flex flex-wrap">
            {repos &&
              repos.map((element) => (
                <li key={element.id}>
                  <div className="border w-[400px] m-5 rounded-lg border-gray-500 px-5 py-5 h-[150px]">
                    <div className="flex justify-between">
                      <h1 className="text-blue-600 font-bold">{element.name}</h1>
                      <h1 className="border font-medium text-gray-400 border-gray-500 rounded-full px-3 py-1">{element.visibility}</h1>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
};
