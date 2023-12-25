import button1 from '../../public/custom-buttons/button-lafat1.png';
import button2 from '../../public/custom-buttons/button-lafat3.png';
import button3 from '../../public/custom-buttons/button-lafat2.png';


export default function WelcomeSection() {

    return(
        <>
            <div id='welcome-section'>
            <button className='custom-button wb1'><img src={button1}/></button>
            <button className='custom-button wb2'><img src={button2}/></button>
            <button className='custom-button wb3'><img src={button3}/></button>
            </div>
 
            <div className="welcome-section-div">
                <img src='libro-welcome-1.gif' className="welcome-img" />
            </div>
        </>


    )

}