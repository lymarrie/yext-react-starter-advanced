import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import Banner from '../components/banner';
import Contact from '../components/contact';
import Information from '../components/information';
import Insurances from '../components/insurances';
import Footer from '../components/footer';
import Header from '../components/header';
import Doctors from '../components/doctors';
import Hours from '../components/hours';
import About from '../components/about';
import PhotoGallery from '../components/photo-gallery';
import { SchemaWrapper } from '../components/schema/jsonld';
import StaticMap from '../components/static-map';
import '../index.css';
import { reactWrapper } from '../wrapper';

export const config = {
  name: 'services',
  hydrate: true,
  streamId: 'services',
  stream: {
    $id: 'services',
    source: 'knowledgeGraph',
    destination: 'pages',
    fields: [
      'id',
      'uid',
      'meta',
      'name',
      'description',
      'slug',
      'c_legalApproved',
    ],
    filter: {
      savedFilterIds: [
        '935268770'
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

const Services = ({ data }: { data: any }) => {
  const { streamOutput } = data.document;
  const {
    _site,
    name,
    description,
    slug,
    c_legalApproved,
  } = streamOutput;

  return (
    <>
      <body className="font-main">
          <div className="centered-container">
          </div>
        <Footer footer={_site.c_footer}></Footer>
      </body>
    </>
  );
};

export const render = (data: any) =>
  reactWrapper(data, 'index', 'index.tsx', renderToString(<Services data={data} />), config.hydrate, SchemaWrapper(data), data.document.streamOutput.name, "Meta description", data.document.streamOutput.photoGallery[0].image.url);

export default Services;
