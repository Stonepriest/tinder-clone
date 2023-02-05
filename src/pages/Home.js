import Nav from '../components/Nav'

const Home = () => {

    const authToken = false

    const handleClick = () => {
        console.log('Clicked')
    }
    return (
        <>
        <Nav/>
        <div className="home">
            <h1>Swipe Right&copy;</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account' }
            </button>
        </div>
        </>
    )
}
export default Home