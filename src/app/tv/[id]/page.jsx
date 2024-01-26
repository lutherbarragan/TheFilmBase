import MediaContentPage from "@/components/MediaContentPage/MediaContentPage";

export default function ShowPage({ params }) {
    return <MediaContentPage mediaType="tv" mediaId={params.id} />;
}
