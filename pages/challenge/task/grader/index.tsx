import Head from 'next/head';
import router from 'next/router';
import GraderPage from '../../../../components/grader/GraderPage';

export default function GraderRoute() {
    return (
        <>
            <Head>
                <title>Grader</title>
            </Head>
            <div className="mt-6">
                <GraderPage></GraderPage>
            </div>
        </>
    );
}
