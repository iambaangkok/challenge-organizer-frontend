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
    const [markdown, setMarkdown] = useState<string | null>('');

    var wrap = require('wordwrap')(80, { mode: 'hard' });
    var codeblocks = require('remark-code-blocks');

    useEffect(() => {
        var text = localStorage.getItem('markdown');
        if (text === null) {
            setMarkdown('');
        } else {
            setMarkdown(text);
        }
    }, []);

    const previewMarkdownPost = {
        author: {
            displayName: 'Preview Markdown',
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
