import MenuFlotante from "./MenuFlotante";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { PopupSearch } from "./popupBusqueda";

export default function NavBar() {

  const { user } = useAuth();
  const [inputt, setInputt] = useState(null);
  const [dataSearch,setDataSearch] = useState(null);

  const inputChange = async () => {
    // let busqueda = e.target.value;
    // console.log(inputt)
    const response = await fetch(
      `https://api.github.com/search/users?q=${inputt}&per_page=5`
    );
    // console.log(response)
    const data = await response.json();
    // console.log(data);
    setDataSearch(data.items)
  };


  return (
    <div  onClick={()=>{setDataSearch(null)}}>
      <header className="bg-black w-full flex flex-col gap-5 p-5">
        {dataSearch && <PopupSearch datos={dataSearch} />}
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div
              onClick={() => {
                document.querySelector(".menu").classList.remove("hidden");
              }}
              className="p-3 border-2 border-gray-500 rounded-md hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </div>

            <MenuFlotante />

            <svg
              height="48"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="48"
              data-view-component="true"
              className="octicon octicon-mark-github fill-white"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>

            <div>
              <h3 className="hover:bg-gray-800 rounded-md p-3">
                /{user.username}
              </h3>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex justify-center items-center border-2 border-gray-500 rounded-md px-3 py-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search fill-gray-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              {/* Buscador */}
              <input
                type="text"
                placeholder="Type / to Search"
                className=" p-3 bg-transparent w-[400px] focus:outline-none"
                onChange={(e) => {
                  setInputt(e.target.value);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-terminal hover:bg-gray-800 rounded-md"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={inputChange}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 7l5 5l-5 5" />
                <path d="M12 19l7 0" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-caret-down"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 10l6 6l6 -6h-12" />
                </svg>
              </div>

              <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                <svg
                  aria-hidden="true"
                  height="26"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="26"
                  data-view-component="true"
                  className="octicon octicon-issue-opened Button-visual fill-gray-300"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>
              </div>
              <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                <svg
                  aria-hidden="true"
                  height="26"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="26"
                  data-view-component="true"
                  className="octicon octicon-git-pull-request Button-visual fill-gray-300"
                >
                  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                </svg>
              </div>

              <div className="flex border-2 border-gray-500 rounded-md p-3 hover:bg-gray-800 rounded-md">
                <svg
                  aria-hidden="true"
                  height="26"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="26"
                  data-view-component="true"
                  className="octicon octicon-inbox Button-visual fill-gray-300"
                >
                  <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div
            className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3 cursor-pointer"
            onClick={() => {
              document.querySelector(".Repositorios").classList.add("hidden");
              document.querySelector(".proyectos").classList.remove("hidden");
            }}
          >
            <svg
              aria-hidden="true"
              height="26"
              viewBox="0 0 16 16"
              version="1.1"
              width="26"
              data-view-component="true"
              className="octicon octicon-book UnderlineNav-octicon fill-gray-500 "
            >
              <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
            </svg>
            <h3 className="opacity-[0.5]">Overview</h3>
          </div>

          <div
            className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3 cursor-pointer"
            onClick={() => {
              document
                .querySelector(".Repositorios")
                .classList.remove("hidden");
              document.querySelector(".proyectos").classList.add("hidden");
            }}
          >
            <svg
              aria-hidden="true"
              height="26"
              viewBox="0 0 16 16"
              version="1.1"
              width="26"
              data-view-component="true"
              className="octicon octicon-repo UnderlineNav-octicon fill-gray-500"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <h3 className="opacity-[0.5]">Repositories</h3>
          </div>

          <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
            <svg
              aria-hidden="true"
              height="26"
              viewBox="0 0 16 16"
              version="1.1"
              width="26"
              data-view-component="true"
              className="octicon octicon-table UnderlineNav-octicon fill-gray-500"
            >
              <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
            </svg>
            <h3 className="opacity-[0.5]">Projects</h3>
          </div>

          <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
            <svg
              aria-hidden="true"
              height="26"
              viewBox="0 0 16 16"
              version="1.1"
              width="26"
              data-view-component="true"
              className="octicon octicon-package UnderlineNav-octicon fill-gray-500"
            >
              <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
            </svg>
            <h3 className="opacity-[0.5]">Packages</h3>
          </div>

          <div className="flex justify-center items-center gap-3 hover:bg-gray-800 rounded-md p-3">
            <svg
              aria-hidden="true"
              height="26"
              viewBox="0 0 16 16"
              version="1.1"
              width="26"
              data-view-component="true"
              className="octicon octicon-star UnderlineNav-octicon fill-gray-500"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <h3 className="opacity-[0.5]">Stars</h3>
          </div>
        </div>
      </header>
    </div>
  );
}
