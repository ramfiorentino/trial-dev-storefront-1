import button1 from '../../public/custom-buttons/button-lafat1.png';
import button2 from '../../public/custom-buttons/button-lafat3.png';
import button3 from '../../public/custom-buttons/button-lafat2.png';

export default function WelcomeSection() {
  return (
    <>
      <div className="welcome-section-btn-container">
        <button className="custom-button-wb1 custombtn-anim">
          <a href="https://lafatchile.myshopify.com">
            <img src={button1} />
          </a>
        </button>
        <button className="custom-button-wb2 custombtn-anim">
        <a href="https://lafatbordieu.myshopify.com/collections/e-books">
          <img src={button2} />
          </a>
        </button>
        <button className="custom-button-wb3 custombtn-anim">
        <a href="https://lafatbordieu.myshopify.com">
          <img src={button3} />
          </a>
        </button>
      </div>

      <div className="welcome-section-animation">
        <img src="libro-welcome-1.gif" className="welcome-img" />
      </div>
    </>
  );
}
