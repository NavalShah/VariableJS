import React from 'react'
import styles, {layout} from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () =>(
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better way to <br className='sm:block hidden'/>make a website in a few steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident excepturi exercitationem iusto officia quisquam aliquid fugit totam corrupti ratione? Ipsam tempore fugit sint maiores voluptatum perspiciatis, aperiam mollitia velit!
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-100% h-100%'/>
    </div>
    
  </section>
  )


export default CardDeal