export interface NavProps {
  token: string;
  authEndpoint: string;
  clientId: string;
  redirectUrl: string;
  responseType: string;
  onLogout: () => void;
}

const Navbar = ({
  token,
  authEndpoint,
  clientId,
  redirectUrl,
  responseType,
  onLogout,
}: NavProps) => {
  return (
    <nav className="flex justify-between bg-[#1ed760] p-4 items-center absolute top-0 left-0 w-full ">
      <a href="/">
        <div className="flex gap-2 items-center ">
          <img
            src="src/assets/spotify.svg"
            alt="spotify icon"
            height={30}
            width={30}
            className="hidden sm:block"
          />
          <h1 className="text-[26px] text-[#222222] font-bold">
            Spotify React
          </h1>
        </div>
      </a>
      <div>
        {!token ? (
          <a
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
            className="font-bold text-sm uppercase cursor-pointer bg-[#222222] p-4 rounded-full 
              text-[#1ed760] sm:min-w-[150px]"
          >
            Login to Spotfy
          </a>
        ) : (
          <>
            <button
              onClick={onLogout}
              className="font-bold text-sm uppercase cursor-pointer bg-[#222222] p-4 rounded-full 
              text-[#1ed760] sm:min-w-[150px]"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
