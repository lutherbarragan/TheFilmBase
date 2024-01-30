import DetailsPage from "@/components/DetailsPage/DetailsPage";

export default function ShowPage({ params }) {
    return <DetailsPage mediaType="tv" mediaId={params.id} />;
}
