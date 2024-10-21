
export const Loading = () => {
    return (
        <div className='w-full my-32 flex flex-col gap-6 items-center justify-center'>
            <img src='/logo.svg' alt='logo' className='w-20 h-20 animate-spin' />
            <p className='animate-pulse text-sm'>Loading...</p>
        </div>
    )
}
