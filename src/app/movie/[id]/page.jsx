import DetailsPage from "@/components/DetailsPage/DetailsPage";

export default function MoviePage({ params }) {
    return <DetailsPage mediaType="movie" mediaId={params.id} />;
}
