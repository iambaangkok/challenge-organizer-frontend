import Navbar from './navbar/NavBar'

export default function Layout({ children }: any) {
    return (
        <>
            
            <main><Navbar />{children}</main>
        </>
    )
}