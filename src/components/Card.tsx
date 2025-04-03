interface CardProps {
  image: string;
  title: string;
  original_title: string;
}

export function Card({
  image,
  title,
  original_title,
}: CardProps) {
  return (
    <div className="flex flex-col w-[240px]">
      <img
        src={image}
        alt={title}
        className="rounded-sm w-full"
      />
      <aside>
        <h2 className="text-lg text-slate-800">{title}</h2>
        <span className="text-slate-400 text-sm">
          {original_title}
        </span>
      </aside>
    </div>
  );
}
