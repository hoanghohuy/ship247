'use client'
import Menu from '@/components/Menu';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-slate-100'>
      <div className='max-w-[--max-width] bg-white mx-auto min-h-screen relative'>
        <header className='p-3'>
          <div className='flex justify-center items-center'>
            <img className='w-20' src='/images/logo.png' />
          </div>
        </header>
        <main className='p-3 pt-0'>
            <img src='/images/banner.png' className='rounded-lg' />
            <div className='mt-3 w-full flex gap-3'>
              <Link className='block w-full bg-orange-400 p-3 rounded-lg text-white' href={'/create-order'}>
                Tạo đơn
              </Link>
              <Link className='block w-full bg-orange-400 p-3 rounded-lg text-white' href={'/create-order'}>
                Quản lý đơn
              </Link>
            </div>
        </main>
        {/* <footer>
          aaaa
        </footer> */}
       <Menu />
      </div>
    </div>
  );
}
