import React from 'react'
import styles from './style.module.css'

const LoadingComponent = () => {
  return (
    <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0_0_0/0.3)] flex justify-center items-center '>
        <div className={styles.ldsRipple}>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default LoadingComponent