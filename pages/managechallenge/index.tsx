import Head from 'next/head';
import ManagePage from '../../components/managechallenge/ManagePage';
export default function ManageChallengePage() {
    return (
        <>
            <Head>
                <title>Manage Challenge</title>
            </Head>
            <div className="mt-6">
                <ManagePage></ManagePage>
            </div>
        </>
    );
}