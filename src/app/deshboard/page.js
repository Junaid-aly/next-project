import Link from "next/link";
import './mems.css'

export default async function Home() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();
const allMemes = response.data.memes
  // console.log("res", response);

  return (
    <div className="  items-center justify-between  m-container bg-slate-800">
      

      <div className=" text-white text-lg ">
        <h1>Memes </h1>
      </div>

      <div className="m-10 grid text-center lg:grid-cols-4 lg:text-right">
        {allMemes.map((object, index) => {
          return (
            <div
              key={index}
              className="m-5 card-data  rounded-lg shadow-2xl block  bg-white w-100">
              <div className="img">
                <img src={object.url} />
              </div>
              <div className="content">
                <Link
                  className="btn-meme"
                  href={{
                    pathname: "/createMeme",
                    query: {
                      imgUrl: object.url,
                      id: object.id,
                    },
                  }}>
                  create Meme
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
