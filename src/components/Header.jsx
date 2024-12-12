function Header() {
    const names = [
        'Home',
        'About',
        'Services',
        'Contact'
    ]
    return (
        <header>
            <h1>Dark Programmer</h1>
            <ul>
                {
                    names.map((food) => 
                        <li>
                            <a href="#">{food}</a>
                        </li>
                    )
                }
            </ul>

            <hr />
        </header>
    );
}


export default Header