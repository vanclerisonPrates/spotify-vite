import { NavProps } from "../containers/Navbar";

const Login = ({
  authEndpoint,
  clientId,
  redirectUrl,
  responseType,
}: Omit<NavProps, "onLogout">) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-white w-full text-3xl ">
      <h1 className="mb-20 text-bold text-[44px]">
        Spotify Artist Search: Explore Their Top Tracks
      </h1>
      <h2 className="max-w-[1280px] text-center">
        Welcome to Spotify Artist Search, a user-friendly application that
        harnesses the power of the Spotify API to bring you an immersive
        experience of discovering and exploring your favorite artists and their
        top tracks. With our app, you can effortlessly search for an artist and
        delve into their captivating discography. Get ready to immerse yourself
        in the world of music like never before!
      </h2>
      <a
        className="font-bold text-sm uppercase cursor-pointer bg-[#1ed760] p-4 rounded-full 
       text-[#222222] min-w-[320px] mt-20 text-center"
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
      >
        Login
      </a>
    </div>
  );
};

export default Login;
