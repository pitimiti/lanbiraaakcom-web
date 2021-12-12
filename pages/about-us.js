import Link from 'next/link'
import React from 'react'
import DefaultLayout from '../components/layouts/default'

function AboutUs() {
    return (
        <DefaultLayout>
            <div className="container detail-page">
                <h1>HAKKIMIZDA</h1>
                <p>
                    Hakkımızda alanı çok sade tutmak istedik. Ondan dolayı bu girişimimiz hakkında söyleyeceğimiz satırlar çok
                    kısadır :) <br />
                    Bu platformda twitter, instagram, facebook, internet siteleri ve e-posta bültenlerinde gördüğümüz
                    açıklamaları, haberleri paylaşıyoruz. Sonrasında hep beraber bu içeriklerin samimiyetini ölçüyoruz. Samimi
                    olmadığını düşündüğümüz içeriklere "LAN BIRAAAK" butonuna basarak oyluyoruz ve sonuçları inceliyoruz.
                </p>
                <p>
                    Görüş, öneri ya da iş birliği için{' '}
                    <Link href="mailto:info@pitimiti.com">
                        <a className="text-primary">info@pitimiti.com</a>
                    </Link>{' '}
                    email adresi üzerinden bizimle iletişime geçebilirsin.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default AboutUs
