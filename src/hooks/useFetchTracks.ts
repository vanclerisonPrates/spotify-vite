import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchTracks = (token: string, artist: string) => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<any>();
  const [error, setError] = useState();

  useEffect(() => {
    async function loadDate() {
      try {
        setLoading(true);
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: artist,
            type: "track",
          },
        });
        setTracks(data.tracks);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadDate();
  }, [token]);

  return {
    tracks,
    loading,
    error,
  };
};
