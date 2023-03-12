import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PostModule from '../../components/challenge/PostModule';
import styles from './css/index.module.scss';

interface post {
    data: {
        author: {
            displayName: string;
            isHost: boolean;
        };
        contentMarkdown: string | null;
    };
}

export default function Preview() {
    const [markdown, setMarkdown] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');

    useEffect(() => {
        var md = localStorage.getItem('markdown');
        var name = localStorage.getItem('displayName');
        if (name === null) setDisplayName('Not Found');
        else setDisplayName(name);
        if (md === null) setMarkdown('Not Found');
        else setMarkdown(md);
    }, []);

    const previewMarkdownPost = {
        author: {
            displayName: displayName,
            isHost: false,
        },
        contentMarkdown: markdown,
    };

    return (
        <div className={styles['Body']}>
            <div className={styles['MarkdownBody']}>
                <PostModule data={previewMarkdownPost} />
            </div>
        </div>
    );
}
