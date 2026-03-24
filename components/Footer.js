
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
                <div className="w-full flex flex-col items-center gap-2">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-1 text-orange-500">Othniel Foundation</h2>
                    <p className="text-base text-white/80 mb-2 text-center max-w-md">
                        Empowering communities, inspiring hope, and creating lasting change.
                    </p>
                </div>
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/donate" className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-200 shadow">Donate</Link>
                    <Link href="/contact" className="px-5 py-2 rounded-full bg-yellow-400 text-orange-700 font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-200 shadow">Volunteer</Link>
                </div>
                <ul className="flex flex-wrap justify-center gap-6 mt-4 mb-2">
                    <li><Link href="/about" className="hover:underline text-white/90">About Us</Link></li>
                    <li><Link href="/programs" className="hover:underline text-white/90">Programs</Link></li>
                    <li><Link href="/blog" className="hover:underline text-white/90">Blog</Link></li>
                    <li><Link href="/contact" className="hover:underline text-white/90">Contact</Link></li>
                </ul>
                <p className="text-white/90 text-xs mb-2 text-center">Email: othnielsfoundation@gmail.com | Phone: +234 803 111 7861, +234 902 916 4846</p>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 border-t border-white/10 pt-6">
                <div className="flex gap-4 mb-4 sm:mb-0">
                    <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.167 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.324 21.167 22 17.019 22 12z"/></svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.417.722-.656 1.561-.656 2.475 0 1.708.87 3.213 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 1.982 1.388 3.834 3.444 4.252a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.419A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A10.025 10.025 0 0 0 24 4.557z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/othnielsfoundation?igsh=MWcza25kcjM5MmoxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 8.332 2 8.756 2 12c0 3.244.013 3.668.072 4.948.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.756 24 12 24c3.244 0 3.668-.013 4.948-.072 1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.705.072-4.948 0-3.244-.013-3.668-.072-4.948-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.244 0 12 0z"/><circle cx="12" cy="12" r="3.5"/></svg>
                    </a>
                </div>
                <div className="text-center text-white/80 text-sm italic max-w-xl">
                    &quot;The smallest act of kindness is worth more than the grandest intention.&quot; – Oscar Wilde
                </div>
                <span className="text-xs text-white/70 mt-2 text-center">&copy; {new Date().getFullYear()} Othniels Foundation. All rights reserved.</span>
            </div>
        </footer>
    );
}