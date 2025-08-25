const Footer = () => {
    return <div className="flex justify-between px-4 py-4 bg-gray-800 text-gray-300 font-semibold">
        <div className="mx-4">
            This is just Practice 
        </div>
        <div>
            Made with 
            <a 
                href="https://react.dev/"
                target="_blank"
                className="text-blue-400 hover:underline p-1">
                React
            </a>
            and
            <a 
                href="http://tailwindcss.com/docs"
                target="_blank"
                className="text-blue-400 hover:underline p-1">
                Tailwind CSS
            </a>
        </div>
        <div className="mx-4">
            by Krish 
        </div>
    </div>
}

export default Footer;