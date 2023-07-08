import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

const EXAMPLE_HANDLERS = () => {
    const [fetchError, setFetchError] = useState(null);
    const [formError, setformError] = useState(null);
    const [deleteError, setDeleteError] = useState(null);

    const [movies, setMovies] = useState(null);
    const [title, setTitle] = useState("");

    const fetchMovies = async () => {
        const { data, error } = await supabase.from("movies").select();

        if (error) {
            setFetchError("Could not fetch movies");
            setMovies(null);
            console.log(error);
        }
        if (data) {
            console.log(data);
            setMovies(data);
            setFetchError(null);
        }
    };

    const submitMovie = async (e) => {
        e.preventDefault();

        if (!title) {
            setformError("Please fill in the field");
            return;
        }

        console.log(title);
        const { data, error } = await supabase
            .from("movies")
            .insert([{ title }])
            .select();

        if (error) {
            console.log(error);
            setformError("Please fill in the field correctly!");
        }

        if (data) {
            console.log(data);
            setformError(null);
            setTitle("");
            fetchMovies();
        }
    };

    const deleteMovie = async (id) => {
        const { error } = await supabase.from("movies").delete().eq("id", id);

        if (error) {
            setDeleteError(`Could not delete movie ID:${id}`);
            console.log(error);
        } else {
            fetchMovies();
        }
    };
};
