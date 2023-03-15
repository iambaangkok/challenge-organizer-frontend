import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PostModule from '../../components/challenge/PostModule';
import { PostData, UserData } from '../../types/DataType';
import styles from './css/index.module.scss';

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

    var currentTime = new Date().toISOString()
        // author: {
        //     displayName: displayName,
        //     isHost: false,
        // },
        // createdAt : currentTime,
        // contentMarkdown: markdown,

    var author : UserData = {
        userId: 0,
        banStatus: false,
        displayName: displayName,
    }    
    const previewMarkdownPost : PostData = {
        owner: author,
        postId: 0,
        createdAtDate: currentTime,
        content: markdown
    };

    return (
        <div className={styles['Body']}>
            <div className={styles['MarkdownBody']}>
                <PostModule postData={previewMarkdownPost} />
            </div>
        </div>
    );
}
