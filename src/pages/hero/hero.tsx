/* eslint-disable jsx-a11y/alt-text */
import Navbar from '../../components/navbar/navbar';
import { SvgAbout, SvgHero } from '../../iconComponents';
import SvgIcon from '../../iconComponents/SvgIcon';
import { HeroSection, Container, Slogan, Button, HeroIcon, ContainerButtons, AboutSection, TitleAboutSection, AboutContainer, AboutIcon, AboutSummary } from './hero.styles';
const Hero = {
    Route: '',

    Page: function hero() {
        return (
            <>
                <Navbar/>
                <HeroSection>
                    <Container>
                        <Slogan>
                            Smarter features made for your business
                        </Slogan>
                        <ContainerButtons>
                            <a href='/login'><Button>Get Started</Button></a>
                            <Button style={{ margin: '0px 20px' }}>Features</Button>
                        </ContainerButtons>
                    </Container>
                    <HeroIcon><SvgHero/></HeroIcon>
                </HeroSection>

                <AboutSection>
                    <TitleAboutSection>About This Website</TitleAboutSection>
                    <AboutContainer>
                        <AboutIcon><SvgAbout/></AboutIcon>
                        <AboutSummary>This website is designed to help you analyze all your financial needs. It offers many features for keeping track of your income and expenses, helps pay your employees and contractors, and displays all finincial information neatly on a dashboard.</AboutSummary>
                    </AboutContainer>
                </AboutSection>
            </>
        );
    } 
}



export default Hero;



//slogan with getting started page

// what this website is about

// tools included

// testimonials

// footer

