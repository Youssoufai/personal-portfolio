const Navbar = () => {
    return (
        <>
            <nav
                className="flex justify-between items-center text-text-color"
            >
                <div>
                    COGNITIX DEV
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li>Work</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Navbar;