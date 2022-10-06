import React from 'react'
import { useTheme } from 'next-themes';
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='text-5xl'>
      {theme === 'dark' ? <BsSun onClick={() => setTheme('light')} /> : <MdDarkMode onClick={() => {setTheme('dark')}} />}
    </div>
  )
}

export default ThemeSwitch;