import './News.css'

function News() {
  return (
    <div className="news-grid">
      <div className="news-card">
        <h3>Prospective Migrants</h3>
        <p>Information sessions and workshops to help you prepare before arriving.</p>
      </div>
      <div className="news-card">
        <h3>Current Migrants</h3>
        <p>We offer advices about your rights and help you settle in</p>
      </div>
      <div className="news-card">
        <h3>Community Events</h3>
        <p>Our voluteers are here to help you learn new skills and making meaning connections</p>
      </div>
    </div>
  );
}

export default News;
