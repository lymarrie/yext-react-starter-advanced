import Cta from './cta';

const Doctors = (props: any) => {
    const { doctors } = props;
    const doctorDivs = doctors.map((doc:any) => (
        <div className="grid gap-y-10 p-8 rounded-xl drop-shadow-lg">
            <div>
                <img className="rounded-full" src={doc.headshot.url}></img>
            </div>
            <h3 className="text-2xl font-semibold text-center">{doc.name}</h3>
        </div>
      ));


      return (
          <>
            <div className="section flex flex-col space-y-10">
                <h2 className="text-4xl">Meet the Doctors</h2>
                <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 px-4">
                    {doctorDivs}
                </div>
            </div>
          </>
        );
      };
  
  export default Doctors;