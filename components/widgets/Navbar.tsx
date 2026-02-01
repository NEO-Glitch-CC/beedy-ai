"use client";

import React from 'react';
import Link from 'next/link';
import { ManagementBar } from '../animate-ui/components/community/management-bar';
import { Menu } from 'lucide-react';

interface NavbarProps {
	onOpen?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
	return (
		<nav className="fixed z-50 top-0 inset-x-0 p-2">
			{/* Desktop / large: existing management bar */}
			<div className="hidden md:block">
				<ManagementBar />
			</div>

			{/* Mobile / tablet: simple header */}
			<div className="md:hidden bg-transparent">
				<div className="flex items-center justify-between px-4 py-3">
					<Link href="/" className="font-semibold text-lg">Beedy AI</Link>
					<button aria-label="Open menu" onClick={onOpen} className="p-2 rounded-md hover:bg-neutral-100">
						<Menu />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;