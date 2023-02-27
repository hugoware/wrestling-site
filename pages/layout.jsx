
export default function Layout(props) {
  
  return (
    <div>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-slate-700 fixed w-full z-20 top-0 left-0 border-b border-slate-800 dark:border-slate-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Coppell Wrestling</span>
      <div class="flex md:order-2">
        <button type="button" class="text-white bg-red-700 hover:red-900 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800">Contact Us</button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 border border-slate-700 rounded-lg bg-slate-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-slate-700 md:dark:bg-slate-700 dark:border-slate-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white" >Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Videos</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tournaments</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Photo Gallery</a>
          </li>
        </ul>
      </div>
      </div>
      </nav>

      <div className="mt-24">{props.children}</div>
    </div>
  )
}