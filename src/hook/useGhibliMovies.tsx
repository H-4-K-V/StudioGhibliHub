import { useEffect, useState } from 'react';

interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
  original_title: string;
}

export function useGhibliMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { movies, loading, error };
}
