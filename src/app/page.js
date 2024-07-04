import Link from 'next/link';
import React from 'react';

const HomePage = () => {

    return (
        <div>
            <h1 className='text-green-400 text-2xl'>My Very First Next.js App</h1>

            <div className='navbar'>

                <ul className='font-bold flex-col'>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>


                </ul>

            </div>
        </div>
    );
};

export default HomePage;