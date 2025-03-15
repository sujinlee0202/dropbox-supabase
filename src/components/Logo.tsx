import Image from "next/image";

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/images/dropbox_icon.png'
        alt='logo'
        width={50}
        height={30}
        className='!w-10 !h-auto'
      />
      <span className='text-xl font-bold'>Minibox</span>
    </div>
  );
}
