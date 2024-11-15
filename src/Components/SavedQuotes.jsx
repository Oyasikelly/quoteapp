/** @format */

function SavedQuotes({ selectedQuote }) {
  return (
    <div>
      <h1>Saved Quote</h1>
      <div>
        <p>{selectedQuote}</p>
        {/* <span>{selectedQuote.author}</span> */}
      </div>
    </div>
  );
}

export default SavedQuotes;
