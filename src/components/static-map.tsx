type Coordinates = {
  latitude: string;
  longitude: string;
};

const StaticMap = (props: Coordinates) => {
  const { latitude, longitude } = props;

  return (
    <>
      <div className="section flex flex-col gap-y-10">
        <h2 className="text-4xl">Get Directions to the Office</h2>
      </div>
      <div className="pb-3">
        <div className="flex items-center justify-center">
          <img
            className="w-11/12 rounded-xl drop-shadow-md sm:w-3/4 pb-12"
            width="300"
            height="200"
            src={
              'https://maps.googleapis.com/maps/api/staticmap?center=' +
              `${latitude}` +
              ',' +
              `${longitude}` +
              '&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C' +
              `${latitude}` +
              ',' +
              `${longitude}` +
              '&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18'
            }
          ></img>
        </div>
      </div>
    </>
  );
};

export default StaticMap;
