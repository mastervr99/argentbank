import './home.scss';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import chat from '../../assets/images/icon-chat.png';
import money from '../../assets/images/icon-money.png';
import security from '../../assets/images/icon-security.png';
import Footer from '../../layout/footer/footer';


function Home() {

    const first_card_text = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    const second_card_text = "The more you save with us, the higher your interest rate will be!"
    const third_card_text = "We use top of the line encryption to make sure your data and money is always safe."

    return <div className='home'>
                <Banner/>
                <div className='cards-list'>
                    <Card title='You are our #1 priority' image={chat} text={first_card_text}/>
                    <Card title='More savings means higher rates' image={money} text={second_card_text}/>
                    <Card title='Security you can trust' image={security} text={third_card_text}/>  
                </div>
                <Footer paddingBottom="60px" />
           </div>
}

export default Home