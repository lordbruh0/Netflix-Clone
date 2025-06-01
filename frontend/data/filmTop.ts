export interface TopMovie {
    id: number;
    title: string;
    subTitle: string;
    umur: number;
    category: string;
    genre: string;
    DetailGenre: string;
    image: string;   
    rating: number;
    year: number;
}

export const arrayTopMovies: TopMovie[] = [
    {
        id: 1,
        title: "The Gorge",
        subTitle: "The Gorge is a 2021 American action thriller film directed by Antoine Fuqua and written by Chris Sparling. The film stars Gerard Butler, Morena Baccarin, Roger Dale Floyd, Scott Glenn, David Denman, and Hope Davis.",
        image: "image/gorge.jpg",
        umur: 19,
        category: "Action",
        genre: "Thriller",
        DetailGenre: "Kisah Cinta",
        rating: 5.0,
        year: 2021
    },
    {
        id: 2,
        title: "Moana",
        subTitle: "Moana is a 2016 American animated musical adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.",
        image: "image/moana_two_ver2.jpg",
        umur: 14,
        category: "Animation",
        genre: "Anak-Anak",
        DetailGenre: "Petualangan",
        rating: 4.8,
        year: 2020
    },
    {
        id: 3,
        title: "Mufasa",
        subTitle: "Mufasa is a 2022 American musical drama film directed and produced by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures.",
        image: "image/mufasa_the_lion_king_ver4.jpg",
        umur: 15,
        category: "Animation",
        genre: "Anak-Anak",
        DetailGenre: "Drama",
        rating: 4.5,
        year: 2022
    },
    {
        id: 4,
        title: "The Sonic",
        subTitle: "The Sonic is a 2021 American action-adventure comedy film and a sequel to Sonic the Hedgehog (2020).",
        image: "image/sonic_the_hedgehog_three.jpg",
        umur: 15,
        category: "Animation",
        genre: "Anak-Anak",
        DetailGenre: "Petualangan",
        rating: 4.0,
        year: 2021
    },
    {
        id: 5,
        title: "Eternals",
        subTitle: "Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name.",
        image: "image/eternals_ver4.jpg",
        umur: 18,
        category: "Action",
        genre: "Petualangan",
        DetailGenre: "Superhero",
        rating: 3.5,
        year: 2021
    },
    {
        id: 6,
        title: "The Rise Of Gru",
        subTitle: "The Rise of Gru is a 2022 American computer-animated comedy film produced by Illumination and distributed by Universal.",
        image: "image/minions_the_rise_of_gru_ver3.jpg",
        umur: 10,
        category: "Animation",
        genre: "Komedi",
        DetailGenre: "Anak-Anak",
        rating: 4.5,
        year: 2022
    },
    {
        id: 7,
        title: "Harry Potter and the Half-Blood Prince",
        subTitle: "Harry Potter and the Half-Blood Prince is a 2009 fantasy film directed by David Yates and distributed by Warner Bros. Pictures.",
        image: "image/harry_potter_and_the_half_blood_prince_ver2.jpg",
        umur: 13,
        category: "Fantasy",
        genre: "Petualangan",
        DetailGenre: "Sihir",
        rating: 5.0,
        year: 2009
    },
    {
        id: 8,
        title: "The Meg 2",
        subTitle: "The Meg 2: The Trench is an upcoming American science fiction action thriller film directed by Ben Wheatley.",
        image: "image/meg_two_the_trench_ver4.jpg",
        umur: 17,
        category: "Action",
        genre: "Thriller",
        DetailGenre: "Monster",
        rating: 4.8,
        year: 2023
    },
    {
        id: 9,
        title: "Godzilla Vs Kong",
        subTitle: "Godzilla vs. Kong is a 2021 American monster film directed by Adam Wingard.",
        image: "image/godzilla_vs_kong.jpg",
        umur: 15,
        category: "Action",
        genre: "Fiksi Ilmiah",
        DetailGenre: "Monster",
        rating: 4.9,
        year: 2021
    },
    {
        id: 10,
        title: "Enola Holmes",
        subTitle: "Enola Holmes is a 2020 mystery film based on the first book in the young adult fiction series by Nancy Springer.",
        image: "image/enola_holmes.jpg",
        umur: 12,
        category: "Mystery",
        genre: "Drama",
        DetailGenre: "Detektif",
        rating: 4.0,
        year: 2020
    }
];
    