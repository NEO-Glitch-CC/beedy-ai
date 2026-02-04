"use client";

import React from 'react';
import Link from 'next/link';
import { ManagementBar } from '../animate-ui/components/community/management-bar';
import { Menu } from 'lucide-react';
import {Button} from "@/components/ui/button";

interface NavbarProps {
	onOpen?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
	return (
		<nav className="fixed z-50 top-0 inset-x-0 md:p-2">
			{/* Desktop / large: existing management bar */}
			<div className="hidden md:block">
				<ManagementBar />
			</div>

			{/* Mobile / tablet: simple header */}
			<div className="md:hidden bg-white border-b border-border">
				<div className="flex items-center justify-between px-4 py-[7.5px]">
					<div className="">
						<Link href="/" className="font-semibold text-lg">Beedy AI</Link>
					</div>
					<div className="flex items-center justify-end gap-3">

						<Button variant={'outline'} size={'icon-sm'} aria-label="Open menu" onClick={onOpen} className="">
							<Menu />
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;