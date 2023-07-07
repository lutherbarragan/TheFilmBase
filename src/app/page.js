import DBTestConnection from "./config/DBTestConnection";

export default function Home() {
    return (
        <div className="text-center">
            Home
            <DBTestConnection />
        </div>
    );
}
