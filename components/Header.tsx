import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className='flex flex-row'>
      <div className='basis-1/4'>
        <Image src={'pfp.png'} alt='pfp' width='100' height='100' />
      </div>
      <div className='basis-1/2 flex flex-row justify-center items-center space-x-5'>
        <Link href={`/about`}>
          <button className='font-semibold bg-transparent hover:bg-blue-light dark:hover:bg-blue-dark text-blue-light dark:text-blue-dark hover:text-background-light dark:hover:text-background-dark py-2 px-4 border border-blue-light dark:border-blue-dark hover:border-transparent rounded'>
            About
          </button>
        </Link>
        <Link href={`/blog`}>
          <button className='font-semibold bg-transparent hover:bg-purple-light dark:hover:bg-purple-dark text-purple-light dark:text-purple-dark hover:text-background-light dark:hover:text-background-dark py-2 px-4 border border-purple-light dark:border-purple-dark hover:border-transparent rounded'>
            Blog
          </button>
        </Link>
        <Link href={`/projects`}>
          <button className='font-semibold bg-transparent hover:bg-red-light dark:hover:bg-red-dark text-red-light dark:text-red-dark hover:text-background-light dark:hover:text-background-dark py-2 px-4 border border-red-light dark:border-red-dark hover:border-transparent rounded'>
            Projects
          </button>
        </Link>
        <Link href={`/resume`}>
          <button className='font-semibold bg-transparent hover:bg-green-light dark:hover:bg-green-dark text-green-light dark:text-green-dark hover:text-background-light dark:hover:text-background-dark py-2 px-4 border border-green-light dark:border-green-dark hover:border-transparent rounded'>
            Resume
          </button>
        </Link>
      </div>
      <div className='basis-1/4'></div>
    </div>
  );
}
