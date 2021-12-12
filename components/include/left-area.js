import Link from 'next/link'

function LeftArea() {
    return (
        <div className="left-area d-none d-md-block">
            <div className="profile-area">
                <div className="head">
                    <img src="/images/profile.png" />
                </div>
                <div className="detail">
                    <div className="fullname">LAN BIRAAAK</div>
                    <div className="nickname">@lanbiraaakcom</div>
                </div>
            </div>
            <div className="github-area">
                <div className="head">
                    <Link href="https://github.com/">
                        <a target="_blank">GitHub Profilimiz</a>
                    </Link>
                </div>
                <div className="image">
                    <Link href="https://github.com/">
                        <a target="_blank">
                            <img src="/images/github.png" className="img-fluid w-100" />
                        </a>
                    </Link>
                </div>
                <div className="text">
                    Pitimiti startup'ı olarak bu proje ve bundan sonra olacak tüm projelerimizi açık kaynak olarak GitHub
                    hesabımızdan takip edebilirsiniz.
                </div>
            </div>
        </div>
    )
}

export default LeftArea
