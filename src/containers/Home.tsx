import { useState } from "react";

import { Artist } from "../components";

import { useAuthentication } from "../hooks/useAuthentication";
import { useFetchArtists } from "../hooks/useFetchArtists";
import { useFetchProfile } from "../hooks/useFetchProfile";

function Home() {
  const [search, setSearchKey] = useState("");

  const { token } = useAuthentication();
  const { artists } = useFetchArtists({ token: token, searchKey: search });
  const { profile } = useFetchProfile(token);

  const onSearchArtists = (e: any) => {
    e.preventDefault();
    setSearchKey(e.target[0].value);
  };

  const inputElement = document.getElementById("enter");
  inputElement?.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("send")?.click();
    }
  });

  return (
    <div className="sm:grid sm:grid-cols-[400px_minmax(300px,1fr)_100px]">
      <article className="mt-10 p-4 shadow-lg  rounded-3xl max-h-[300px] bg-[#1ed760] text-[#222]">
        {profile && (
          <div className="flex items-center gap-4  p-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <img
              src={profile?.images[0].url}
              height={50}
              width={100}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="flex white text-xl font-bold">
                {profile?.display_name}
              </span>
              <div>
                {" "}
                <p>{profile?.followers.total} followers</p>
                <a
                  href={profile?.uri}
                  target="_blank"
                  className="hover:font-bold"
                >
                  Profile
                </a>
              </div>
            </div>
          </div>
        )}

        <form
          onSubmit={onSearchArtists}
          className="w-[300px] flex jutify-center bg-[#fff] h-[50px] items-center rounded-full mt-10 mb-10 w-full"
        >
          <div className="flex items-center p-4 w-full justify-between bg-[#222] rounded-3xl">
            <input
              id="artist"
              name="artist"
              type="text"
              className="border-none bg-transparent text-lg outline-none border-2 text-white placeholder:text-gray "
              placeholder="Search an artist"
              value={search}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button
              id="send"
              type="submit"
              className="text-black bg-transparent border-none outline-none cursor-pointer"
            >
              <img
                src="src/assets/search.svg"
                alt="search"
                width={25}
                height={25}
              />
            </button>
          </div>
        </form>
      </article>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap max-w-full items-center justify-center p-0 m-0">
          {artists?.map((artist: any) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
