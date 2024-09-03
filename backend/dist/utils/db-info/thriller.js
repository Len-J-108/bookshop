const thrillers = {
    genreName: "Thriller",
    data: [
        { title: "Psycho", author: "Robert Bloch", year: "1959" },
        {
            title: "The Silence of the Lambs",
            author: "Thomas Harris",
            year: "1988",
        },
        { title: "Gone Girl", author: "Gillian Flynn", year: "2012" },
        {
            title: "The Girl with the Dragon Tattoo",
            author: "Stieg Larsson",
            year: "2005",
        },
        { title: "The Shining", author: "Stephen King", year: "1977" },
        { title: "Misery", author: "Stephen King", year: "1987" },
        { title: "The Woman in the Window", author: "A.J. Finn", year: "2018" },
        { title: "Sharp Objects", author: "Gillian Flynn", year: "2006" },
        { title: "The Lincoln Rhyme", author: "by Jeffery Deaver", year: "1999" },
        { title: "The Bone Collector", author: "Jeffery Deaver", year: "1997" },
        { title: "The Da Vinci Code", author: "Dan Brown", year: "2003" },
        { title: "Angels & Demons", author: "Dan Brown", year: "2000" },
        { title: "The Bourne Identity", author: "Robert Ludlum", year: "1980" },
        { title: "The Hunt for Red October", author: "Tom Clancy", year: "1984" },
        { title: "Patriot Games", author: "Tom Clancy", year: "1987" },
        {
            title: "The Day of the Jackal",
            author: "Frederick Forsyth",
            year: "1971",
        },
        { title: "The Eagle Has Landed", author: "Jack Higgins", year: "1975" },
        { title: "Rosemary's Baby", author: "Ira Levin", year: "1967" },
        { title: "The Stepford Wives", author: "Ira Levin", year: "1972" },
        { title: "The Andromeda Strain", author: "Michael Crichton", year: "1969" },
        { title: "Jurassic Park", author: "Michael Crichton", year: "1990" },
        { title: "The Alienist", author: "Caleb Carr", year: "1994" },
        {
            title: "The Devil in the White City",
            author: "Erik Larson",
            year: "2003",
        },
        { title: "The Poison Tree", author: "Erin Kelly", year: "2010" },
        { title: "The Devil Crept In", author: "Ania Ahlborn", year: "2017" },
        { title: "The Fisherman", author: "John Langan", year: "2016" },
        { title: "The Ritual", author: "Adam Nevill", year: "2011" },
        { title: "The Hunger", author: "Alma Katsu", year: "2018" },
        { title: "The Devil's Star", author: "Jo Nesbo", year: "2003" },
        { title: "The Snowman", author: "Jo Nesbo", year: "2007" },
        { title: "The Girl on the Train", author: "Paula Hawkins", year: "2015" },
        { title: "The Woman in Black", author: "Susan Hill", year: "1983" },
        {
            title: "The Haunting of Hill House",
            author: "Shirley Jackson",
            year: "1959",
        },
        { title: "The Turn of the Screw", author: "Henry James", year: "1898" },
        {
            title: "The Shadow of the Wind",
            author: "Carlos Ruiz Zafón",
            year: "2001",
        },
        { title: "The City & The City", author: "China Miéville", year: "2009" },
        { title: "The Three-Body Problem", author: "Liu Cixin", year: "2008" },
        {
            title: "The First Fifteen Lives of Harry August",
            author: "Claire North",
            year: "2014",
        },
        { title: "The City of Z", author: "David Grann", year: "2009" },
        { title: "The Devil's Teardrop", author: "Jeffery Deaver", year: "1999" },
        { title: "The Coffin Dancer", author: "Jeffery Deaver", year: "1998" },
        { title: "The Bone Tree", author: "Greg Iles", year: "2015" },
        { title: "The Natchez Burning", author: "Greg Iles", year: "2014" },
        {
            title: "The 7 1/2 Deaths of Evelyn Hardcastle",
            author: "Stuart Turton",
            year: "2018",
        },
        { title: "The Last Time I Lied", author: "Riley Sager", year: "2018" },
        { title: "The Witch Elm", author: "Tana French", year: "2018" },
        { title: "The 17th Suspect", author: "James Patterson", year: "2018" },
        {
            title: "The President is Missing",
            author: "Bill Clinton and James Patterson",
            year: "2018",
        },
        { title: "The Silent Patient", author: "Alex Michaelides", year: "2019" },
        { title: "Rebecca", author: "Daphne du Maurier", year: "1938" },
        { title: "The Big Sleep", author: "Raymond Chandler", year: "1939" },
        {
            title: "The Talented Mr. Ripley",
            author: "Patricia Highsmith",
            year: "1955",
        },
        {
            title: "The Spy Who Came in from the Cold",
            author: "John le Carré",
            year: "1963",
        },
        { title: "The Little Drummer Girl", author: "John le Carré", year: "1983" },
        { title: "The Handmaid's Tale", author: "Margaret Atwood", year: "1985" },
        { title: "The Client", author: "John Grisham", year: "1992" },
        { title: "The Pelican Brief", author: "John Grisham", year: "1992" },
        { title: "The Sum of All Fears", author: "Tom Clancy", year: "1991" },
        { title: "The Beach House", author: "James Patterson", year: "2002" },
        { title: "The Historian", author: "Elizabeth Kostova", year: "2005" },
        { title: "The Thirteenth Tale", author: "Diane Setterfield", year: "2006" },
        {
            title: "The Guernsey Literary and Potato Peel Pie Society",
            author: "Mary Ann Shaffer",
            year: "2008",
        },
        { title: "The Night Circus", author: "Erin Morgenstern", year: "2011" },
        { title: "The 5th Wave", author: "Rick Yancey", year: "2013" },
        { title: "The Cuckoo's Calling", author: "Robert Galbraith", year: "2013" },
        { title: "The Kind Worth Killing", author: "Peter Swanson", year: "2015" },
        { title: "The Couple Next Door", author: "Shari Lapena", year: "2016" },
        { title: "The Last Mrs. Parrish", author: "Liv Constantine", year: "2017" },
        { title: "The 8th Circle", author: "Sarah Cain", year: "2018" },
        { title: "Before I Go to Sleep", author: "S.J. Watson", year: "2011" },
        { title: "Behind Closed Doors", author: "B.A. Paris", year: "2016" },
        { title: "The Book of Two Ways", author: "Jodi Picoult", year: "2020" },
        { title: "Bring Me Back", author: "B.A. Paris", year: "2018" },
        { title: "Dark Places", author: "Gillian Flynn", year: "2009" },
        { title: "Dark Matter", author: "Blake Crouch", year: "2016" },
        { title: "The Dry", author: "Jane Harper", year: "2016" },
        { title: "The Firm", author: "John Grisham", year: "1991" },
        { title: "The Good Girl", author: "Mary Kubica", year: "2014" },
        { title: "In a Dark, Dark Wood", author: "Ruth Ware", year: "2015" },
        { title: "Into the Water", author: "Paula Hawkins", year: "2017" },
        { title: "The Last House Guest", author: "Megan Miranda", year: "2019" },
        {
            title: "The Last Time She Saw Him",
            author: "Jane Haseldine",
            year: "2017",
        },
        { title: "The Lying Game", author: "Ruth Ware", year: "2017" },
        { title: "A Minute to Midnight", author: "David Baldacci", year: "2019" },
        { title: "The Never Game", author: "Jeffrey Deaver", year: "2019" },
        { title: "The Never List", author: "Koethi Zan", year: "2013" },
        { title: "One by One", author: "Ruth Ware", year: "2020" },
        { title: "Our House", author: "Louise Candlish", year: "2018" },
        { title: "The Passenger", author: "Lisa Lutz", year: "2016" },
        { title: "The Perfect Girlfriend", author: "Karen Hamilton", year: "2018" },
        { title: "Pretty Girls", author: "Karin Slaughter", year: "2015" },
        { title: "The Quiet Girl", author: "S.F. Henson", year: "2022" },
        {
            title: "Something in the Water",
            author: "Catherine Steadman",
            year: "2018",
        },
        { title: "The Stranger", author: "Harlan Coben", year: "2015" },
        { title: "Then She Was Gone", author: "Lisa Jewell", year: "2017" },
        {
            title: "The Wife Between Us",
            author: "Greer Hendricks and Sarah Pekkanen",
            year: "2018",
        },
        { title: "The Widows", author: "Jess Montgomery", year: "2019" },
        { title: "The Woman in Cabin 10", author: "Ruth Ware", year: "2016" },
        {
            title: "You Should Have Known",
            author: "Jean Hanff Korelitz",
            year: "2014",
        },
    ],
};
export default thrillers;
