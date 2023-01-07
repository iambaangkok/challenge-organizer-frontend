import { Button } from "@mui/material";
import Link from "next/link";

export default function Login() {
    return (
        <div>
            <div>
                Hello This is Login page
            </div>
            <Link href='/'>
                <Button variant='outlined'>
                    Back to Home page
                </Button>
            </Link>


        </div>

    )
}