import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem perferendis ducimus est rem harum dignissimos ipsum velit, magnam voluptas quisquam voluptate. Dignissimos soluta eum quam sapiente accusantium odio ipsam, pariatur quidem vel quae in, similique nostrum sit, eligendi ratione.</p>
                <Button text="Login" class='btn-outline-warning'/>
            </div>
        </div>
    </>
  )
}

export default Main