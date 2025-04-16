import './News.css'

function News() {
  return (
    <div>

      <div className="home-grid">
        <div className="home-card">
          <h3>Employment</h3>
          <p>Information sessions and workshops to help you prepare for your next job.</p>
        </div>
        <div className="home-card">
          <h3>Education</h3>
          <p>We offer lessons and seminars to impart the knowledge that you need.</p>
        </div>
        <div className="home-card">
          <h3>Business</h3>
          <p>Our voluteers are here to help you jumpstart your endevour and making meaningful connections.</p>
        </div>
        <div className="home-card">
          <h3>Healthcare</h3>
          <p>We offer advices about your rights and responsiblity to personal care.</p>
        </div>
        <div className="home-card">
          <h3>Family</h3>
          <p>We are willing to listen and give you the timely help you needed.</p>
        </div>
      </div>

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

    </div>
  );
}

export default News;
