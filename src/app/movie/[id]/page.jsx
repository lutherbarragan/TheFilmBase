import MediaContentPage from "@/components/MediaContentPage/MediaContentPage";

export default function MoviePage({ params }) {
    return <MediaContentPage mediaType="movie" mediaId={params.id} />;
}
