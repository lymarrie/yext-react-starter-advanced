import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import Banner from '../components/banner';
import Contact from '../components/contact';
import Information from '../components/information';
import Footer from '../components/footer';
import Header from '../components/header';
import Doctors from '../components/doctors';
import Services from '../components/services';
import Hours from '../components/hours';
import About from '../components/about';
import PhotoGallery from '../components/photo-gallery';
import { SchemaWrapper } from '../components/schema/jsonld';
import StaticMap from '../components/static-map';
import '../index.css';
import { reactWrapper } from '../wrapper';

export const config = {
  name: 'index',
  hydrate: true,
  streamId: 'facilities',
  stream: {
    $id: 'facilities',
    source: 'knowledgeGraph',
    destination: 'pages',
    fields: [
      'id',
      'uid',
      'meta',
      'name',
      'address',
      'hours',
      'mainPhone',
      'geocodedCoordinate',
      'logo',
      'photoGallery',
      'c_primaryColor',
      'c_secondaryColor',
      'websiteUrl',
      'c_featuredServices.name',
      'c_featuredServices.description',
      'c_featuredServices.slug',
      'c_meetTheDoctors.name',
      'c_meetTheDoctors.headshot',
    ],
    filter: {
      savedFilterIds: [
        '933983808'
      ],
    },
    localization: {
      locales: ['en'],
      primary: false,
    },
  },
};

export const getPath = (data: any) => {
  return `index/${data.document.streamOutput.uid.toString()}`;
};

const Index = ({ data }: { data: any }) => {
  const { streamOutput } = data.document;
  const {
    _site,
    name,
    address,
    description,
    hours,
    mainPhone,
    geocodedCoordinate,
    logo,
    photoGallery,
    c_primaryColor,
    c_secondaryColor,
    websiteUrl,
    c_featuredServices,
    c_meetTheDoctors
  } = streamOutput;

  return (
    <>
      <body className="font-main">
        <Header name={name} primaryColor={c_primaryColor} secondaryColor={c_secondaryColor} logo={logo} address={address}></Header>
        <Banner name={name} secondaryColor="blue" photo={photoGallery[0].image.url} mainPhone={mainPhone}></Banner>
          <div className="centered-container">
            <Services name={name} services={c_featuredServices}></Services>
            <Doctors doctors={c_meetTheDoctors}></Doctors>
            <StaticMap latitude={geocodedCoordinate.latitude} longitude={geocodedCoordinate.longitude}></StaticMap>
          </div>
        <Footer footer={_site.c_footer}></Footer>
      </body>
    </>
  );
};

export const render = (data: any) =>
  reactWrapper(data, 'index', 'index.tsx', renderToString(<Index data={data} />), config.hydrate, SchemaWrapper(data), data.document.streamOutput.name, "Meta description", data.document.streamOutput.photoGallery[0].image.url);

export default Index;
