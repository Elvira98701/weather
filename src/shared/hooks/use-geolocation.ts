import { useEffect, useState } from "react";

interface GeolocationData {
  lat: number;
  lon: number;
}

interface GeolocationResult {
  location: GeolocationData | null;
  error: string | null;
  loading: boolean;
}

export function useGeolocation(): GeolocationResult {
  const [location, setLocation] = useState<GeolocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setLoading(false);
      },
      () => {
        setError("User denied geolocation");
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
}
