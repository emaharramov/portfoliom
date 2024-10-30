import { SocialIcon } from "react-social-icons";

export default function Home() {
  
  return (
    <div className="container">
        <div className="spin">
          <h1>Our Page is Under Construction</h1>
          <p>Please check back soon!</p>
          <div className="flex justify-center items-center gap-x-3">
            <SocialIcon url="https://linkedin.com/in/emilmaharramov" />
            <SocialIcon network="whatsapp" href="https://wa.me/994502070180"  />
            <SocialIcon network="instagram" href="https://instagram.com/emilmaharramovv" />
          </div>
        </div>
      </div>
  );
}
