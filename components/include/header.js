import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Pages } from '../../constants'
import parse from 'html-react-parser'

function Header() {
    const router = useRouter()
    return (
        <header>
            <div className="container header-container">
                <div className="logo">
                    <Link href="/">
                        <a>
                            <img src="/images/logo.png" />
                        </a>
                    </Link>
                </div>
                <nav className="menu">
                    {Pages.map((page, i) => (
                        <Link href={page.sourcePath} key={i}>
                            <a className={router.pathname == page.destinationPath ? 'active' : ''}>{parse(page.icon)}</a>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
