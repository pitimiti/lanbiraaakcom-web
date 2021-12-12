import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                <div className="copyright">©2021 pitimiti.com tarafından</div>
                <div className="social">
                    <Link href="https://www.instagram.com/lanbiraaakcom/">
                        <a target="_blank">
                            <i className="lab la-instagram"></i>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/lanbiraaakcom">
                        <a target="_blank">
                            <i className="lab la-twitter"></i>
                        </a>
                    </Link>
                    <Link href="https://github.com/">
                        <a target="_blank">
                            <i className="lab la-github"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
