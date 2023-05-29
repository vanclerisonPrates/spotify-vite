import { Link } from "react-router-dom";

interface Props {
  artist: {
    name: string;
    images: [
      {
        url: string;
      }
    ];
    id: string;
  };
}

const Artist = ({ artist }: Props) => {
  return (
    <Link to={`artist/${artist.name}`}>
      <div className="p-8 flex flex-col rounded border-2 border-transparent drop-shadow-3xl hover:bg-[#121212] hover:text-[#1ed760] max-w-[320px] cursor-pointer ">
        {artist.images.length ? (
          <img
            src={artist.images[0].url}
            alt=""
            width={300}
            height={300}
            style={{
              borderRadius: "10px",
              width: "300px",
              height: "300px",
              backgroundSize: "cover",
            }}
          />
        ) : (
          <div className="w-[250px] h-[300px] bg-[#65d26e] flex items-center justify-center rounded p-0 m-0"></div>
        )}
        <div>
          <h3 className="mt-2 font-medium">{artist.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Artist;
