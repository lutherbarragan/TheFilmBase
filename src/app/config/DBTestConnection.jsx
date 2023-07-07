"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const DBTestConnection = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const [fetchError, setFetchError] = useState(null);
    const [movies, setMovies] = useState(null);

    const [title, setTitle] = useState("");
    const [formError, setformError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setformError("Please fill in the field");
            return;
        }

        console.log(title);
        const today = new Date();
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

    const fetchMovies = async () => {
        const { data, error } = await supabase.from("movies").select();

        if (error) {
            setFetchError("Could not fetch movies");
            setMovies(null);
            console.log(error);
        }
        if (data) {
            setMovies(data);
            setFetchError(null);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>SUPABASE MOUNTED SUCCESSFULLY</h1>

            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center rounded-sm overflow-hidden my-2">
                    <input
                        className="flex-grow pl-5 text-black"
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Add movie..."
                    />
                    <button className="bg-green-500 px-3">Add</button>
                </div>

                {formError && <p>{formError}</p>}
            </form>

            {fetchError && <p>{fetchError}</p>}
            {movies && (
                <div>
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className=" flex justify-between pl-5 items-center bg-zinc-700 rounded-sm overflow-hidden my-2"
                        >
                            <p>{movie.title}</p>
                            <button
                                onClick={() => console.log("DELETE MOVIE")}
                                className="bg-red-500 px-3"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DBTestConnection;
