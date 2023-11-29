import Navbar from "../../componets/Navbar";

function Home() {
  return (
    <div className="bg-gray-200 h-screen w-full">
      <Navbar />
      
      <div className="absolute">
        <img src="/images/thankyou.png" alt="Thank you image" />
      </div>
      <h1>We are Here For you</h1>
    </div>
  );
}

export default Home;
