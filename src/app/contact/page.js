import Counter from '@/components/Counter/Counter';
import React from 'react';

export const metadata = {
    title : 'Next.js | Contact',
    description : 'this is Contact page for my next.js app'
}

const Contact = () => {
    return (
        <div>
            <h1 className='text-gray-500'>Contact Us</h1>
            <Counter />
        </div>
    );
};

export default Contact;