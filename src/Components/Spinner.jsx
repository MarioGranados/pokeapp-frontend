import './Spinner.css'
const Spinner = () => {
  return <div className='d-flex justify-content-center mx-5'>
    <div className="">
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>;
};
export default Spinner;
