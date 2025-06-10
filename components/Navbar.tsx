import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItems from './NavItems';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Sign } from 'crypto';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href='/'>
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        width={46}
                        height={44}
                    />
                    <h1 className='text-2xl font-bold text-primary'>Duni AI</h1>
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button className='btn-signin'>Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <div className='flex items-center gap-2'>
                        <UserButton />
                    </div>
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;