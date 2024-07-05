import Link from 'next/link';
import React from 'react';

export const metadata = {
    title : 'Next.js | Skills',
    description : 'this is Skills page for my next.js app'
}


const Skills = () => {
    return (
        <div className='flex items-start justify-center mx-auto'>
            <div>
                <h1>My Skills</h1>
                <ul className='space-y-3 mt-10'>
                    <li>
                        <Link href="/skills/next">
                            <button className='btn btn-sm'>Next</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills/react">
                            <button className='btn btn-sm'>React</button>
                        </Link>
                    </li>
                </ul>


            </div>
        </div>
    );
};

export default Skills;