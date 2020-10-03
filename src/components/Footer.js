import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div>
          @2020{' '}
          <a
            href='https://upstox.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Upstox
          </a>
        </div>
        <ul>
          <li>
            <a
              href='https://upstox.com/about/'
              target='_blank'
              rel='noopener noreferrer'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='https://upstox.com/sub-broker/?otp=true'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href='https://upstox.com/press-releases/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
