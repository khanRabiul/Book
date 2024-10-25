
const Footer = () => {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
  return (
    <footer className="fixed bottom-0 w-full bg-slate-600 z-50">
        <div className="container mx-auto text-center py-3 ">
            <a href="#" className=" capitalize text-sm">All rights received by task manager  &copy;{year}</a>
        </div>
    </footer>
  )
}

export default Footer