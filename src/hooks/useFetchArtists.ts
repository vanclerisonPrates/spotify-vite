import axios from "axios";
import { useState, useEffect } from "react";

interface FetchProps {
  token: string;
  searchKey: string;
}

export const useFetchArtists = ({ token, searchKey }: FetchProps) => {
  const [artists, setArtists] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadDate() {
      try {
        setLoading(true);
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: searchKey,
            type: "artist",
          },
        });
        setArtists(data.artists.items);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadDate();
  }, [searchKey]);

  return {
    artists,
    loading,
    error,
  };
};
