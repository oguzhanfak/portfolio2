import Image from 'next/image'

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} width="310" height="420" className='ml-20 -my-3' priority alt="" />
    </div>
  )
}

export default DevImg