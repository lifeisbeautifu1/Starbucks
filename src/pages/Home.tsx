import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

import { Header, Footer, Heading, Featured, Info } from '../components';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div>
        <Fade>
          <div className="bg-[#d4e9e2] text-center p-8 mb-5">
            <h4
              className="text-[#1e3932] font-semibold
             md:text-lg max-w-[430px] md:max-w-[650px] mx-auto leading-[1.6]"
            >
              We're working hard to put the healt and well-being of our partners
              and customers first in all that we do.{' '}
              <Link
                to="/"
                className="text-[#1e3932] underline hover:no-underline"
              >
                Learn More
              </Link>
            </h4>
          </div>
        </Fade>
        <Fade>
          <div
            className="py-[30px] px-5  md:pl-[80px] md:pr-5 flex flex-col-reverse sm:flex-row  flex-wrap
          gap-[60px] items-start sm:items-center justify-center bg-[#d4e9e2]"
          >
            <div className="mx-auto max-w-[360px] sm:max-w-[300px] md:max-w-full flex text-center flex-col gap-[30px]">
              <h4
                className="text-[#1e3932] text-[25px]
              font-semibold leading-[1.6]"
              >
                Investing in our communities
              </h4>
              <p
                className="text-[#1e3932] font-semibold
              leading-[1.7] text-[19px] max-w-[450px]"
              >
                The Starbucks Foundation awarded grants to over 400 nonprofits
                serving communities of color. Recipients were nominated by
                Starbucks partners (employees).
              </p>
              <Link
                to="/"
                className="inline-block mx-auto
              border border-black rounded-[50px] py-[7px] px-4
              leading-[1.2] text-center transition duration-200
              text-[#1e3932] font-semibold hover:bg-[rgb(30,57,50)]/[.1]"
              >
                Learn more
              </Link>
            </div>
            <div className="mx-auto">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
                alt="thumbnail"
                className="w-full max-w-[470px]  xl:max-w-[650px] object-contain"
              />
            </div>
          </div>
        </Fade>
        <Fade>
          <Heading heading="TODAY IS YOURS" />
        </Fade>
        <div className="flex flex-col md:flex-row gap-[25px]">
          <Fade>
            <Featured
              title="NICELY NODAIRY"
              info="Say yes to sips of delight
            with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew"
              link="Explore the honey drinks"
              path="/"
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
              background="#f0ebe0"
              color="#1e3932"
            />
          </Fade>
          <Fade>
            <Featured
              title="PISTACHIOOOOOOO"
              info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
              link="Try the new pistachio drinks"
              path=""
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
              order="2"
              background="#f0ebe0"
              color="#1e3932"
            />
          </Fade>
        </div>
        <Fade>
          <Heading heading="MORE TO DISCOVER" />
        </Fade>
        <Fade>
          <div className="homeScreen__discover">
            <Info
              title="Order and pick up. Easy as that."
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
              info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
              link="See pickup options"
              color="#1e3932"
              background="#d4e9e4"
            />
            <Info
              title="Coffee delivered. Day made."
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
              info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
              link="Order now"
              color="#1e3932"
              background="#d4e9e4"
            />
          </div>
        </Fade>
      </div>
      <Fade>
        <Footer />
      </Fade>
    </div>
  );
};

export default Home;
