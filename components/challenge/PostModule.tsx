import ReactMarkdown from 'react-markdown';
import styles from './css/PostModule.module.scss';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';

interface post {
    data: {
        author: {
            displayName: string;
            isHost: boolean;
        };
        createdAt: string;
        contentMarkdown: string | null;
    };
}

export default function PostModule(postData: post) {
    const [time, setTime] = useState<string>('');

    var wrap = require('wordwrap')(92);
    var codeblocks = require('remark-code-blocks');

    const findDiff = () => {
        var postTime = new Date(postData.data.createdAt);
        var currentTime = new Date();

        var diffTime = (currentTime.getTime() - postTime.getTime()) / 1000;

        if (diffTime < 60) {
            setTime('Just now');
        } else if (diffTime < 60 * 60) {
            var diffMin = Math.floor(diffTime / 60);
            if (diffMin == 1) setTime(`${diffMin} minute ago`);
            else setTime(`${diffMin} minutes ago`);
        } else if (diffTime < 60 * 60 * 24) {
            var diffHrs = Math.floor(diffTime / (60 * 60));
            if (diffHrs == 1) setTime(`${diffHrs} hour ago`);
            else setTime(`${diffHrs} hours ago`);
        } else if (diffTime < 60 * 60 * 24 * 30) {
            var diffDay = Math.floor(diffTime / (60 * 60 * 24));
            if (diffDay == 1) setTime(`${diffDay} day ago`);
            else setTime(`${diffDay} days ago`);
        } else if (diffTime < 60 * 60 * 24 * 30 * 12) {
            var diffMns = Math.floor(diffTime / (60 * 60 * 24 * 30));
            if (diffMns == 1) setTime(`${diffMns} month ago`);
            else setTime(`${diffMns} months ago`);
        } else {
            var diffYrs = Math.floor(diffTime / (60 * 60 * 24 * 30 * 12));
            if (diffYrs == 1) setTime(`${diffYrs} year ago`);
            else setTime(`${diffYrs} years ago`);
        }
    };

    useEffect(findDiff, [postData.data.createdAt]);

    return (
        <div className={styles['Post'] + ' ShadowContainer'}>
            <div className={styles['GrayArea']}></div>
            <div className={styles['Content']}>
                <div className="TextDimmedMain S2Regular">
                    Posted by {postData.data.author.displayName} {time}
                </div>
                <div
                    className={
                        styles['MarkdownBody'] + ' TextRegular markdown-body'
                    }
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, codeblocks]}
                        className="markdown-body"
                    >
                        {wrap(postData.data.contentMarkdown)}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
