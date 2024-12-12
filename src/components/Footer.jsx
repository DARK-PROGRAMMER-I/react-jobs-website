function Footer() {

    const foodNames = [
        'Apple',
        'Mango',
        'Bnana',
    ];

    return (
        <footer>
            <div>
                <ul>
                    {
                        foodNames.map((foodItem) =>

                            <li>
                                <a href='#'>{foodItem}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
            <hr />
            <p>
                &copy; {new Date().getFullYear()} DigifyR
            </p>

        </footer>
    );
}

export default Footer