import img1 from '../../public/portfolio/img-pf1.png';
import img2 from '../../public/portfolio/img-pf2.png';
import img3 from '../../public/portfolio/img-pf3.png';
import img4 from '../../public/portfolio/img-pf4.png';
import img5 from '../../public/portfolio/img-pf5.png';
import img6 from '../../public/portfolio/img-pf6.png';
import img7 from '../../public/portfolio/img-pf7.png';
import img8 from '../../public/portfolio/img-pf8.png';

export default function Portfolio() {
  const portfolioData = [
    {
      id: 1,
      name: 'Project 1',
      url: 'https://example.com/project1',
      image: img1,
    },
    {
      id: 2,
      name: 'Project 2',
      url: 'https://example.com/project1',
      image: img2,
    },
    {
      id: 3,
      name: 'Project 3',
      url: 'https://example.com/project1',
      image: img3,
    },
    {
      id: 4,
      name: 'Project 4',
      url: 'https://example.com/project1',
      image: img4,
    },
    {
      id: 5,
      name: 'Project 5',
      url: 'https://example.com/project1',
      image: img5,
    },
    {
      id: 6,
      name: 'Project 6',
      url: 'https://example.com/project1',
      image: img6,
    },
    {
      id: 7,
      name: 'Project 7',
      url: 'https://example.com/project1',
      image: img7,
    },
    {
      id: 8,
      name: 'Project 8',
      url: 'https://example.com/project1',
      image: img8,
    },
  ];

  return (
    <>
      <div class="container-animation-portfolio">
        <div class="horizontal-scrolling-items">
          <div class="horizontal-scrolling-items__item">
          * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO
          * PORTFOLIO * PORTFOLIO
          </div>

          <div class="horizontal-scrolling-items__item">
          * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO
          * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO
          * PORTFOLIO * PORTFOLIO
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div class="columns">
          <div class="column column-reverse">
            {portfolioData.map((item) =>
              item.id <= 4 ? (
                <div key={item.id} className="port-img-div">
                  <img
                    src={item.image}
                    alt={`Project ${item.id}`}
                    className="portfolio-img"
                  />
                </div>
              ) : null,
            )}
          </div>
          <div class="column">
            {portfolioData.map((item) =>
              item.id > 4 ? (
                <div key={item.id} className="port-img-div">
                  <img
                    src={item.image}
                    alt={`Project ${item.id}`}
                    className="portfolio-img"
                  />
                </div>
              ) : null,
            )}
          </div>
          <div class="column column-reverse">
            {portfolioData.map((item) =>
              item.id <= 4 ? (
                <div key={item.id} className="port-img-div">
                  <img
                    src={item.image}
                    alt={`Project ${item.id}`}
                    className="portfolio-img"
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
      <div class="container-animation-portfolio">
        <div class="horizontal-scrolling-items">
          <div class="horizontal-scrolling-items__item">
          * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO
          * PORTFOLIO * PORTFOLIO
          </div>

          <div class="horizontal-scrolling-items__item">
          * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO
          * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO * PORTFOLIO
          * PORTFOLIO * PORTFOLIO
          </div>
        </div>
      </div>
    </>
  );
}
