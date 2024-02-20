export default function Overview() {
  return (
    <>
      {/* Repositorios*/}
      <div className="proyectos my-20 p-5">
        <div>
          <div className="flex justify-between w-full relative flex-wrap">
            <h3 className="text-2xl">Popular repositories</h3>
            <h3 className="text-blue-600 hover:underline absolute right-0">
              Customize your pins
            </h3>
          </div>

          {/* RECUADROS DE PROYECTOS  */}
          <div className="flex gap-5 w-[100%] mt-5 flex-wrap">
            {/* Repositorio  */}
            <div className="border-2 border-gray-600 w-[50%] h-[160px] rounded-md p-5 relative">
              <h3 className="text-2xl text-blue-600 hover:underline">
                Nombredelproyecto
              </h3>
              <div className="absolute right-7 top-5 border-2 border-gray-600 px-3 py-2 rounded-full">
                Estado
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex items-center">
                  <div className="rounded-full bg-red-600 w-[20px] h-[20px] mr-2"></div>
                  <span className="">Lenguaje</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    aria-label="star"
                    role="img"
                    height="26"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="26"
                    data-view-component="true"
                    className="octicon octicon-star fill-gray-500"
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                  </svg>
                  <span>0</span>
                </div>
              </div>
            </div>
            {/* Repositorio  */}

            <div className="border-2 border-gray-600 w-[50%] h-[160px] rounded-md p-5 relative">
              <h3 className="text-2xl text-blue-600 hover:underline">
                Nombredelproyecto
              </h3>
              <div className="absolute right-7 top-5 border-2 border-gray-600 px-3 py-2 rounded-full">
                Estado
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex items-center">
                  <div className="rounded-full bg-red-600 w-[20px] h-[20px] mr-2"></div>
                  <span className="">Lenguaje</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    aria-label="star"
                    role="img"
                    height="26"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="26"
                    data-view-component="true"
                    className="octicon octicon-star fill-gray-500"
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                  </svg>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-600 w-[50%] h-[160px] rounded-md p-5 relative">
              <h3 className="text-2xl text-blue-600 hover:underline">
                Nombredelproyecto
              </h3>
              <div className="absolute right-7 top-5 border-2 border-gray-600 px-3 py-2 rounded-full">
                Estado
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex items-center">
                  <div className="rounded-full bg-red-600 w-[20px] h-[20px] mr-2"></div>
                  <span className="">Lenguaje</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    aria-label="star"
                    role="img"
                    height="26"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="26"
                    data-view-component="true"
                    className="octicon octicon-star fill-gray-500"
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                  </svg>
                  <span>0</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
