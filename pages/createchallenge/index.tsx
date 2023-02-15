import Head from 'next/head';
import React from 'react';
import CreationPage from '../../components/challengecreation/CreationPage';
export default function CreateChallengePage() {
    return (
        <>
            <Head>
                <title>Challenge Creation</title>
            </Head>
            <div className="mt-6">
                <CreationPage></CreationPage>
            </div>
        </>
    );
}
