import postImg from '../assets/post-img.png';

function NewsCards() {
  const newsItems = [
    {
      id: 1,
      image: postImg,
      title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
      excerpt: 'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
    },
    {
      id: 2,
      image: postImg,
      title: '2019 NATIONAL CHAMPIONS',
      excerpt: 'Membership has its perks.',
    },
    {
      id: 3,
      image: postImg,
      title: '2019 NATIONAL CHAMPIONS CROWNED AT REEBOK',
      excerpt: 'Membership has its perks. Joining ADIDAS means you can race at your local tracks',
    },
  ];

  return (
    <section className="news-cards-section">
      <div className="news-cards-grid">
        {newsItems.map((item) => (
          <article key={item.id} className="news-card">
            <div className="news-card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-card-content">
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsCards;
