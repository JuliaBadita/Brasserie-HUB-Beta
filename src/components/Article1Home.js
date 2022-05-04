import React from 'react'
import HUB from '../assets/HUB-Brasserie.jpg'
import ButtonAbout from './ButtonAbout'
import './ButtonYellow.css'

const Article1Home = () => {
  return (
    <div>
      <img src={HUB} alt="" className="h-[40%] w-[40%]" />
      <article className="p-9 bg-[#B79692] m-auto w-6/12">
        <p className="text-justify text-[1.4rem] mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quae
          doloremque quasi quas quaerat fugit voluptatem hic, aliquam animi ex
          sed ipsum voluptates facilis ad esse ducimus deleniti, possimus autem
          voluptatum molestiae laborum. Esse molestiae aut aperiam sit
          explicabo, sunt veritatis cumque, dignissimos consequatur earum minus
          animi corporis illum pariatur natus iusto ad id eos iure consectetur
          aliquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ipsa, earum?
          <br />
          <br />
          Quod facere asperiores velit inventore beatae dicta praesentium odio
          dolor unde tempore ea eligendi commodi numquam quo reprehenderit
          ducimus a quidem sit dolorum dolorem aperiam, provident non totam cum?
          Deleniti corporis odio consectetur fuga reprehenderit nam esse,
          similique illo. Assumenda, eligendi saepe. Impedit eum ea nostrum id?
          Obcaecati, ad deleniti? Cupiditate ad iure aliquid necessitatibus sint
          voluptas ab? Odio distinctio facere tempora. Fugit, voluptatem
          exercitationem consectetur harum corporis reprehenderit! Aliquid,
          ipsam. Commodi quam praesentium quia quos nisi cumque quisquam id
          ullam, quidem aspernatur? Vel voluptate impedit amet iusto, pariatur
          maiores fugiat ex!
        </p>
        <div className="flex justify-center">
          <ButtonAbout />
        </div>
      </article>
    </div>
  )
}

export default Article1Home
