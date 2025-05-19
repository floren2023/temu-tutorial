/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hVl5q7YIHfe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="hidden md:flex items-center w-full max-w-[120px] space-x-1 rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-900 px-3.5 py-1">
      <SearchIcon />
      <Input type="search" placeholder="Search" className="w-full border-0 h-6 " />
    </div>
  )
}

function SearchIcon() {
  return (
    <svg
       className="h-6 w-6 text-orange-500"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}