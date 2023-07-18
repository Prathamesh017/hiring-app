'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export function Header() {
  let data = JSON.parse(localStorage.getItem('data') as string)

  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('data')
    router.push('/')
  }
  const postedJobs = () => {
    router.push('/api/company/post')
  }

  return (
    <div className="company-header  grid  grid-flow-col items-center grid-cols-2 md:grid-cols-3 p-2 ">
      <div className="flex flex-row space-x-2 items-center">
        <h1 className="text-sm md:text-xl px-4">
          <p>
            Welcome
            <span className="text-[#01967b]">
              {data ? data.loginCompany.companyName : ''}
            </span>
          </p>
        </h1>
      </div>
      <div className="headers hidden  md:flex text-sm md:text-base flex flex-row space-x-6 items-center">
        <div>
          <Link href="/api/company">
            <button className="hover:text-slate-700" onClick={postedJobs}>
              Profile
            </button>
          </Link>
        </div>
        <div>
          <Link href="/api/company/post">
            <button className="hover:text-slate-700">Jobs Posted</button>
          </Link>
        </div>
        <div>
          <button className="hover:text-slate-700">Job Responses</button>
        </div>
      </div>
      <div className="logout-button  justify-self-end">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 
     "
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
