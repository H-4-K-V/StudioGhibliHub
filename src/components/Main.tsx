import { useGhibliMovies } from '../hook/useGhibliMovies';
import { Card } from './Card';

interface MainProps {
  search: string;
}

export function Main({ search }: MainProps) {
  const { movies, loading, error } = useGhibliMovies();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">{error}</p>
    );
  }

  const filteredMovies = movies.filter(({ title }) =>
    title.toLowerCase().includes(search)
  );

  return (
    <main className="flex flex-wrap justify-center gap-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map(
          ({ id, title, original_title, image }) => (
            <Card
              key={id}
              image={image}
              title={title}
              original_title={original_title}
            />
          )
        )
      ) : (
        <p className="text-center text-red-500">
          No movies found
        </p>
      )}
    </main>
  );
}
