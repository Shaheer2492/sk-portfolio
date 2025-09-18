"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80svh] grid place-items-center px-6 text-center">
      <div>
        <motion.pre
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm text-muted mb-4 overflow-auto"
        >
{`         ___  __ __   ____  ____    ____  ____   ____ 
        /  _]|  |  | /    ||    \  /    ||    \ |    \
       /  [_ |  |  ||  o  ||  o  )|  o  ||  _  | |  o  )
      |    _]|_   _||     ||     ||     ||  |  | |     |
      |   [_  |   | |  _  ||  O  ||  _  ||  |  | |  O  |
      |     | |   | |  |  ||     ||  |  ||  |  | |     |
      |_____| |___| |__|__||_____||__|__||__|__| |_____|`}
        </motion.pre>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Page not found</h1>
        <p className="text-muted mb-6">The link might be broken or the page was removed.</p>
        <Link className="underline" href="/">Go home</Link>
      </div>
    </div>
  );
}


