import React, { useState } from "react";

function BookRecommendations() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const bookRecs = {
    "Science Fiction": {
      icon: "planet-outline",
      books: [
        "11/22/63",
        "Foundation Isaac Asimov",
        "Children of Time",
        "Artemis",
        "Hitchhiker's Guide to the Galaxy",
        "Dune",
        "Do Androids Dream of Electric Sheep",
        "Sirens of Titan",
      ],
    },
    "Fantasy": {
      icon: "color-wand-outline",
      books: [
        "The Lies of Locke Lamora",
        "Name of the Wind",
        "The Blade Itself",
        "Circe Madeline Miller",
      ],
    },
    "Drama": {
      icon: "thunderstorm-outline",
      books: [
        "Yellowface",
        "11/22/63 Stephen King",
        "Blood Meridian",
        "Station Eleven",
        "Educated",
        "Tomorrow, and Tomorrow, and Tomorrow",
      ],
    },
    "Dystopian": {
      icon: "bonfire-outline",
      books: [
        "The Stand",
        "The Road",
        "Station Eleven",
      ],
    },
    "Non-Fiction": {
      icon: "book-outline",
      books: [
        "Kitchen Confidential",
        "Educated",
        "Crying in the H Mart",
        "Uncanny Valley Anna Wiener",
      ],
    },
  };
  

  const fetchBooks = async (bookTitles) => {
    try {
      console.log("bookTitle", bookTitles)
      const promises = bookTitles.books.map((title) =>
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}&key=${apiKey}`
        ).then((response) => response.json())
      );

      const results = await Promise.all(promises);

      const booksData = results.map((result) =>
        result.items && result.items.length > 0 ? {
          title: result.items[0].volumeInfo.title,
          authors: result.items[0].volumeInfo.authors || ["Unknown Author"],
          description: result.items[0].volumeInfo.description || "No description available.",
          thumbnail: result.items[0].volumeInfo.imageLinks?.thumbnail || "../../public/images/no-book-cover.gif",
        } : null
      );

      setBooks(booksData.filter((book) => book !== null));
    } catch (err) {
      console.error(err);
      setError("Failed to fetch book data.");
    }
  };

  const handleGenreClick = (genre) => {
    console.log("handle click", genre);
    setSelectedGenre(genre);
    fetchBooks(bookRecs[genre]);
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };  

  const closeModal = () => {
    setSelectedBook(null);
  };  

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-container">
      <div className="hero book-hero">
        <div className="">
          <h1 className="text-2xl pt-35 pb-5 pink cyber-glow:glowPulse font-bold">Book Recommendations</h1>
        </div>
        <div className="genres">
        {Object.keys(bookRecs).map((genre) => (
          <button
            key={genre}
            className="cyber-btn btn"
            onClick={() => handleGenreClick(genre)}
          >
            <ion-icon name={bookRecs[genre].icon} style={{ marginRight: "8px" }}></ion-icon>
            {genre}
          </button>
        ))}
        </div>
      </div>
      <div className="p-8 md">
        {selectedGenre && (<h2 className="text-lg font-semibold mt-4">{selectedGenre}</h2>)}
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {books.map((book, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-4 border rounded shadow-sm cyber-pink cyber-border pulse-border">
              <div className="flex flex-wrap justify-center">
                {book.thumbnail && (
                  <img
                    src={book.thumbnail}
                    alt={`${book.title} cover`}
                    className="mt-2 h-auto object-cover rounded book-img"
                  />
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                By: {book.authors.join(", ")}
              </p>
              <button className="btn btn-primary mt-2" onClick={() => openModal(book)}>Description</button>
              {/* <p className="text-base mb-4">{book.description}</p> */}
            </div>
          ))}
        </div>
      </div>
      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 lg:p-60 m:p-20" onClick={closeModal}>
          <div className="p-8 shadow-lg" onClick={(e) => e.stopPropagation()} >
            <h2 className="text-xl font-bold mb-4">{selectedBook.title}</h2>
            <p className="text-base mb-4">{selectedBook.description}</p>
            <button className="btn btn-secondary" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}      
    </div>
  );
}

export default BookRecommendations;
