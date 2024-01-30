export default function BlurredBackground({ backdrop_path, title, expanded }) {
    const imageUrl = backdrop_path
        ? `https://image.tmdb.org/t/p/original${backdrop_path}`
        : "https://cdn-imgix.headout.com/blog-banner/image/207033c945b21f3d9a6c5748edd629cc-Theatre-Shows-March.jpg";
    const heightClassName = expanded ? "h-80" : "h-56";

    return (
        <img
            src={imageUrl}
            alt={title}
            className={`blur-sm object-cover transition-all duration-500 ease-in-out brightness-50 w-full ${heightClassName}`}
        />
    );
}
