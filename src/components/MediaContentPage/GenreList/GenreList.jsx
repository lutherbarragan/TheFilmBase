export default function GenreList({ genres }) {
    return (
        <div className="flex flex-wrap justify-center">
            {genres.map((genre, i) => (
                <span key={i + genre.name} className="leading-4 text-xs mr-1">
                    • {genre.name}
                </span>
            ))}
        </div>
    );
}
