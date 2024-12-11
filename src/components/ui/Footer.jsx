import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-3" style= {{ backgroundColor: '#6050DC', color: 'white'}}>
        <div className="container text-center">
           <div className="mb-2">
                <a href="#" className="text-white text-decoration-none mx-2">Home</a>
                <a href="#" className="text-white text-decoration-none mx-2">About</a>
                <a href="#" className="text-white text-decoration-none mx-2">Shop</a>
                <a href="#" className="text-white text-decoration-none mx-2">Contact</a>
           </div>
           <div className="mb-2">
                <a href="#" className="text-white mx-2"><FaFacebook /></a>
                <a href="#" className="text-white mx-2"><FaTwitter /></a>
                <a href="#" className="text-white mx-2"><FaInstagram /></a>
           </div>
           <p className="small mb-0">&copy; 2024 ShopNow</p>
        </div>
    </footer>
  )
}

export default Footer