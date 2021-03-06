import Cta from '../components/cta';

type Link = {
  label: string;
  uRL: string;
};

type Image = {
  url: string;
}

type Logo = {
  height?: number;
  width?: number;
  image: Image;
}

type Header = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  logo: Logo;
  address: Address;
}

export type Address = {
  line1: string;
  line2: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};


const Header = (props: Header) => {
  const { name, primaryColor, secondaryColor, logo, address } = props;
  return (
    <>
      <div style={{ background: primaryColor ? primaryColor: '#000000' }}>
        <div className="centered-container">
          <nav className="py-6 flex items-center justify-between text-white">
            <div className="flex items-center space-x-5">
              <img src={logo.image.url} width="120" height="120"></img>
              <a href="">About Your Dentist</a>
              <a href="">Payment Options</a>
              <a href="">New Patients</a>
            </div>
            <div>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.city}, {address.region}</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
