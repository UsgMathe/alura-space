import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'
export default function Footer() {
  return (
    <div 
      className="fixed bottom-0 w-full flex justify-between items-center px-6 h-14 text-text bg-footerBlue" 
      style={{
        boxShadow: '0px -2px 30px rgba($color: #000000, $alpha: 0.5)',
        boxSizing: 'border-box'
      }}
    >
      <div className='flex gap-3 items-center justify-center [&>a]:cursor-pointer'>
        <a href="">
          <BsFacebook/>
        </a>
        <a href="">
          <BsTwitter/>
        </a>
        <a href="">
          <BsInstagram/>
        </a>
      </div>
      <p className='text-xs'>Desenvolvido por UsgMathe</p>
    </div>
  )
}
