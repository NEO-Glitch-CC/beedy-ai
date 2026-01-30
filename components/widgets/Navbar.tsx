"use client";

import React from 'react';
import { ManagementBar } from '../animate-ui/components/community/management-bar';

const Navbar = () => {
	return (
		<nav className='fixed top-0 inset-x-0 p-2'>
			<ManagementBar/>
		</nav>
	);
}

export default Navbar;