import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchProfile = (token: string) => {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadDate() {
      try {
        setLoading(true);
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadDate();
  }, [token]);

  return {
    profile,
    loading,
    error,
  };
};
