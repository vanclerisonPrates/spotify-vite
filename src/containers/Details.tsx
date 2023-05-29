import { useAuthentication } from "../hooks/useAuthentication";
import { useFetchTracks } from "../hooks/useFetchTracks";
import { useLocation } from "react-router-dom";

const Details = () => {
  const params = useLocation();

  const { token } = useAuthentication();
  const { tracks } = useFetchTracks(token, params.pathname.slice(8));
  console.log(tracks);
  return (
    <div>
      {tracks && (
        <div className="sm:flex gap-10 flex-col justify-center  sm:flex-row">
          <div className="mb-4">
            <img
              src={tracks ? tracks?.items[0]?.album?.images[0].url : ""}
              alt="album"
              height={300}
              width={300}
            />
          </div>
          <div className="flex gap-2 flex-col">
            {tracks?.items?.map((item: any, index: any) => (
              <div className="flex gap-4">
                <span className="text-[#1ed760] flex text-bold text-lg ">
                  {index + 1}{" "}
                </span>
                <p
                  className="flex flex-col text-lg hover:text-[#1ed760]"
                  key={item.id}
                >
                  {" "}
                  {item.name ?? ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
