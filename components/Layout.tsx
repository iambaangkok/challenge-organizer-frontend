import Navbar from './navbar/NavBar'

export default function Layout({ children } : any) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}